// jshint browser:true, jquery: true

import {MessageFactory} from 'service-framework';

let messageFactory = new MessageFactory();

$.fn.serializeObject = function()
{
  let o = {};
  let a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }

      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });

  return o;
};

let form = $('#messageFactoryForm');

form.on('submit', function(event) {

  event.preventDefault();
  let object = $(this).serializeObject();
  let code = '';

  try {

    let result = messageFactory[object.messageType](
      object.from, object.to, object.contextId, object.idToken, object.accessToken,
      object.resource, object.signature, object.schema, object.assertedIdentity,
      object.value, object.policy
    );

    code = '\n' + JSON.stringify(result, null, 2);

  } catch (e) {
    code = e;
  }

  $('.code').html(code);

});

// createMessageRequest(from, to, contextId, idToken, accessToken, resource, signature, schema, assertedIdentity, value, policy);
// createMessageRequest(from, to, contextId, idToken, accessToken, resource, signature, schema, assertedIdentity, value, policy);
// createDeleteMessageRequest(from, to, contextId, idToken, accessToken, resource, signature, attribute, schema, assertedIdentity);
// createUpdateMessageRequest(from, to, contextId, idToken, accessToken, resource, signature, schema, assertedIdentity, attribute,  value);
// createReadMessageRequest(from, to, contextId, idToken, accessToken, resource, signature, schema, assertedIdentity,  attribute, criteriaSyntax, criteria);
// createMessageResponse(from, to, contextId, idToken, accessToken, resource, signature, schema, assertedIdentity, code, value);
// createForwardMessageRequest(data, from, to, contextId, idToken, accessToken, resource, signature, schema, assertedIdentity);
//
// generateDeleteMessageBody(data, attribute);
// generateUpdateMessageBody(data, attribute, value);
// generateReadMessageBody(data, attribute, criteria, criteriaSyntax);
// generateMessageResponse(data, code, value);
