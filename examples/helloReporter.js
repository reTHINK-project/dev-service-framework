// jshint browser:true, jquery: true
/* global Handlebars */
/* global Materialize */

//import config from '../system.config.json!json';

// polyfills
/*

import 'babel-polyfill';
import 'indexeddbshim';
import 'mutationobserver-shim';
import 'object.observe';
import 'array.observe';*/

"use strict";

var hyperty;

function deployReporter(runtimeLoader) {

  let hypertyHolder = $('.hyperties');
  hypertyHolder.removeClass('hide');


  let hypertyUrl = 'hyperty-catalogue://' + runtime.domain + '/.well-known/hyperty/HelloWorldReporter';

  // Load First Hyperty
  runtimeLoader.requireHyperty(hypertyUrl).then(hypertyDeployed).catch(function(reason) {
    console.error(reason);
  });

}


function hypertyDeployed(result) {


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

  let sayHelloTo = '<form class="say-hello"> Say hello to Hyperty: <input class="to-hyperty-input" type="text" name="toHyperty"><br><input type="submit" value="Say Hello"></form>'

  hello.append(sayHelloTo);

  $('.say-hello').on('submit', sayHello);
}


function sayHello(event) {

event.preventDefault();

let toHypertyForm = $(event.currentTarget);

let toHyperty = toHypertyForm.find('.to-hyperty-input').val();

console.log(toHyperty);

  hyperty.hello(toHyperty);

  $('.hello-panel').hide();

  let bye = $('.bye-panel');

  let sayByeTo = '<button class="say-bye">Say Bye</button>';

  bye.append(sayByeTo);

  $('.bye-panel').on('click', sayBye);

}

function sayBye() {

  hyperty.bye();

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
