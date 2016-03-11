// jshint browser:true, jquery: true
/* global Handlebars */
/* global Materialize */

import config from '../system.config.json!json';
import {ready, errorMessage} from '/examples/support';

// polyfills
import 'babel-polyfill';
import 'indexeddbshim';
import 'mutationobserver-shim';
import 'object.observe';
import 'array.observe';

import InstallerFactory from '../../../resources/factories/InstallerFactory';
import RuntimeLoader from '../../../dist/RuntimeLoader';

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


// put here the options to select observer or reporter
let selection = $('.selection-panel');

let helloReporter = '<button onclick="deployReporter()">Hello World Reporter</button>';
let helloObserver = '<button onclick="deployObserver()">Hello World Observer</button>';

selection.append(helloReporter);
selection.append(helloObserver);


}
