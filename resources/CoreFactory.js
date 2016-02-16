import Core from '../src/runtime-loader/Core';
import RuntimeUA from 'runtime-core/dist/runtimeUA';
import SandboxFactory from '../resources/sandboxes/SandboxFactory';

class CoreFactory extends Core  {

  constructor() {
    super();
  }

  install(minibus) {

    let sandboxFactory = new SandboxFactory();
    let runtimeUA = new RuntimeUA(sandboxFactory, 'localhost');

    console.log(this);

    minibus.addListener('core:loadHyperty', function(msg){
      console.log('Load Hyperty: ', msg);

      let resultMsg = {};
      resultMsg.from = msg.to;
      resultMsg.to = msg.from;
      resultMsg.body = {};

      //TODO: Work the message errors, probably use message factory
      runtimeUA.loadHyperty(msg.body.value.descriptor).then(function(result) {
        resultMsg.body.value = result;
        minibus._onMessage(resultMsg);
      }).catch(function(reason) {
        resultMsg.body.value = reason;
        resultMsg.body.code = 400;
        minibus._onMessage(resultMsg);
      })

    });

    minibus.addListener('core:loadStub', function(msg){
      console.log('Load Stub:', msg);
    });

    console.log('Runtime Instaled: ', minibus);

  }

}

export default CoreFactory;
