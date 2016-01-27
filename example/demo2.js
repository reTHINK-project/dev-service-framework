// jshint browser:true, jquery: true

import {MessageFactory} from '../src/service-framework';

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

    let result;

    switch (object.messageType) {
      case 'createMessageRequest':
        result = messageFactory.createMessageRequest(
          object.from, object.to, object.idToken, object.accessToken,
          object.resource, object.schema, object.assertedIdentity,
          object.value, object.policy
        );
        break;

      case 'createForwardMessageRequest':
        result = messageFactory.createForwardMessageRequest(
          object.value, object.from, object.to, object.idToken, object.accessToken,
          object.resource, object.schema, object.assertedIdentity, object.policy
        );
        break;

      case 'createDeleteMessageRequest':
        result = messageFactory.createDeleteMessageRequest(
          object.from, object.to, object.idToken, object.accessToken,
          object.resource, object.schema, object.assertedIdentity, object.policy
        );
        break;

      case 'createUpdateMessageRequest':
        result = messageFactory.createUpdateMessageRequest(
          object.from, object.to, object.idToken, object.accessToken,
          object.resource, object.schema, object.assertedIdentity, object.attribute, object.value
        );
        break;

      case 'createReadMessageRequest':
        result = messageFactory.createReadMessageRequest(
          object.from, object.to, object.idToken, object.accessToken,
          object.resource, object.schema, object.assertedIdentity, object.attribute, object.value
        );
        break;

      case 'createMessageResponse':
        result = messageFactory.createMessageResponse(
          object.from, object.to, object.idToken, object.accessToken,
          object.resource, object.schema, object.assertedIdentity, object.code, object.value
        );
        break;

      default:

    }
    console.log(result);

    code = '\n' + JSON.stringify(result, null, 2);

  } catch (e) {
    code = e;
  }

  $('.code').html(code);

});

// createMessageRequest(from, to, idToken, accessToken, resource, schema, assertedIdentity, value, policy);
// createForwardMessageRequest(data, from, to, idToken, accessToken, resource, schema, assertedIdentity)
// createDeleteMessageRequest(from, to, idToken, accessToken, resource, schema, assertedIdentity);
// createUpdateMessageRequest(from, to, idToken, accessToken, resource, schema, assertedIdentity, attribute,  value);
// createReadMessageRequest(from, to, idToken, accessToken, resource, schema, assertedIdentity,  attribute, criteriaSyntax, criteria);
// createMessageResponse(from, to, idToken, accessToken, resource, schema, assertedIdentity, code, value);
//
// generateDeleteMessageBody(data, attribute);
// generateUpdateMessageBody(data, attribute, value);
// generateReadMessageBody(data, attribute, criteria, criteriaSyntax);
// generateMessageResponse(data, code, value);
