// jshint browser:true, jquery: true
/* global Handlebars */
/* global Materialize */

import config from '../../../system.config.json!json';
import {ready, errorMessage} from '../../support';

// polyfills
import 'babel-polyfill';
import 'indexeddbshim';
import 'mutationobserver-shim';
import 'object.observe';
import 'array.observe';

import InstallerFactory from '../../../resources/factories/InstallerFactory';
import RuntimeLoader from '../../../src/runtime-loader/RuntimeLoader';

// reTHINK modules
// import RuntimeUA from 'runtime-core/dist/runtimeUA';

// import SandboxFactory from '../resources/sandboxes/SandboxFactory';
// let sandboxFactory = new SandboxFactory();
let avatar = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg';

// You can change this at your own domain
let domain = config.domain;

// Hack because the GraphConnector jsrsasign module;
window.KJUR = {};

// Check if the document is ready
if (document.readyState === 'complete') {
  documentReady();
} else {
  window.addEventListener('onload', documentReady, false);
  document.addEventListener('DOMContentLoaded', documentReady, false);
}

var runtimeLoader;

function documentReady() {

  // ready();

  let hypertyHolder = $('.hyperties');
  hypertyHolder.removeClass('hide');

  let installerFactory = new InstallerFactory();
  let runtimeURL = 'hyperty-catalogue://' + domain + '/.well-known/runtime/RuntimeUA';
  runtimeLoader = new RuntimeLoader(installerFactory, runtimeURL);
  runtimeLoader.install().then(runtimeInstalled).catch(errorMessage);
}

function runtimeInstalled() {

  console.log(runtimeLoader);

  let hyperty = 'hyperty-catalogue://' + domain + '/.well-known/hyperty/HelloWorldObserver';

  // Load First Hyperty
  runtimeLoader.requireHyperty(hyperty).then(hypertyDeployed).catch(function(reason) {
    errorMessage(reason);
  });

}

let hypertyObserver;

function hypertyDeployed(result) {

  hypertyObserver = result.instance;

  let loginPanel = $('.login-panel');
  let cardAction = loginPanel.find('.card-action');
  let hypertyInfo = '<span class="white-text"><p><b>hypertyURL:</b> ' + result.runtimeHypertyURL + '</br><b>status:</b> ' + result.status + '</p></span>';

  loginPanel.attr('data-url', result.runtimeHypertyURL);
  cardAction.append(hypertyInfo);

  let messageChat = $('.chat');
  messageChat.removeClass('hide');

  let chatSection = $('.chat-section');
  chatSection.removeClass('hide');

  Handlebars.getTemplate('chat-section').then(function(html) {
    $('.chat-section').append(html);
  });

  hypertyChat.addEventListener('hello', function(msg) {
    processHello(msg);
  });

}

function processHello(hello) {

  let chatSection = $('.chat-section');

  let list = `<li class="collection-item avatar">
    <p>` + hello + `</p>
  </li>`;

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
