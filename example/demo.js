// jshint browser:true, jquery: true
import {addLoader, removeLoader, documentReady, errorMessage} from './support';

// polyfills
import 'babel-polyfill';
import 'indexeddbshim';
import 'mutationobserver-shim';
import 'object.observe';
import 'array.observe';

// reTHINK modules
import RuntimeUA from 'runtime-core/dist/runtimeUA';

import SandboxFactory from '../resources/sandboxes/SandboxFactory';
let sandboxFactory = new SandboxFactory();
let avatar = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg';

// You can change this at your own domain
let domain = 'localhost';

let runtime = new RuntimeUA(sandboxFactory, domain);

window.runtime = runtime;

// Check if the document is ready
if (document.readyState === 'complete') {
  documentReady();
} else {
  window.addEventListener('onload', documentReady, false);
  document.addEventListener('DOMContentLoaded', documentReady, false);
}

let loginBtn = document.querySelector('.login');
loginBtn.addEventListener('click', function(e) {

  let loginPanel = document.querySelector('.login-panel');
  let content = loginPanel.querySelector('.card-action');
  addLoader(content);

  runtime.identityModule.loginWithRP().then(function(result) {
    removeLoader(content);
    userLoged(result);
  }).catch(function(reason) {
    removeLoader(content);
    let cardHolder = $('.card-content');
    let html = '<div class="row"><div class="col s12"><span class="card-title">Login</span></div><div class="col s12">' + reason.error.message + '</div>';

    cardHolder.html(html);
  });

  let btn = $(e.currentTarget);
  btn.addClass('hide');

});

function userLoged(result) {

  let hypertyHolder = $('.hyperties');
  hypertyHolder.removeClass('hide');

  let cardHolder = $('.card-content');
  let html = '<div class="row"><div class="col s12"><span class="card-title">Logged</span></div><div class="col s2"><img alt="" class="circle responsive-img" src=' + result.picture + ' ></div><div class="col s8"><p><b>id:</b> ' + result.id + '</p><p><b>email:</b> ' + result.email + '</p><p><b>name:</b> ' + result.name + '</p><p><b>locale:</b> ' + result.locale + '</p></div>';

  cardHolder.html(html);

  console.log(result);

  let hyperty = 'hyperty-catalogue://' + domain + '/.well-known/hyperty/HypertyConnector';

  // Load First Hyperty
  runtime.loadHyperty(hyperty).then(hypertyDeployed).catch(function(reason) {
    errorMessage(reason);
  });

}

function hypertyDeployed(result) {

  let loginPanel = $('.login-panel');
  let cardAction = loginPanel.find('.card-action');
  let hypertyInfo = '<span class="white-text"><p><b>hypertyURL:</b> ' + result.runtimeHypertyURL + '</br><b>status:</b> ' + result.status + '</p></span>';

  loginPanel.attr('data-url', result.runtimeHypertyURL);
  cardAction.append(hypertyInfo);

  // Prepare to discover email:
  discoverEmail();

  // Prepare the chat
  let messageChat = $('.hyperty-chat');
  messageChat.removeClass('hide');

  let connector = window.components[result.runtimeHypertyURL].instance;

  connector.addEventListener('have:notification', notificationHandler);

  runtime.messageBus.addListener(result.runtimeHypertyURL, newMessageRecived);
}

function discoverEmail() {

  let section = $('.discover');
  let searchForm = section.find('.form');
  let inputField = searchForm.find('.friend-email');

  section.removeClass('hide');

  searchForm.on('submit', function(event) {
    event.preventDefault();

    let collection = section.find('.collection');
    let collectionItem = '<li class="collection-item"><div class="preloader-wrapper small active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></li>';

    collection.removeClass('hide');
    collection.addClass('center-align');
    collection.html(collectionItem);

    let email = inputField.val();
    console.log(email);
    runtime.registry.getUserHyperty(email).then(emailDiscovered).catch(emailDiscoveredError);

  });
}

