// jshint browser:true, jquery: true
/* global Handlebars */
/* global Materialize */

//import config from '../system.config.json!json';

// polyfills
/*
import {ready, errorMessage} from '/examples/support';

import 'babel-polyfill';
import 'indexeddbshim';
import 'mutationobserver-shim';
import 'object.observe';
import 'array.observe';*/

"use strict";

function deployObserver() {

  let hypertyHolder = $('.hyperties');
  hypertyHolder.removeClass('hide');

  console.log(runtimeLoader);

  let hypertyObserver = 'hyperty-catalogue://' + domain + '/.well-known/hyperty/HelloWorldObserver';

  // Load First Hyperty
  runtimeLoader.requireHyperty(hypertyObserver).then(hypertyOberverDeployed).catch(function(reason) {
    errorMessage(reason);
  });

}


function hypertyObserverDeployed(result) {

  let hypertyObserver;

  hypertyObserver = result.instance;


  let hypertyPanel = $('.hyperty-panel');
  let cardAction = hypertyPanel.find('.card-action');
  let hypertyInfo = '<span class="white-text"><p><b>hypertyURL:</b> ' + result.runtimeHypertyURL + '</br><b>status:</b> ' + result.status + '</p></span>';

  hypertyPanel.attr('data-url', result.runtimeHypertyURL);
  cardAction.append(hypertyInfo);

  let messageChat = $('.chat');
  messageChat.removeClass('hide');

  let chatSection = $('.chat-section');
  chatSection.removeClass('hide');

  Handlebars.getTemplate('chat-section').then(function(html) {
    $('.chat-section').append(html);
  });

  console.log(hypertyObserver);

  hypertyObserver.addEventListener('hello', function(msg) {
    processHello(msg);
  });

}

function processHello(hello) {

  let chatSection = $('.chat-section');

  let hi = `<li class="collection-item avatar">
    <p>` + hello + `</p>
  </li>`;

  chatSection.append(hi);

}

function hypertyReporterDeployed(result) {

  let hypertyReporter;
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

}
