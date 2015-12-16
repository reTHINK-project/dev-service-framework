// polyfills
import 'babel-polyfill';
import 'indexeddbshim';
import 'mutationobserver-shim';
import 'object.observe';
import 'array.observe';

// reTHINK modules
import {RuntimeUA} from 'runtime-core';
import SandboxFactory from '../resources/sandboxes/SandboxFactory';

var sandboxFactory = new SandboxFactory();
var runtime = new RuntimeUA(sandboxFactory);
var hypertiesList = ['hyperty-catalogue://ua.pt/HelloHyperty'];

window.runtime = runtime;

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
    var form = target.parentElement.parentElement;
    var fromHyperty = form.getAttribute('data-url');
    var toHyperty = form.querySelector('.toHyperty').value;
    var messageHypert = form.querySelector('.messageHyperty').value;

    if (fromHyperty && toHyperty && messageHypert) {
      sendMessage(fromHyperty, toHyperty, messageHypert);
    }

    form.reset();

    e.preventDefault();
  });

  runtime.messageBus.addListener(result.runtimeHypertyURL, newMessageRecived);

  hypertyEl.querySelector('.call').addEventListener('click', startHypertyConnector);
  hypertyEl.querySelector('.accept').addEventListener('click', acceptCall);

  var connector = components[result.runtimeHypertyURL].hypertyCode.hypertyConnector;

  connector.addEventListener('connector:notification', function(event) {
    var toForm = document.querySelector('form[data-url="' + event.to + '"]');

    console.log('connector notification:', event);

    if (toForm) {
      var button = toForm.querySelector('.accept');
      button.className = button.className.replace('hide', '');
    }

  });

  connector.connectionController.addEventListener('stream:added', function(stream, reporter, observer) {
    console.log('Stream: ', stream, reporter, observer);
    document.querySelector('.video').src = stream;
  });

}

function startHypertyConnector(e) {

  var target = e.target;
  var form = target.parentElement.parentElement;
  var fromHyperty = form.getAttribute('data-url');
  var toHyperty = form.querySelector('.toHyperty').value;
  var messageHypert = form.querySelector('.messageHyperty').value;
  var connected = target.getAttribute('data-connected');

  console.log(target);

  e.preventDefault();

  if (!toHyperty) {
    alert('nobody to connect');
    return;
  }

  var a = components[fromHyperty].hypertyCode;

  if (connected) {

    a.disconnect().then(function(status) {

      target.setAttribute('data-connected', false);
      target.innerHTML = 'Call';

    }).catch(function(reason) {
      console.error(reason);
    });

  } else {

    a.connect(toHyperty).then(function(controller) {

      target.setAttribute('data-connected', true);
      target.innerHTML = 'End';

      // controller.addEventListener('stream:added', function(stream) {
      //   form.querySelector('.video').src = stream;
      // });

    }).catch(function(reason) {
      console.error(reason);
    });

  }
}

function acceptCall(e) {

  var target = e.target;
  var form = target.parentElement.parentElement;
  var hyperty = form.getAttribute('data-url');
  var resourceObj = target.getAttribute('data-obj');
  var messageHypert = form.querySelector('.messageHyperty').value;

  var a = components[hyperty].hypertyCode;
  a.accept().then(function(controller) {

    console.log('Controller: ', controller);

  }).catch(function(reason) {
    console.error(reason);
  });

  e.preventDefault();

}

function newMessageRecived(msg) {

  var fromHyperty = msg.from;
  var toHyperty = msg.to;

  var elTo = document.querySelector('form[data-url="' + toHyperty + '"]');

  if (msg.body.hasOwnProperty('value') && msg.body.value.length) {
    var listTo = elTo.parentElement.querySelector('.list');
    var itemTo = document.createElement('li');

    itemTo.setAttribute('class', 'collection-item avatar right-align');
    itemTo.innerHTML = '<i class="material-icons circle green">call_received</i><label class="name title">' + fromHyperty + '</label><p class="message">' + msg.body.value.replace(/\n/g, '<br>') + '</p>';

    listTo.appendChild(itemTo);
  }

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
    itemFrom.innerHTML = '<i class="material-icons circle yellow">call_made</i><label class="name title">' + to + '</label><p class="message">' + messageObject.body.value.replace(/\n/g, '<br>') + '</p>';

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
    }, (100 * time));

    time++;

  });

}

loadHyperties();