function emailDiscovered(result) {
  console.log('Email Discovered: ', result);

  let section = $('.discover');
  let collection = section.find('.collection');
  let collectionItem = '<li class="collection-item avatar"><img src="' + avatar + '" alt="" class="circle"><span class="title">' + result.id + '</span><p>' + result.descriptor + '<br>' + result.hypertyURL + '</p><a href="#!" class="message-btn"><i class="material-icons left">message</i>Send Message</a><a href="#!" class="call-btn"><i class="material-icons">call</i>Call</a></li>';

  collection.empty();
  collection.removeClass('center-align');
  collection.append(collectionItem);

  let messageChatBtn = collection.find('.message-btn');
  messageChatBtn.on('click', function(event) {
    event.preventDefault();
    openChat(result, false);
  });

  let callBtn = collection.find('.call-btn');
  callBtn.on('click', function(event) {
    event.preventDefault();
    openChat(result, true);
  });

}

function emailDiscoveredError(result) {

  console.error('Email Discovered Error: ', result);

  let section = $('.discover');
  let collection = section.find('.collection');

  let collectionItem = '<li class="collection-item orange lighten-3"><i class="material-icons left circle">error_outline</i>' + result + '</li>';

  collection.empty();
  collection.removeClass('center-align');
  collection.removeClass('hide');
  collection.append(collectionItem);
}

function openChat(result, video) {

  let messagesChat = $('.messages');
  let messageForm = messagesChat.find('.form');
  let loginPanel = $('.login-panel');
  let fromUser = loginPanel.attr('data-url');
  let toUserEl = messagesChat.find('.runtime-hyperty-url');
  let toUser = result.hypertyURL;

  toUserEl.html(toUser);

  let connector = window.components[fromUser].instance;

  if (video) {

    connector.connect(toUser).then(function(controller) {

      showVideo(controller);

      controller.addEventListener('stream:added', processVideo);
      controller.addEventListener('on:notification', notification);
      controller.addEventListener('on:subscribe', function(controller) {
        console.info('on:subscribe:event ', controller);
      });

      controller.addEventListener('connector:notification', notification);

      controller.addEventListener('stream:added', processVideo);

    }).catch(function(reason) {
      console.error(reason);
    });

  }

  messageForm.on('submit', function(e) {

    let messageText = messagesChat.find('.message-text').val();

    if (messageText) {
      sendMessage(fromUser, toUser, messageText);
    }

    messageForm[0].reset();

    e.preventDefault();
  });

  messagesChat.removeClass('hide');

}

function newMessageRecived(msg) {

  // Object {to: "hyperty://ua.pt/71552726-ae61-411a-bab0-41843b26b56f", from: "hyperty://ua.pt/586f5f0a-aa98-4d23-b864-a6efd3ccdd74", type: "message", body: Object, id: 2}
  if (msg.type === 'message') {
    processMessage(msg, 'in');
  }

}

function processVideo(stream) {

  let messageChat = $('.hyperty-chat');
  let video = messageChat.find('.video');
  video[0].src = stream;

}

function processMessage(msg, type) {

  // console.log(msg.body.value);
  console.log(type);
  if (typeof msg.body.value !== 'object' && msg.body.value !== undefined) {

    let messageCollection = $('.hyperty-chat .collection');
    let messageItem = '<li class="collection-item avatar"><img src="' + avatar + '" alt="" class="circle"><span class="title">' + msg.from + '</span><p>' + msg.body.value.replace(/\n/g, '<br>') + '</p></li>';

    messageCollection.append(messageItem);
  }

}

function sendMessage(from, to, message) {

  let msg = {
    to: to,
    from: from,
    type: 'message',
    body:{
      value: message
    }
  };

  processMessage(msg, 'out');
  runtime.messageBus.postMessage(msg);
}

function notification(event) {
  console.log('Event: ', event);
}

