class RuntimeFactory {

  get messageBus() {
  }

  set messageBus(messageBus) {
    this._messageBus = messageBus;
  }

  createSandbox() {
    return {};
  }

  createAppSandbox() {
    return {};
  }

  createHttpRequest() {
    return {
      post: function() {},

      get: function() {},

      put: function() {},

      delete: function() {}
    };
  }

  removeSandbox() {

  }

}

export default RuntimeFactory;
