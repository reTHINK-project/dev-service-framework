import 'babel-polyfill';
import 'indexeddbshim';
import 'mutationobserver-shim';
import 'object.observe';
import 'array.observe';

import {RuntimeUA} from 'runtime-core';

import SandboxFactory from '../resources/sandboxes/SandboxFactory';

var sandboxFactory = new SandboxFactory();

var runtime = new RuntimeUA(sandboxFactory);
window.runtime = runtime;

indexedDB.deleteDatabase('registry-DB');

var hypertiesList = ['hyperty-catalogue://ua.pt/HelloHyperty', 'hyperty-catalogue://ua.pt/WorldHyperty'];

function errorMessage(reason) {
  console.log(reason);
}

function deployedHyperties(hyperty, result) {

  var hypertyName = hyperty.substr(hyperty.lastIndexOf('/') + 1);
  var hypertyEl = document.querySelector('.' + hypertyName);

  hypertyEl.querySelector('.status').innerHTML = result.status;
  hypertyEl.querySelector('.name').innerHTML = hypertyName;
  hypertyEl.querySelector('.runtime-hyperty-url').innerHTML = result.runtimeHypertyURL;
  hypertyEl.querySelector('.form').setAttribute('data-url', result.runtimeHypertyURL);
  hypertyEl.querySelector('.send').addEventListener('click', function(e) {

    var target = e.target;
    var form = target.parentElement;
    var fromHyperty = form.getAttribute('data-url');
    var toHyperty = form.querySelector('.toHyperty').value;
    var messageHypert = form.querySelector('.messageHyperty').value;

    if (fromHyperty && toHyperty && messageHypert) {
      sendMessage(fromHyperty, toHyperty, messageHypert);
    }

    form.reset();

    e.preventDefault();
  });

  hypertyEl.querySelector('.call').addEventListener('click', startHypertyConnector);
  hypertyEl.querySelector('.accept').addEventListener('click', acceptCall);

  var h = components[result.runtimeHypertyURL].hypertyCode.hypertyConnector;
  h.onNotification(function(notification, to) {

    var toForm = document.querySelector('form[data-url="' + to + '"]');
    console.log('TO: ', to);

    if (toForm) {
      var button = toForm.querySelector('.accept');
      button.className = button.className.replace('hide','');

      h.connectionController.addEventListener('stream:added', function(stream) {
        console.log('Stream: ', stream);
        toForm.querySelector('.video').src = stream;
      });

    }

  });


  // runtime.messageBus.addListener(result.runtimeHypertyURL, newMessageRecived);
}

function newMessageRecived(msg) {

  var fromHyperty = msg.from;
  var toHyperty = msg.to;

  var elTo = document.querySelector('form[data-url="' + toHyperty + '"]');

  /*if (msg.body.hasOwnProperty('value')) {
    var listTo = elTo.parentElement.querySelector('.list');
    var itemTo = document.createElement('li');

    itemTo.setAttribute('class', 'collection-item avatar right-align');
    itemTo.innerHTML = '<i class="material-icons circle green">call_received</i><label class="name title">' + fromHyperty + '</label><p class="message">' + msg.body.value.replace(/\n/g, '<br>') + '</p>';

    listTo.appendChild(itemTo);
  } else {

  }*/

}

function sendMessage(from, to, message) {

  var messageObject = {
    to: to,
    from: from,
    type: 'message',
    body:{
      value: message
    }
  };

  var form = document.querySelector('form[data-url="' + from + '"]');
  if (form) {
    var listFrom = form.parentElement.querySelector('.list');
    var itemFrom = document.createElement('li');
    itemFrom.setAttribute('class', 'collection-item avatar');
    itemFrom.innerHTML = '<i class="material-icons circle yellow">call_made</i><label class="name title">' + from + '</label><p class="message">' + messageObject.body.value.replace(/\n/g, '<br>') + '</p>';

    listFrom.appendChild(itemFrom);
  }

  runtime.messageBus.postMessage(messageObject);
}

function loadHyperties() {

  var time = 1;

  hypertiesList.forEach(function(hyperty) {

    setTimeout(function() {

      // Load First Hyperty
      runtime.loadHyperty(hyperty).then(function(result) {
        deployedHyperties(hyperty, result);
      }).catch(function(reason) {
        errorMessage(reason);
      });
    }, (1000 * time));

    time++;

  });

}

loadHyperties();

function startHypertyConnector(e){

  var target = e.target;
  var form = target.parentElement;
  var fromHyperty = form.getAttribute('data-url');
  var toHyperty = form.querySelector('.toHyperty').value;
  var messageHypert = form.querySelector('.messageHyperty').value;

  var a = components[fromHyperty].hypertyCode;
  a.connectTo(toHyperty);

  e.preventDefault();
}

function acceptCall(e) {

  var target = e.target;
  var form = target.parentElement;
  var hyperty = form.getAttribute('data-url');
  var resourceObj = target.getAttribute('data-obj');
  var messageHypert = form.querySelector('.messageHyperty').value;


  var a = components[hyperty].hypertyCode;
  a.accept();

  e.preventDefault();

}