function notificationHandler(controller, event) {

  console.log(controller, event);

  let loginPanel = $('.login-panel');
  let incoming = $('.modal-call');
  let acceptBtn = incoming.find('.btn-accept');
  let rejectBtn = incoming.find('.btn-reject');

  // let hypertyId = loginPanel.attr('data-url');
  // let informationHolder = incoming.find('.information');
  // let resources = {};

  showVideo(controller);

  controller.addEventListener('stream:added', processVideo);

  acceptBtn.on('click', function(e) {

    e.preventDefault();

    controller.accept().then(function(result) {
      console.log(result);
    }).catch(function(reason) {
      console.error(reason);
    });

  });

  rejectBtn.on('click', function(e) {

    controller.decline().then(function(result) {
      console.log(result);
    }).catch(function(reason) {
      console.error(reason);
    });

    e.preventDefault();
  });

  $('.modal-call').openModal();

  // if (msg.body.hasOwnProperty('value') && msg.body.value.hasOwnProperty('resources')) {
  //   resources = msg.body.value.resources;
  // }
  //
  // console.log(calleeInfo, resources);
  //
  // let parseInformation = '<div class="col s12">' +
  //       '<div class="row valign-wrapper">' +
  //         '<div class="col s2">' +
  //           '<img src="' + calleeInfo.picture + '" alt="" class="circle responsive-img">' +
  //         '</div>' +
  //         '<span class="col s10">' +
  //           '<div class="row">' +
  //             '<span class="col s3 text-right">Name: </span>' +
  //             '<span class="col s9 black-text">' + calleeInfo.name + '</span>' +
  //           '</span>' +
  //           '<span class="row">' +
  //             '<span class="col s3 text-right">Email: </span>' +
  //             '<span class="col s9 black-text">' + calleeInfo.email + '</span>' +
  //           '</span>' +
  //           '<span class="row">' +
  //             '<span class="col s3 text-right">locale: </span>' +
  //             '<span class="col s9 black-text">' + calleeInfo.locale + '</span>' +
  //           '</span>' +
  //         '</div>' +
  //       '</div>';
  //
  // parseInformation += '<div class="row"><h5>Resources</h5><ul>';
  // Object.keys(resources).map(function(key) {
  //   parseInformation += '<li>' + key + '</li>';
  // });
  //
  // parseInformation += '</ul></div></div>';
  //
  // informationHolder.html(parseInformation);
  //
  // acceptBtn.on('click', function(e) {
  //
  //   let a = window.components[hypertyId].hypertyCode;
  //   a.accept().then(function(controller) {
  //     console.log('Controller: ', controller);
  //   }).catch(function(reason) {
  //     console.error(reason);
  //   });
  //
  //   e.preventDefault();
  // });
  //
  // rejectBtn.on('click', function(e) {
  //   console.log('rejected');
  //   e.preventDefault();
  // });
  //
  // $('.modal-call').openModal();
}

function showVideo(controller) {
  let messageChat = $('.hyperty-chat');
  let videoHolder = messageChat.find('.video-holder');
  videoHolder.removeClass('hide');

  let btnCamera = videoHolder.find('.camera');
  let btnMute = videoHolder.find('.mute');
  let btnMic = videoHolder.find('.mic');
  let btnHangout = videoHolder.find('.hangout');

  console.log(controller);

  btnCamera.on('click', function(event) {

    event.preventDefault();

    controller.disableCam().then(function(status) {
      console.log(status, 'camera');
      let icon = 'videocam_off';
      let text = 'Disable Camera';
      if (!status) {
        text = 'Enable Camera';
        icon = 'videocam';
      }

      let iconEl = '<i class="material-icons left">' + icon + '</i>';
      $(event.currentTarget).html(iconEl);
    }).catch(function(e) {
      console.error(e);
    });

  });

  btnMute.on('click', function(event) {

    event.preventDefault();

    controller.mute().then(function(status) {
      console.log(status, 'audio');
      let icon = 'volume_off';
      let text = 'Disable Sound';
      if (!status) {
        text = 'Enable Sound';
        icon = 'volume_up';
      }

      let iconEl = '<i class="material-icons left">' + icon + '</i>';
      $(event.currentTarget).html(iconEl);
    }).catch(function(e) {
      console.error(e);
    });

    console.log('mute other peer');

  });

  btnMic.on('click', function(event) {

    event.preventDefault();

    controller.disableMic().then(function(status) {
      console.log(status, 'mic');
      let icon = 'mic_off';
      let text = 'Disable Microphone';
      if (!status) {
        icon = 'mic';
        text = 'Enable Microphone';
      }

      let iconEl = '<i class="material-icons left">' + icon + '</i>';
      $(event.currentTarget).html(iconEl);
    }).catch(function(e) {
      console.error(e);
    });

  });

  btnHangout.on('click', function(event) {

    event.preventDefault();

    console.log('hangout');
  });
}
