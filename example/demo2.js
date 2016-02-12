// jshint browser:true, jquery: true
/* global Handlebars */
/* global Materialize */

import {removeLoader, documentReady, errorMessage} from './support';

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

setTimeout(function() {
  userLoged();
}, 1000);

function userLoged() {

  let hypertyHolder = $('.hyperties');
  hypertyHolder.removeClass('hide');

  let content = $('.card-action');
  removeLoader(content);

  let hyperty = 'hyperty-catalogue://' + domain + '/.well-known/hyperty/HypertyChat';

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

  let messageChat = $('.chat');
  messageChat.removeClass('hide');

  let chatSection = $('.chat-section');
  chatSection.removeClass('hide');

  Handlebars.getTemplate('chat-section').then(function(template) {

    let html = template();
    $('.chat-section').html(html);

    prepareChat();
  });

}

function prepareChat() {

  let loginPanel = $('.login-panel');
  let hypertyURL = loginPanel.attr('data-url');
  let roomsSections = $('.rooms');

  // Prepare the chat
  let hypertyChat = window.components[hypertyURL].instance;
  let name = 'reThink';

  hypertyChat.create(name).then(function(chatGroup) {

    let collection = roomsSections.find('.collection');
    let item = '<li class="collection-item">' + chatGroup.dataObjectReporter.data.communication.id + '</li>';
    collection.append(item);

    let badge = collection.find('.collection-header .badge');
    let items = collection.find('.collection-item').length;
    badge.html(items);

    chatManagerReady(chatGroup);

  }).catch(function(reason) {
    console.error(reason);
  });

}

function chatManagerReady(chatGroup) {

  let chatSection = $('.chat-section');
  let addParticipantBtn = chatSection.find('.add-participant-btn');

  let addParticipantModal = $('.add-participant');
  let btnAdd = addParticipantModal.find('.btn-add');
  let btnCancel = addParticipantModal.find('.btn-cancel');
  let joinRoomBtn = chatSection.find('.join-room');

  let messageForm = chatSection.find('.message-form');

  let joinModal = $('.join-chat');
  let joinBtn = joinModal.find('.btn-join');

  Handlebars.getTemplate('chat-header').then(function(template) {
    let name = chatGroup.dataObjectReporter.data.id;
    let resource = chatGroup.dataObjectReporter._url;

    let html = template({name: name, resource: resource});
    $('.chat-header').append(html);

  });

  messageForm.on('submit', function(event) {
    event.preventDefault();
    let object = $(this).serializeObject();

    console.log('Send Message:', object);

    let message = object.message;
    chatGroup.send(message);
  });

  chatGroup.addEventListener('participant:added', function(event) {
    Materialize.toast('New participant added ' + event, 3000, 'rounded');
    addParticipant(event);
  });

  btnAdd.on('click', function(event) {
    event.preventDefault();

    let emailValue = addParticipantModal.find('.input-name').val();
    chatGroup.addParticipant(emailValue).then(function(result) {
      console.log('hyperty', result);
    }).catch(function(reason) {
      console.error(reason);
    });

  });

  joinRoomBtn.on('click', function(event) {
    event.preventDefault();
    joinModal.openModal();
  });

  joinBtn.on('click', function(event) {
    event.preventDefault();
    let name = joinModal.find('.input-name').val();

    chatGroup.join(name).then(function(result) {
      console.log(result);
      Materialize.toast(result, 3000, 'rounded');
    }).catch(function(reason) {
      console.error(reason);
      Materialize.toast(reason, 3000, 'rounded');
    });

  });

  btnCancel.on('click', function(event) {
    event.preventDefault();
  });

  addParticipantBtn.on('click', function(event) {
    event.preventDefault();
    addParticipantModal.openModal();
  });

  chatGroup.addEventListener('have:new:notification', function(event) {
    console.log('have:new:notification: ', event);
    Materialize.toast('Have new notification', 3000, 'rounded');
  });

}

function addParticipant(participant) {

  let section = $('.conversations');
  let collection = section.find('.participant-list');
  let collectionItem = '<li class="chip" data-name="' + participant + '"><img src="' + avatar + '" alt="Contact Person">' + participant + '<i class="material-icons close">close</i></li>';

  collection.removeClass('center-align');
  collection.append(collectionItem);

  let closeBtn = collection.find('.close');
  closeBtn.on('click', function(e) {
    e.preventDefault();

    let item = $(e.currentTarget).parent().attr('data-name');
    removeParticipant(item);
  });
}

function removeParticipant(item) {
  let section = $('.conversations');
  let collection = section.find('.participant-list');
  let element = collection.find('li[data-name="' + item + '"]');
  element.remove();
}

Handlebars.getTemplate = function(name) {

  return new Promise(function(resolve, reject) {

    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
      Handlebars.templates = {};
    } else {
      resolve(Handlebars.templates[name]);
    }

    $.ajax({
      url: 'templates/' + name + '.hbs',
      success: function(data) {
        Handlebars.templates[name] = Handlebars.compile(data);
        resolve(Handlebars.templates[name]);
      },

      fail: function(reason) {
        reject(reason);
      }
    });

  });

};
