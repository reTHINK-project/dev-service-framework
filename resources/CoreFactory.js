import Core from '../src/runtime-loader/Core';
import RuntimeUA from 'runtime-core/dist/runtimeUA';
import SandboxFactory from '../resources/sandboxes/SandboxFactory';

class CoreFactory extends Core  {

  constructor() {
    super();
  }

  install(bus) {
    console.log('install', bus);

    let sandboxFactory = new SandboxFactory();
    let runtimeUA = new RuntimeUA(sandboxFactory, 'localhost');

    window.runtime = runtimeUA;

    bus.addListener('core:loadHyperty', function(msg){
      console.log('Load Hyperty: ', msg);

      let resultMsg = {};
      resultMsg.from = msg.to;
      resultMsg.to = msg.from;
      resultMsg.body = {};

      setTimeout(function() {

        //TODO: Work the message errors, probably use message factory
        runtimeUA.loadHyperty(msg.body.value.descriptor).then(function(result) {
          resultMsg.body.value = result;
          bus.postMessage(resultMsg);
        }).catch(function(reason) {
          resultMsg.body.value = reason;
          resultMsg.body.code = 400;
          bus.postMessage(resultMsg);
        })
      }, 100);

    });

    bus.addListener('core:loadStub', function(msg){
      console.log('Load Stub:', msg);
    });

  }

}

export default CoreFactory;
