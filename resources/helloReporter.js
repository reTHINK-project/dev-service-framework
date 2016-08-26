(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


"use strict";

var hyperty;

function deployReporter(runtimeLoader) {

  var hypertyHolder = $('.hyperties');
  hypertyHolder.removeClass('hide');

  var hypertyUrl = 'hyperty-catalogue://' + runtime.domain + '/.well-known/hyperty/HelloWorldReporter';

  // Load First Hyperty
  runtimeLoader.requireHyperty(hypertyUrl).then(hypertyDeployed)['catch'](function (reason) {
    console.error(reason);
  });
}

function hypertyDeployed(result) {

  hyperty = result.instance;

  console.log(hyperty);

  $('.selection-panel').hide();

  var hypertyPanel = $('.hyperty-panel');

  var hi = '<p>Hyperty Reporter URL: ' + result.runtimeHypertyURL + '</p>';

  hypertyPanel.append(hi);

  var hello = $('.hello-panel');

  var sayHelloTo = '<form class="say-hello"> Hyperty URL: <input class="to-hyperty-input" type="text" name="toHyperty"><br><input type="submit" value="Say Hello"></form>';

  hello.append(sayHelloTo);

  $('.say-hello').on('submit', sayHello);
}

function sayHello(event) {

  event.preventDefault();

  var toHypertyForm = $(event.currentTarget);

  var toHyperty = toHypertyForm.find('.to-hyperty-input').val();

  console.log(toHyperty);

  hyperty.hello(toHyperty).then(function (helloObject) {

    console.log('helloUrl: ', helloObject);

    $('.hello-panel').hide();

    var helloUrl = '<p>Hello URL: ' + helloObject.url + '</p>';

    var bye = $('.bye-panel');

    var sayByeTo = '<button class="say-bye">Say Bye</button>';

    bye.append(helloUrl);

    bye.append(sayByeTo);

    $('.bye-panel').on('click', sayBye);
  })['catch'](function (reason) {
    console.error(reason);
    reject(reason);
  });
}

function sayBye() {

  hyperty.bye();
}

Handlebars.getTemplate = function (name) {

  return new Promise(function (resolve, reject) {

    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
      Handlebars.templates = {};
    } else {
      resolve(Handlebars.templates[name]);
    }

    $.ajax({
      url: 'templates/' + name + '.hbs',
      success: function success(data) {
        Handlebars.templates[name] = Handlebars.compile(data);
        resolve(Handlebars.templates[name]);
      },

      fail: function fail(reason) {
        reject(reason);
      }
    });
  });
};

},{}]},{},[1])(1)
});