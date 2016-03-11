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

function deployReporter(runtimeLoader) {

  let hypertyHolder = $('.hyperties');
  hypertyHolder.removeClass('hide');


  let hyperty = 'hyperty-catalogue://' + runtime.domain + '/.well-known/hyperty/HelloWorldReporter';

  // Load First Hyperty
  runtimeLoader.requireHyperty(hyperty).then(hypertyDeployed).catch(function(reason) {
    errorMessage(reason);
  });

}


function hypertyDeployed(result) {

  let hyperty;

  hyperty = result.instance;

/*
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
  });*/

  console.log(hyperty);

/*  let hypertyPanel = $('.hyperty-panel');

  hypertyPanel.append(hypertyObserver.runtimeHypertyURL);*/

  let hello = $('.hello-panel');

  let sayHello = '<form class="say-hello"> Say hello to Hyperty: <input type="text" name="toHyperty"><br><input type="submit" value="Say Hello"></form>'

  hello.append(sayHello);

  $('.say-hello').on('submit', sayHello);
}


function sayHello(toHyperty) {

  this.hyperty.hello(toHyperty);

  $('.hello-panel').hide();

  let bye = $('.bye-panel');

  let sayBye = '<button onclick="sayBye()">Say Bye</button>';

  hello.append(sayBye);

}

function sayBye() {

  this.hyperty.bye();

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
