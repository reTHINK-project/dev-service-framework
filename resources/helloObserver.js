(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


"use strict";

function deployObserver(runtimeLoader) {

  var hypertyHolder = $('.hyperties');
  hypertyHolder.removeClass('hide');

  console.log(runtimeLoader);

  var hypertyObserver = 'hyperty-catalogue://' + runtime.domain + '/.well-known/hyperty/HelloWorldObserver';

  // Load First Hyperty
  runtimeLoader.requireHyperty(hypertyObserver).then(hypertyObserverDeployed)['catch'](function (reason) {
    errorMessage(reason);
  });
}

function hypertyObserverDeployed(result) {

  var hypertyObserver = undefined;

  hypertyObserver = result.instance;

  console.log(hypertyObserver);

  $('.selection-panel').hide();

  var hypertyPanel = $('.hyperty-panel');

  var hi = '<p>Hyperty Observer URL: ' + result.runtimeHypertyURL + '</p>';

  hypertyPanel.append(hi);

  hypertyObserver.addEventListener('invitation', function (identity) {

    JSON.stringify(identity);

    console.log('Hello event received from:', identity);

    var invitationPanel = $('.invitation-panel');

    var invitation = '<p> Invitation received from:\n ' + identity.name + '</p>';

    invitationPanel.append(invitation);
  });

  hypertyObserver.addEventListener('hello', function (event) {

    console.log('Hello event received:', event);

    var msgPanel = $('.msg-panel');

    var msg = '<p>  ' + event.hello + '</p>';

    msgPanel.append(msg);
  });

  console.log('Observer Waiting for Hello!!');
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