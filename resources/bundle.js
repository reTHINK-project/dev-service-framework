(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
Author: Geraint Luff and others
Year: 2013

This code is released into the "public domain" by its author(s).  Anybody may use, alter and distribute the code without restriction.  The author makes no guarantees, and takes no liability of any kind for use of this code.

If you find a bug or make an improvement, it would be courteous to let the author know, but it is not compulsory.
*/
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module !== 'undefined' && module.exports){
    // CommonJS. Define export.
    module.exports = factory();
  } else {
    // Browser globals
    global.tv4 = factory();
  }
}(this, function () {

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FObject%2Fkeys
if (!Object.keys) {
	Object.keys = (function () {
		var hasOwnProperty = Object.prototype.hasOwnProperty,
			hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
			dontEnums = [
				'toString',
				'toLocaleString',
				'valueOf',
				'hasOwnProperty',
				'isPrototypeOf',
				'propertyIsEnumerable',
				'constructor'
			],
			dontEnumsLength = dontEnums.length;

		return function (obj) {
			if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) {
				throw new TypeError('Object.keys called on non-object');
			}

			var result = [];

			for (var prop in obj) {
				if (hasOwnProperty.call(obj, prop)) {
					result.push(prop);
				}
			}

			if (hasDontEnumBug) {
				for (var i=0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) {
						result.push(dontEnums[i]);
					}
				}
			}
			return result;
		};
	})();
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
if (!Object.create) {
	Object.create = (function(){
		function F(){}

		return function(o){
			if (arguments.length !== 1) {
				throw new Error('Object.create implementation only accepts one parameter.');
			}
			F.prototype = o;
			return new F();
		};
	})();
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FisArray
if(!Array.isArray) {
	Array.isArray = function (vArg) {
		return Object.prototype.toString.call(vArg) === "[object Array]";
	};
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FindexOf
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
		if (this === null) {
			throw new TypeError();
		}
		var t = Object(this);
		var len = t.length >>> 0;

		if (len === 0) {
			return -1;
		}
		var n = 0;
		if (arguments.length > 1) {
			n = Number(arguments[1]);
			if (n !== n) { // shortcut for verifying if it's NaN
				n = 0;
			} else if (n !== 0 && n !== Infinity && n !== -Infinity) {
				n = (n > 0 || -1) * Math.floor(Math.abs(n));
			}
		}
		if (n >= len) {
			return -1;
		}
		var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
		for (; k < len; k++) {
			if (k in t && t[k] === searchElement) {
				return k;
			}
		}
		return -1;
	};
}

// Grungey Object.isFrozen hack
if (!Object.isFrozen) {
	Object.isFrozen = function (obj) {
		var key = "tv4_test_frozen_key";
		while (obj.hasOwnProperty(key)) {
			key += Math.random();
		}
		try {
			obj[key] = true;
			delete obj[key];
			return false;
		} catch (e) {
			return true;
		}
	};
}
// Based on: https://github.com/geraintluff/uri-templates, but with all the de-substitution stuff removed

var uriTemplateGlobalModifiers = {
	"+": true,
	"#": true,
	".": true,
	"/": true,
	";": true,
	"?": true,
	"&": true
};
var uriTemplateSuffices = {
	"*": true
};

function notReallyPercentEncode(string) {
	return encodeURI(string).replace(/%25[0-9][0-9]/g, function (doubleEncoded) {
		return "%" + doubleEncoded.substring(3);
	});
}

function uriTemplateSubstitution(spec) {
	var modifier = "";
	if (uriTemplateGlobalModifiers[spec.charAt(0)]) {
		modifier = spec.charAt(0);
		spec = spec.substring(1);
	}
	var separator = "";
	var prefix = "";
	var shouldEscape = true;
	var showVariables = false;
	var trimEmptyString = false;
	if (modifier === '+') {
		shouldEscape = false;
	} else if (modifier === ".") {
		prefix = ".";
		separator = ".";
	} else if (modifier === "/") {
		prefix = "/";
		separator = "/";
	} else if (modifier === '#') {
		prefix = "#";
		shouldEscape = false;
	} else if (modifier === ';') {
		prefix = ";";
		separator = ";";
		showVariables = true;
		trimEmptyString = true;
	} else if (modifier === '?') {
		prefix = "?";
		separator = "&";
		showVariables = true;
	} else if (modifier === '&') {
		prefix = "&";
		separator = "&";
		showVariables = true;
	}

	var varNames = [];
	var varList = spec.split(",");
	var varSpecs = [];
	var varSpecMap = {};
	for (var i = 0; i < varList.length; i++) {
		var varName = varList[i];
		var truncate = null;
		if (varName.indexOf(":") !== -1) {
			var parts = varName.split(":");
			varName = parts[0];
			truncate = parseInt(parts[1], 10);
		}
		var suffices = {};
		while (uriTemplateSuffices[varName.charAt(varName.length - 1)]) {
			suffices[varName.charAt(varName.length - 1)] = true;
			varName = varName.substring(0, varName.length - 1);
		}
		var varSpec = {
			truncate: truncate,
			name: varName,
			suffices: suffices
		};
		varSpecs.push(varSpec);
		varSpecMap[varName] = varSpec;
		varNames.push(varName);
	}
	var subFunction = function (valueFunction) {
		var result = "";
		var startIndex = 0;
		for (var i = 0; i < varSpecs.length; i++) {
			var varSpec = varSpecs[i];
			var value = valueFunction(varSpec.name);
			if (value === null || value === undefined || (Array.isArray(value) && value.length === 0) || (typeof value === 'object' && Object.keys(value).length === 0)) {
				startIndex++;
				continue;
			}
			if (i === startIndex) {
				result += prefix;
			} else {
				result += (separator || ",");
			}
			if (Array.isArray(value)) {
				if (showVariables) {
					result += varSpec.name + "=";
				}
				for (var j = 0; j < value.length; j++) {
					if (j > 0) {
						result += varSpec.suffices['*'] ? (separator || ",") : ",";
						if (varSpec.suffices['*'] && showVariables) {
							result += varSpec.name + "=";
						}
					}
					result += shouldEscape ? encodeURIComponent(value[j]).replace(/!/g, "%21") : notReallyPercentEncode(value[j]);
				}
			} else if (typeof value === "object") {
				if (showVariables && !varSpec.suffices['*']) {
					result += varSpec.name + "=";
				}
				var first = true;
				for (var key in value) {
					if (!first) {
						result += varSpec.suffices['*'] ? (separator || ",") : ",";
					}
					first = false;
					result += shouldEscape ? encodeURIComponent(key).replace(/!/g, "%21") : notReallyPercentEncode(key);
					result += varSpec.suffices['*'] ? '=' : ",";
					result += shouldEscape ? encodeURIComponent(value[key]).replace(/!/g, "%21") : notReallyPercentEncode(value[key]);
				}
			} else {
				if (showVariables) {
					result += varSpec.name;
					if (!trimEmptyString || value !== "") {
						result += "=";
					}
				}
				if (varSpec.truncate != null) {
					value = value.substring(0, varSpec.truncate);
				}
				result += shouldEscape ? encodeURIComponent(value).replace(/!/g, "%21"): notReallyPercentEncode(value);
			}
		}
		return result;
	};
	subFunction.varNames = varNames;
	return {
		prefix: prefix,
		substitution: subFunction
	};
}

function UriTemplate(template) {
	if (!(this instanceof UriTemplate)) {
		return new UriTemplate(template);
	}
	var parts = template.split("{");
	var textParts = [parts.shift()];
	var prefixes = [];
	var substitutions = [];
	var varNames = [];
	while (parts.length > 0) {
		var part = parts.shift();
		var spec = part.split("}")[0];
		var remainder = part.substring(spec.length + 1);
		var funcs = uriTemplateSubstitution(spec);
		substitutions.push(funcs.substitution);
		prefixes.push(funcs.prefix);
		textParts.push(remainder);
		varNames = varNames.concat(funcs.substitution.varNames);
	}
	this.fill = function (valueFunction) {
		var result = textParts[0];
		for (var i = 0; i < substitutions.length; i++) {
			var substitution = substitutions[i];
			result += substitution(valueFunction);
			result += textParts[i + 1];
		}
		return result;
	};
	this.varNames = varNames;
	this.template = template;
}
UriTemplate.prototype = {
	toString: function () {
		return this.template;
	},
	fillFromObject: function (obj) {
		return this.fill(function (varName) {
			return obj[varName];
		});
	}
};
var ValidatorContext = function ValidatorContext(parent, collectMultiple, errorReporter, checkRecursive, trackUnknownProperties) {
	this.missing = [];
	this.missingMap = {};
	this.formatValidators = parent ? Object.create(parent.formatValidators) : {};
	this.schemas = parent ? Object.create(parent.schemas) : {};
	this.collectMultiple = collectMultiple;
	this.errors = [];
	this.handleError = collectMultiple ? this.collectError : this.returnError;
	if (checkRecursive) {
		this.checkRecursive = true;
		this.scanned = [];
		this.scannedFrozen = [];
		this.scannedFrozenSchemas = [];
		this.scannedFrozenValidationErrors = [];
		this.validatedSchemasKey = 'tv4_validation_id';
		this.validationErrorsKey = 'tv4_validation_errors_id';
	}
	if (trackUnknownProperties) {
		this.trackUnknownProperties = true;
		this.knownPropertyPaths = {};
		this.unknownPropertyPaths = {};
	}
	this.errorReporter = errorReporter || defaultErrorReporter('en');
	if (typeof this.errorReporter === 'string') {
		throw new Error('debug');
	}
	this.definedKeywords = {};
	if (parent) {
		for (var key in parent.definedKeywords) {
			this.definedKeywords[key] = parent.definedKeywords[key].slice(0);
		}
	}
};
ValidatorContext.prototype.defineKeyword = function (keyword, keywordFunction) {
	this.definedKeywords[keyword] = this.definedKeywords[keyword] || [];
	this.definedKeywords[keyword].push(keywordFunction);
};
ValidatorContext.prototype.createError = function (code, messageParams, dataPath, schemaPath, subErrors, data, schema) {
	var error = new ValidationError(code, messageParams, dataPath, schemaPath, subErrors);
	error.message = this.errorReporter(error, data, schema);
	return error;
};
ValidatorContext.prototype.returnError = function (error) {
	return error;
};
ValidatorContext.prototype.collectError = function (error) {
	if (error) {
		this.errors.push(error);
	}
	return null;
};
ValidatorContext.prototype.prefixErrors = function (startIndex, dataPath, schemaPath) {
	for (var i = startIndex; i < this.errors.length; i++) {
		this.errors[i] = this.errors[i].prefixWith(dataPath, schemaPath);
	}
	return this;
};
ValidatorContext.prototype.banUnknownProperties = function (data, schema) {
	for (var unknownPath in this.unknownPropertyPaths) {
		var error = this.createError(ErrorCodes.UNKNOWN_PROPERTY, {path: unknownPath}, unknownPath, "", null, data, schema);
		var result = this.handleError(error);
		if (result) {
			return result;
		}
	}
	return null;
};

ValidatorContext.prototype.addFormat = function (format, validator) {
	if (typeof format === 'object') {
		for (var key in format) {
			this.addFormat(key, format[key]);
		}
		return this;
	}
	this.formatValidators[format] = validator;
};
ValidatorContext.prototype.resolveRefs = function (schema, urlHistory) {
	if (schema['$ref'] !== undefined) {
		urlHistory = urlHistory || {};
		if (urlHistory[schema['$ref']]) {
			return this.createError(ErrorCodes.CIRCULAR_REFERENCE, {urls: Object.keys(urlHistory).join(', ')}, '', '', null, undefined, schema);
		}
		urlHistory[schema['$ref']] = true;
		schema = this.getSchema(schema['$ref'], urlHistory);
	}
	return schema;
};
ValidatorContext.prototype.getSchema = function (url, urlHistory) {
	var schema;
	if (this.schemas[url] !== undefined) {
		schema = this.schemas[url];
		return this.resolveRefs(schema, urlHistory);
	}
	var baseUrl = url;
	var fragment = "";
	if (url.indexOf('#') !== -1) {
		fragment = url.substring(url.indexOf("#") + 1);
		baseUrl = url.substring(0, url.indexOf("#"));
	}
	if (typeof this.schemas[baseUrl] === 'object') {
		schema = this.schemas[baseUrl];
		var pointerPath = decodeURIComponent(fragment);
		if (pointerPath === "") {
			return this.resolveRefs(schema, urlHistory);
		} else if (pointerPath.charAt(0) !== "/") {
			return undefined;
		}
		var parts = pointerPath.split("/").slice(1);
		for (var i = 0; i < parts.length; i++) {
			var component = parts[i].replace(/~1/g, "/").replace(/~0/g, "~");
			if (schema[component] === undefined) {
				schema = undefined;
				break;
			}
			schema = schema[component];
		}
		if (schema !== undefined) {
			return this.resolveRefs(schema, urlHistory);
		}
	}
	if (this.missing[baseUrl] === undefined) {
		this.missing.push(baseUrl);
		this.missing[baseUrl] = baseUrl;
		this.missingMap[baseUrl] = baseUrl;
	}
};
ValidatorContext.prototype.searchSchemas = function (schema, url) {
	if (Array.isArray(schema)) {
		for (var i = 0; i < schema.length; i++) {
			this.searchSchemas(schema[i], url);
		}
	} else if (schema && typeof schema === "object") {
		if (typeof schema.id === "string") {
			if (isTrustedUrl(url, schema.id)) {
				if (this.schemas[schema.id] === undefined) {
					this.schemas[schema.id] = schema;
				}
			}
		}
		for (var key in schema) {
			if (key !== "enum") {
				if (typeof schema[key] === "object") {
					this.searchSchemas(schema[key], url);
				} else if (key === "$ref") {
					var uri = getDocumentUri(schema[key]);
					if (uri && this.schemas[uri] === undefined && this.missingMap[uri] === undefined) {
						this.missingMap[uri] = uri;
					}
				}
			}
		}
	}
};
ValidatorContext.prototype.addSchema = function (url, schema) {
	//overload
	if (typeof url !== 'string' || typeof schema === 'undefined') {
		if (typeof url === 'object' && typeof url.id === 'string') {
			schema = url;
			url = schema.id;
		}
		else {
			return;
		}
	}
	if (url === getDocumentUri(url) + "#") {
		// Remove empty fragment
		url = getDocumentUri(url);
	}
	this.schemas[url] = schema;
	delete this.missingMap[url];
	normSchema(schema, url);
	this.searchSchemas(schema, url);
};

ValidatorContext.prototype.getSchemaMap = function () {
	var map = {};
	for (var key in this.schemas) {
		map[key] = this.schemas[key];
	}
	return map;
};

ValidatorContext.prototype.getSchemaUris = function (filterRegExp) {
	var list = [];
	for (var key in this.schemas) {
		if (!filterRegExp || filterRegExp.test(key)) {
			list.push(key);
		}
	}
	return list;
};

ValidatorContext.prototype.getMissingUris = function (filterRegExp) {
	var list = [];
	for (var key in this.missingMap) {
		if (!filterRegExp || filterRegExp.test(key)) {
			list.push(key);
		}
	}
	return list;
};

ValidatorContext.prototype.dropSchemas = function () {
	this.schemas = {};
	this.reset();
};
ValidatorContext.prototype.reset = function () {
	this.missing = [];
	this.missingMap = {};
	this.errors = [];
};

ValidatorContext.prototype.validateAll = function (data, schema, dataPathParts, schemaPathParts, dataPointerPath) {
	var topLevel;
	schema = this.resolveRefs(schema);
	if (!schema) {
		return null;
	} else if (schema instanceof ValidationError) {
		this.errors.push(schema);
		return schema;
	}

	var startErrorCount = this.errors.length;
	var frozenIndex, scannedFrozenSchemaIndex = null, scannedSchemasIndex = null;
	if (this.checkRecursive && data && typeof data === 'object') {
		topLevel = !this.scanned.length;
		if (data[this.validatedSchemasKey]) {
			var schemaIndex = data[this.validatedSchemasKey].indexOf(schema);
			if (schemaIndex !== -1) {
				this.errors = this.errors.concat(data[this.validationErrorsKey][schemaIndex]);
				return null;
			}
		}
		if (Object.isFrozen(data)) {
			frozenIndex = this.scannedFrozen.indexOf(data);
			if (frozenIndex !== -1) {
				var frozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].indexOf(schema);
				if (frozenSchemaIndex !== -1) {
					this.errors = this.errors.concat(this.scannedFrozenValidationErrors[frozenIndex][frozenSchemaIndex]);
					return null;
				}
			}
		}
		this.scanned.push(data);
		if (Object.isFrozen(data)) {
			if (frozenIndex === -1) {
				frozenIndex = this.scannedFrozen.length;
				this.scannedFrozen.push(data);
				this.scannedFrozenSchemas.push([]);
			}
			scannedFrozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].length;
			this.scannedFrozenSchemas[frozenIndex][scannedFrozenSchemaIndex] = schema;
			this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = [];
		} else {
			if (!data[this.validatedSchemasKey]) {
				try {
					Object.defineProperty(data, this.validatedSchemasKey, {
						value: [],
						configurable: true
					});
					Object.defineProperty(data, this.validationErrorsKey, {
						value: [],
						configurable: true
					});
				} catch (e) {
					//IE 7/8 workaround
					data[this.validatedSchemasKey] = [];
					data[this.validationErrorsKey] = [];
				}
			}
			scannedSchemasIndex = data[this.validatedSchemasKey].length;
			data[this.validatedSchemasKey][scannedSchemasIndex] = schema;
			data[this.validationErrorsKey][scannedSchemasIndex] = [];
		}
	}

	var errorCount = this.errors.length;
	var error = this.validateBasic(data, schema, dataPointerPath)
		|| this.validateNumeric(data, schema, dataPointerPath)
		|| this.validateString(data, schema, dataPointerPath)
		|| this.validateArray(data, schema, dataPointerPath)
		|| this.validateObject(data, schema, dataPointerPath)
		|| this.validateCombinations(data, schema, dataPointerPath)
		|| this.validateHypermedia(data, schema, dataPointerPath)
		|| this.validateFormat(data, schema, dataPointerPath)
		|| this.validateDefinedKeywords(data, schema, dataPointerPath)
		|| null;

	if (topLevel) {
		while (this.scanned.length) {
			var item = this.scanned.pop();
			delete item[this.validatedSchemasKey];
		}
		this.scannedFrozen = [];
		this.scannedFrozenSchemas = [];
	}

	if (error || errorCount !== this.errors.length) {
		while ((dataPathParts && dataPathParts.length) || (schemaPathParts && schemaPathParts.length)) {
			var dataPart = (dataPathParts && dataPathParts.length) ? "" + dataPathParts.pop() : null;
			var schemaPart = (schemaPathParts && schemaPathParts.length) ? "" + schemaPathParts.pop() : null;
			if (error) {
				error = error.prefixWith(dataPart, schemaPart);
			}
			this.prefixErrors(errorCount, dataPart, schemaPart);
		}
	}

	if (scannedFrozenSchemaIndex !== null) {
		this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = this.errors.slice(startErrorCount);
	} else if (scannedSchemasIndex !== null) {
		data[this.validationErrorsKey][scannedSchemasIndex] = this.errors.slice(startErrorCount);
	}

	return this.handleError(error);
};
ValidatorContext.prototype.validateFormat = function (data, schema) {
	if (typeof schema.format !== 'string' || !this.formatValidators[schema.format]) {
		return null;
	}
	var errorMessage = this.formatValidators[schema.format].call(null, data, schema);
	if (typeof errorMessage === 'string' || typeof errorMessage === 'number') {
		return this.createError(ErrorCodes.FORMAT_CUSTOM, {message: errorMessage}, '', '/format', null, data, schema);
	} else if (errorMessage && typeof errorMessage === 'object') {
		return this.createError(ErrorCodes.FORMAT_CUSTOM, {message: errorMessage.message || "?"}, errorMessage.dataPath || '', errorMessage.schemaPath || "/format", null, data, schema);
	}
	return null;
};
ValidatorContext.prototype.validateDefinedKeywords = function (data, schema, dataPointerPath) {
	for (var key in this.definedKeywords) {
		if (typeof schema[key] === 'undefined') {
			continue;
		}
		var validationFunctions = this.definedKeywords[key];
		for (var i = 0; i < validationFunctions.length; i++) {
			var func = validationFunctions[i];
			var result = func(data, schema[key], schema, dataPointerPath);
			if (typeof result === 'string' || typeof result === 'number') {
				return this.createError(ErrorCodes.KEYWORD_CUSTOM, {key: key, message: result}, '', '', null, data, schema).prefixWith(null, key);
			} else if (result && typeof result === 'object') {
				var code = result.code;
				if (typeof code === 'string') {
					if (!ErrorCodes[code]) {
						throw new Error('Undefined error code (use defineError): ' + code);
					}
					code = ErrorCodes[code];
				} else if (typeof code !== 'number') {
					code = ErrorCodes.KEYWORD_CUSTOM;
				}
				var messageParams = (typeof result.message === 'object') ? result.message : {key: key, message: result.message || "?"};
				var schemaPath = result.schemaPath || ("/" + key.replace(/~/g, '~0').replace(/\//g, '~1'));
				return this.createError(code, messageParams, result.dataPath || null, schemaPath, null, data, schema);
			}
		}
	}
	return null;
};

function recursiveCompare(A, B) {
	if (A === B) {
		return true;
	}
	if (A && B && typeof A === "object" && typeof B === "object") {
		if (Array.isArray(A) !== Array.isArray(B)) {
			return false;
		} else if (Array.isArray(A)) {
			if (A.length !== B.length) {
				return false;
			}
			for (var i = 0; i < A.length; i++) {
				if (!recursiveCompare(A[i], B[i])) {
					return false;
				}
			}
		} else {
			var key;
			for (key in A) {
				if (B[key] === undefined && A[key] !== undefined) {
					return false;
				}
			}
			for (key in B) {
				if (A[key] === undefined && B[key] !== undefined) {
					return false;
				}
			}
			for (key in A) {
				if (!recursiveCompare(A[key], B[key])) {
					return false;
				}
			}
		}
		return true;
	}
	return false;
}

ValidatorContext.prototype.validateBasic = function validateBasic(data, schema, dataPointerPath) {
	var error;
	if (error = this.validateType(data, schema, dataPointerPath)) {
		return error.prefixWith(null, "type");
	}
	if (error = this.validateEnum(data, schema, dataPointerPath)) {
		return error.prefixWith(null, "type");
	}
	return null;
};

ValidatorContext.prototype.validateType = function validateType(data, schema) {
	if (schema.type === undefined) {
		return null;
	}
	var dataType = typeof data;
	if (data === null) {
		dataType = "null";
	} else if (Array.isArray(data)) {
		dataType = "array";
	}
	var allowedTypes = schema.type;
	if (!Array.isArray(allowedTypes)) {
		allowedTypes = [allowedTypes];
	}

	for (var i = 0; i < allowedTypes.length; i++) {
		var type = allowedTypes[i];
		if (type === dataType || (type === "integer" && dataType === "number" && (data % 1 === 0))) {
			return null;
		}
	}
	return this.createError(ErrorCodes.INVALID_TYPE, {type: dataType, expected: allowedTypes.join("/")}, '', '', null, data, schema);
};

ValidatorContext.prototype.validateEnum = function validateEnum(data, schema) {
	if (schema["enum"] === undefined) {
		return null;
	}
	for (var i = 0; i < schema["enum"].length; i++) {
		var enumVal = schema["enum"][i];
		if (recursiveCompare(data, enumVal)) {
			return null;
		}
	}
	return this.createError(ErrorCodes.ENUM_MISMATCH, {value: (typeof JSON !== 'undefined') ? JSON.stringify(data) : data}, '', '', null, data, schema);
};

ValidatorContext.prototype.validateNumeric = function validateNumeric(data, schema, dataPointerPath) {
	return this.validateMultipleOf(data, schema, dataPointerPath)
		|| this.validateMinMax(data, schema, dataPointerPath)
		|| this.validateNaN(data, schema, dataPointerPath)
		|| null;
};

var CLOSE_ENOUGH_LOW = Math.pow(2, -51);
var CLOSE_ENOUGH_HIGH = 1 - CLOSE_ENOUGH_LOW;
ValidatorContext.prototype.validateMultipleOf = function validateMultipleOf(data, schema) {
	var multipleOf = schema.multipleOf || schema.divisibleBy;
	if (multipleOf === undefined) {
		return null;
	}
	if (typeof data === "number") {
		var remainder = (data/multipleOf)%1;
		if (remainder >= CLOSE_ENOUGH_LOW && remainder < CLOSE_ENOUGH_HIGH) {
			return this.createError(ErrorCodes.NUMBER_MULTIPLE_OF, {value: data, multipleOf: multipleOf}, '', '', null, data, schema);
		}
	}
	return null;
};

ValidatorContext.prototype.validateMinMax = function validateMinMax(data, schema) {
	if (typeof data !== "number") {
		return null;
	}
	if (schema.minimum !== undefined) {
		if (data < schema.minimum) {
			return this.createError(ErrorCodes.NUMBER_MINIMUM, {value: data, minimum: schema.minimum}, '', '/minimum', null, data, schema);
		}
		if (schema.exclusiveMinimum && data === schema.minimum) {
			return this.createError(ErrorCodes.NUMBER_MINIMUM_EXCLUSIVE, {value: data, minimum: schema.minimum}, '', '/exclusiveMinimum', null, data, schema);
		}
	}
	if (schema.maximum !== undefined) {
		if (data > schema.maximum) {
			return this.createError(ErrorCodes.NUMBER_MAXIMUM, {value: data, maximum: schema.maximum}, '', '/maximum', null, data, schema);
		}
		if (schema.exclusiveMaximum && data === schema.maximum) {
			return this.createError(ErrorCodes.NUMBER_MAXIMUM_EXCLUSIVE, {value: data, maximum: schema.maximum}, '', '/exclusiveMaximum', null, data, schema);
		}
	}
	return null;
};

ValidatorContext.prototype.validateNaN = function validateNaN(data, schema) {
	if (typeof data !== "number") {
		return null;
	}
	if (isNaN(data) === true || data === Infinity || data === -Infinity) {
		return this.createError(ErrorCodes.NUMBER_NOT_A_NUMBER, {value: data}, '', '/type', null, data, schema);
	}
	return null;
};

ValidatorContext.prototype.validateString = function validateString(data, schema, dataPointerPath) {
	return this.validateStringLength(data, schema, dataPointerPath)
		|| this.validateStringPattern(data, schema, dataPointerPath)
		|| null;
};

ValidatorContext.prototype.validateStringLength = function validateStringLength(data, schema) {
	if (typeof data !== "string") {
		return null;
	}
	if (schema.minLength !== undefined) {
		if (data.length < schema.minLength) {
			return this.createError(ErrorCodes.STRING_LENGTH_SHORT, {length: data.length, minimum: schema.minLength}, '', '/minLength', null, data, schema);
		}
	}
	if (schema.maxLength !== undefined) {
		if (data.length > schema.maxLength) {
			return this.createError(ErrorCodes.STRING_LENGTH_LONG, {length: data.length, maximum: schema.maxLength}, '', '/maxLength', null, data, schema);
		}
	}
	return null;
};

ValidatorContext.prototype.validateStringPattern = function validateStringPattern(data, schema) {
	if (typeof data !== "string" || (typeof schema.pattern !== "string" && !(schema.pattern instanceof RegExp))) {
		return null;
	}
	var regexp;
	if (schema.pattern instanceof RegExp) {
	  regexp = schema.pattern;
	}
	else {
	  var body, flags = '';
	  // Check for regular expression literals
	  // @see http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.5
	  var literal = schema.pattern.match(/^\/(.+)\/([img]*)$/);
	  if (literal) {
	    body = literal[1];
	    flags = literal[2];
	  }
	  else {
	    body = schema.pattern;
	  }
	  regexp = new RegExp(body, flags);
	}
	if (!regexp.test(data)) {
		return this.createError(ErrorCodes.STRING_PATTERN, {pattern: schema.pattern}, '', '/pattern', null, data, schema);
	}
	return null;
};

ValidatorContext.prototype.validateArray = function validateArray(data, schema, dataPointerPath) {
	if (!Array.isArray(data)) {
		return null;
	}
	return this.validateArrayLength(data, schema, dataPointerPath)
		|| this.validateArrayUniqueItems(data, schema, dataPointerPath)
		|| this.validateArrayItems(data, schema, dataPointerPath)
		|| null;
};

ValidatorContext.prototype.validateArrayLength = function validateArrayLength(data, schema) {
	var error;
	if (schema.minItems !== undefined) {
		if (data.length < schema.minItems) {
			error = this.createError(ErrorCodes.ARRAY_LENGTH_SHORT, {length: data.length, minimum: schema.minItems}, '', '/minItems', null, data, schema);
			if (this.handleError(error)) {
				return error;
			}
		}
	}
	if (schema.maxItems !== undefined) {
		if (data.length > schema.maxItems) {
			error = this.createError(ErrorCodes.ARRAY_LENGTH_LONG, {length: data.length, maximum: schema.maxItems}, '', '/maxItems', null, data, schema);
			if (this.handleError(error)) {
				return error;
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateArrayUniqueItems = function validateArrayUniqueItems(data, schema) {
	if (schema.uniqueItems) {
		for (var i = 0; i < data.length; i++) {
			for (var j = i + 1; j < data.length; j++) {
				if (recursiveCompare(data[i], data[j])) {
					var error = this.createError(ErrorCodes.ARRAY_UNIQUE, {match1: i, match2: j}, '', '/uniqueItems', null, data, schema);
					if (this.handleError(error)) {
						return error;
					}
				}
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateArrayItems = function validateArrayItems(data, schema, dataPointerPath) {
	if (schema.items === undefined) {
		return null;
	}
	var error, i;
	if (Array.isArray(schema.items)) {
		for (i = 0; i < data.length; i++) {
			if (i < schema.items.length) {
				if (error = this.validateAll(data[i], schema.items[i], [i], ["items", i], dataPointerPath + "/" + i)) {
					return error;
				}
			} else if (schema.additionalItems !== undefined) {
				if (typeof schema.additionalItems === "boolean") {
					if (!schema.additionalItems) {
						error = (this.createError(ErrorCodes.ARRAY_ADDITIONAL_ITEMS, {}, '/' + i, '/additionalItems', null, data, schema));
						if (this.handleError(error)) {
							return error;
						}
					}
				} else if (error = this.validateAll(data[i], schema.additionalItems, [i], ["additionalItems"], dataPointerPath + "/" + i)) {
					return error;
				}
			}
		}
	} else {
		for (i = 0; i < data.length; i++) {
			if (error = this.validateAll(data[i], schema.items, [i], ["items"], dataPointerPath + "/" + i)) {
				return error;
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateObject = function validateObject(data, schema, dataPointerPath) {
	if (typeof data !== "object" || data === null || Array.isArray(data)) {
		return null;
	}
	return this.validateObjectMinMaxProperties(data, schema, dataPointerPath)
		|| this.validateObjectRequiredProperties(data, schema, dataPointerPath)
		|| this.validateObjectProperties(data, schema, dataPointerPath)
		|| this.validateObjectDependencies(data, schema, dataPointerPath)
		|| null;
};

ValidatorContext.prototype.validateObjectMinMaxProperties = function validateObjectMinMaxProperties(data, schema) {
	var keys = Object.keys(data);
	var error;
	if (schema.minProperties !== undefined) {
		if (keys.length < schema.minProperties) {
			error = this.createError(ErrorCodes.OBJECT_PROPERTIES_MINIMUM, {propertyCount: keys.length, minimum: schema.minProperties}, '', '/minProperties', null, data, schema);
			if (this.handleError(error)) {
				return error;
			}
		}
	}
	if (schema.maxProperties !== undefined) {
		if (keys.length > schema.maxProperties) {
			error = this.createError(ErrorCodes.OBJECT_PROPERTIES_MAXIMUM, {propertyCount: keys.length, maximum: schema.maxProperties}, '', '/maxProperties', null, data, schema);
			if (this.handleError(error)) {
				return error;
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateObjectRequiredProperties = function validateObjectRequiredProperties(data, schema) {
	if (schema.required !== undefined) {
		for (var i = 0; i < schema.required.length; i++) {
			var key = schema.required[i];
			if (data[key] === undefined) {
				var error = this.createError(ErrorCodes.OBJECT_REQUIRED, {key: key}, '', '/required/' + i, null, data, schema);
				if (this.handleError(error)) {
					return error;
				}
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateObjectProperties = function validateObjectProperties(data, schema, dataPointerPath) {
	var error;
	for (var key in data) {
		var keyPointerPath = dataPointerPath + "/" + key.replace(/~/g, '~0').replace(/\//g, '~1');
		var foundMatch = false;
		if (schema.properties !== undefined && schema.properties[key] !== undefined) {
			foundMatch = true;
			if (error = this.validateAll(data[key], schema.properties[key], [key], ["properties", key], keyPointerPath)) {
				return error;
			}
		}
		if (schema.patternProperties !== undefined) {
			for (var patternKey in schema.patternProperties) {
				var regexp = new RegExp(patternKey);
				if (regexp.test(key)) {
					foundMatch = true;
					if (error = this.validateAll(data[key], schema.patternProperties[patternKey], [key], ["patternProperties", patternKey], keyPointerPath)) {
						return error;
					}
				}
			}
		}
		if (!foundMatch) {
			if (schema.additionalProperties !== undefined) {
				if (this.trackUnknownProperties) {
					this.knownPropertyPaths[keyPointerPath] = true;
					delete this.unknownPropertyPaths[keyPointerPath];
				}
				if (typeof schema.additionalProperties === "boolean") {
					if (!schema.additionalProperties) {
						error = this.createError(ErrorCodes.OBJECT_ADDITIONAL_PROPERTIES, {key: key}, '', '/additionalProperties', null, data, schema).prefixWith(key, null);
						if (this.handleError(error)) {
							return error;
						}
					}
				} else {
					if (error = this.validateAll(data[key], schema.additionalProperties, [key], ["additionalProperties"], keyPointerPath)) {
						return error;
					}
				}
			} else if (this.trackUnknownProperties && !this.knownPropertyPaths[keyPointerPath]) {
				this.unknownPropertyPaths[keyPointerPath] = true;
			}
		} else if (this.trackUnknownProperties) {
			this.knownPropertyPaths[keyPointerPath] = true;
			delete this.unknownPropertyPaths[keyPointerPath];
		}
	}
	return null;
};

ValidatorContext.prototype.validateObjectDependencies = function validateObjectDependencies(data, schema, dataPointerPath) {
	var error;
	if (schema.dependencies !== undefined) {
		for (var depKey in schema.dependencies) {
			if (data[depKey] !== undefined) {
				var dep = schema.dependencies[depKey];
				if (typeof dep === "string") {
					if (data[dep] === undefined) {
						error = this.createError(ErrorCodes.OBJECT_DEPENDENCY_KEY, {key: depKey, missing: dep}, '', '', null, data, schema).prefixWith(null, depKey).prefixWith(null, "dependencies");
						if (this.handleError(error)) {
							return error;
						}
					}
				} else if (Array.isArray(dep)) {
					for (var i = 0; i < dep.length; i++) {
						var requiredKey = dep[i];
						if (data[requiredKey] === undefined) {
							error = this.createError(ErrorCodes.OBJECT_DEPENDENCY_KEY, {key: depKey, missing: requiredKey}, '', '/' + i, null, data, schema).prefixWith(null, depKey).prefixWith(null, "dependencies");
							if (this.handleError(error)) {
								return error;
							}
						}
					}
				} else {
					if (error = this.validateAll(data, dep, [], ["dependencies", depKey], dataPointerPath)) {
						return error;
					}
				}
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateCombinations = function validateCombinations(data, schema, dataPointerPath) {
	return this.validateAllOf(data, schema, dataPointerPath)
		|| this.validateAnyOf(data, schema, dataPointerPath)
		|| this.validateOneOf(data, schema, dataPointerPath)
		|| this.validateNot(data, schema, dataPointerPath)
		|| null;
};

ValidatorContext.prototype.validateAllOf = function validateAllOf(data, schema, dataPointerPath) {
	if (schema.allOf === undefined) {
		return null;
	}
	var error;
	for (var i = 0; i < schema.allOf.length; i++) {
		var subSchema = schema.allOf[i];
		if (error = this.validateAll(data, subSchema, [], ["allOf", i], dataPointerPath)) {
			return error;
		}
	}
	return null;
};

ValidatorContext.prototype.validateAnyOf = function validateAnyOf(data, schema, dataPointerPath) {
	if (schema.anyOf === undefined) {
		return null;
	}
	var errors = [];
	var startErrorCount = this.errors.length;
	var oldUnknownPropertyPaths, oldKnownPropertyPaths;
	if (this.trackUnknownProperties) {
		oldUnknownPropertyPaths = this.unknownPropertyPaths;
		oldKnownPropertyPaths = this.knownPropertyPaths;
	}
	var errorAtEnd = true;
	for (var i = 0; i < schema.anyOf.length; i++) {
		if (this.trackUnknownProperties) {
			this.unknownPropertyPaths = {};
			this.knownPropertyPaths = {};
		}
		var subSchema = schema.anyOf[i];

		var errorCount = this.errors.length;
		var error = this.validateAll(data, subSchema, [], ["anyOf", i], dataPointerPath);

		if (error === null && errorCount === this.errors.length) {
			this.errors = this.errors.slice(0, startErrorCount);

			if (this.trackUnknownProperties) {
				for (var knownKey in this.knownPropertyPaths) {
					oldKnownPropertyPaths[knownKey] = true;
					delete oldUnknownPropertyPaths[knownKey];
				}
				for (var unknownKey in this.unknownPropertyPaths) {
					if (!oldKnownPropertyPaths[unknownKey]) {
						oldUnknownPropertyPaths[unknownKey] = true;
					}
				}
				// We need to continue looping so we catch all the property definitions, but we don't want to return an error
				errorAtEnd = false;
				continue;
			}

			return null;
		}
		if (error) {
			errors.push(error.prefixWith(null, "" + i).prefixWith(null, "anyOf"));
		}
	}
	if (this.trackUnknownProperties) {
		this.unknownPropertyPaths = oldUnknownPropertyPaths;
		this.knownPropertyPaths = oldKnownPropertyPaths;
	}
	if (errorAtEnd) {
		errors = errors.concat(this.errors.slice(startErrorCount));
		this.errors = this.errors.slice(0, startErrorCount);
		return this.createError(ErrorCodes.ANY_OF_MISSING, {}, "", "/anyOf", errors, data, schema);
	}
};

ValidatorContext.prototype.validateOneOf = function validateOneOf(data, schema, dataPointerPath) {
	if (schema.oneOf === undefined) {
		return null;
	}
	var validIndex = null;
	var errors = [];
	var startErrorCount = this.errors.length;
	var oldUnknownPropertyPaths, oldKnownPropertyPaths;
	if (this.trackUnknownProperties) {
		oldUnknownPropertyPaths = this.unknownPropertyPaths;
		oldKnownPropertyPaths = this.knownPropertyPaths;
	}
	for (var i = 0; i < schema.oneOf.length; i++) {
		if (this.trackUnknownProperties) {
			this.unknownPropertyPaths = {};
			this.knownPropertyPaths = {};
		}
		var subSchema = schema.oneOf[i];

		var errorCount = this.errors.length;
		var error = this.validateAll(data, subSchema, [], ["oneOf", i], dataPointerPath);

		if (error === null && errorCount === this.errors.length) {
			if (validIndex === null) {
				validIndex = i;
			} else {
				this.errors = this.errors.slice(0, startErrorCount);
				return this.createError(ErrorCodes.ONE_OF_MULTIPLE, {index1: validIndex, index2: i}, "", "/oneOf", null, data, schema);
			}
			if (this.trackUnknownProperties) {
				for (var knownKey in this.knownPropertyPaths) {
					oldKnownPropertyPaths[knownKey] = true;
					delete oldUnknownPropertyPaths[knownKey];
				}
				for (var unknownKey in this.unknownPropertyPaths) {
					if (!oldKnownPropertyPaths[unknownKey]) {
						oldUnknownPropertyPaths[unknownKey] = true;
					}
				}
			}
		} else if (error) {
			errors.push(error);
		}
	}
	if (this.trackUnknownProperties) {
		this.unknownPropertyPaths = oldUnknownPropertyPaths;
		this.knownPropertyPaths = oldKnownPropertyPaths;
	}
	if (validIndex === null) {
		errors = errors.concat(this.errors.slice(startErrorCount));
		this.errors = this.errors.slice(0, startErrorCount);
		return this.createError(ErrorCodes.ONE_OF_MISSING, {}, "", "/oneOf", errors, data, schema);
	} else {
		this.errors = this.errors.slice(0, startErrorCount);
	}
	return null;
};

ValidatorContext.prototype.validateNot = function validateNot(data, schema, dataPointerPath) {
	if (schema.not === undefined) {
		return null;
	}
	var oldErrorCount = this.errors.length;
	var oldUnknownPropertyPaths, oldKnownPropertyPaths;
	if (this.trackUnknownProperties) {
		oldUnknownPropertyPaths = this.unknownPropertyPaths;
		oldKnownPropertyPaths = this.knownPropertyPaths;
		this.unknownPropertyPaths = {};
		this.knownPropertyPaths = {};
	}
	var error = this.validateAll(data, schema.not, null, null, dataPointerPath);
	var notErrors = this.errors.slice(oldErrorCount);
	this.errors = this.errors.slice(0, oldErrorCount);
	if (this.trackUnknownProperties) {
		this.unknownPropertyPaths = oldUnknownPropertyPaths;
		this.knownPropertyPaths = oldKnownPropertyPaths;
	}
	if (error === null && notErrors.length === 0) {
		return this.createError(ErrorCodes.NOT_PASSED, {}, "", "/not", null, data, schema);
	}
	return null;
};

ValidatorContext.prototype.validateHypermedia = function validateCombinations(data, schema, dataPointerPath) {
	if (!schema.links) {
		return null;
	}
	var error;
	for (var i = 0; i < schema.links.length; i++) {
		var ldo = schema.links[i];
		if (ldo.rel === "describedby") {
			var template = new UriTemplate(ldo.href);
			var allPresent = true;
			for (var j = 0; j < template.varNames.length; j++) {
				if (!(template.varNames[j] in data)) {
					allPresent = false;
					break;
				}
			}
			if (allPresent) {
				var schemaUrl = template.fillFromObject(data);
				var subSchema = {"$ref": schemaUrl};
				if (error = this.validateAll(data, subSchema, [], ["links", i], dataPointerPath)) {
					return error;
				}
			}
		}
	}
};

// parseURI() and resolveUrl() are from https://gist.github.com/1088850
//   -  released as public domain by author ("Yaffle") - see comments on gist

function parseURI(url) {
	var m = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
	// authority = '//' + user + ':' + pass '@' + hostname + ':' port
	return (m ? {
		href     : m[0] || '',
		protocol : m[1] || '',
		authority: m[2] || '',
		host     : m[3] || '',
		hostname : m[4] || '',
		port     : m[5] || '',
		pathname : m[6] || '',
		search   : m[7] || '',
		hash     : m[8] || ''
	} : null);
}

function resolveUrl(base, href) {// RFC 3986

	function removeDotSegments(input) {
		var output = [];
		input.replace(/^(\.\.?(\/|$))+/, '')
			.replace(/\/(\.(\/|$))+/g, '/')
			.replace(/\/\.\.$/, '/../')
			.replace(/\/?[^\/]*/g, function (p) {
				if (p === '/..') {
					output.pop();
				} else {
					output.push(p);
				}
		});
		return output.join('').replace(/^\//, input.charAt(0) === '/' ? '/' : '');
	}

	href = parseURI(href || '');
	base = parseURI(base || '');

	return !href || !base ? null : (href.protocol || base.protocol) +
		(href.protocol || href.authority ? href.authority : base.authority) +
		removeDotSegments(href.protocol || href.authority || href.pathname.charAt(0) === '/' ? href.pathname : (href.pathname ? ((base.authority && !base.pathname ? '/' : '') + base.pathname.slice(0, base.pathname.lastIndexOf('/') + 1) + href.pathname) : base.pathname)) +
		(href.protocol || href.authority || href.pathname ? href.search : (href.search || base.search)) +
		href.hash;
}

function getDocumentUri(uri) {
	return uri.split('#')[0];
}
function normSchema(schema, baseUri) {
	if (schema && typeof schema === "object") {
		if (baseUri === undefined) {
			baseUri = schema.id;
		} else if (typeof schema.id === "string") {
			baseUri = resolveUrl(baseUri, schema.id);
			schema.id = baseUri;
		}
		if (Array.isArray(schema)) {
			for (var i = 0; i < schema.length; i++) {
				normSchema(schema[i], baseUri);
			}
		} else {
			if (typeof schema['$ref'] === "string") {
				schema['$ref'] = resolveUrl(baseUri, schema['$ref']);
			}
			for (var key in schema) {
				if (key !== "enum") {
					normSchema(schema[key], baseUri);
				}
			}
		}
	}
}

function defaultErrorReporter(language) {
	language = language || 'en';

	var errorMessages = languages[language];

	return function (error) {
		var messageTemplate = errorMessages[error.code] || ErrorMessagesDefault[error.code];
		if (typeof messageTemplate !== 'string') {
			return "Unknown error code " + error.code + ": " + JSON.stringify(error.messageParams);
		}
		var messageParams = error.params;
		// Adapted from Crockford's supplant()
		return messageTemplate.replace(/\{([^{}]*)\}/g, function (whole, varName) {
			var subValue = messageParams[varName];
			return typeof subValue === 'string' || typeof subValue === 'number' ? subValue : whole;
		});
	};
}

var ErrorCodes = {
	INVALID_TYPE: 0,
	ENUM_MISMATCH: 1,
	ANY_OF_MISSING: 10,
	ONE_OF_MISSING: 11,
	ONE_OF_MULTIPLE: 12,
	NOT_PASSED: 13,
	// Numeric errors
	NUMBER_MULTIPLE_OF: 100,
	NUMBER_MINIMUM: 101,
	NUMBER_MINIMUM_EXCLUSIVE: 102,
	NUMBER_MAXIMUM: 103,
	NUMBER_MAXIMUM_EXCLUSIVE: 104,
	NUMBER_NOT_A_NUMBER: 105,
	// String errors
	STRING_LENGTH_SHORT: 200,
	STRING_LENGTH_LONG: 201,
	STRING_PATTERN: 202,
	// Object errors
	OBJECT_PROPERTIES_MINIMUM: 300,
	OBJECT_PROPERTIES_MAXIMUM: 301,
	OBJECT_REQUIRED: 302,
	OBJECT_ADDITIONAL_PROPERTIES: 303,
	OBJECT_DEPENDENCY_KEY: 304,
	// Array errors
	ARRAY_LENGTH_SHORT: 400,
	ARRAY_LENGTH_LONG: 401,
	ARRAY_UNIQUE: 402,
	ARRAY_ADDITIONAL_ITEMS: 403,
	// Custom/user-defined errors
	FORMAT_CUSTOM: 500,
	KEYWORD_CUSTOM: 501,
	// Schema structure
	CIRCULAR_REFERENCE: 600,
	// Non-standard validation options
	UNKNOWN_PROPERTY: 1000
};
var ErrorCodeLookup = {};
for (var key in ErrorCodes) {
	ErrorCodeLookup[ErrorCodes[key]] = key;
}
var ErrorMessagesDefault = {
	INVALID_TYPE: "Invalid type: {type} (expected {expected})",
	ENUM_MISMATCH: "No enum match for: {value}",
	ANY_OF_MISSING: "Data does not match any schemas from \"anyOf\"",
	ONE_OF_MISSING: "Data does not match any schemas from \"oneOf\"",
	ONE_OF_MULTIPLE: "Data is valid against more than one schema from \"oneOf\": indices {index1} and {index2}",
	NOT_PASSED: "Data matches schema from \"not\"",
	// Numeric errors
	NUMBER_MULTIPLE_OF: "Value {value} is not a multiple of {multipleOf}",
	NUMBER_MINIMUM: "Value {value} is less than minimum {minimum}",
	NUMBER_MINIMUM_EXCLUSIVE: "Value {value} is equal to exclusive minimum {minimum}",
	NUMBER_MAXIMUM: "Value {value} is greater than maximum {maximum}",
	NUMBER_MAXIMUM_EXCLUSIVE: "Value {value} is equal to exclusive maximum {maximum}",
	NUMBER_NOT_A_NUMBER: "Value {value} is not a valid number",
	// String errors
	STRING_LENGTH_SHORT: "String is too short ({length} chars), minimum {minimum}",
	STRING_LENGTH_LONG: "String is too long ({length} chars), maximum {maximum}",
	STRING_PATTERN: "String does not match pattern: {pattern}",
	// Object errors
	OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({propertyCount}), minimum {minimum}",
	OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({propertyCount}), maximum {maximum}",
	OBJECT_REQUIRED: "Missing required property: {key}",
	OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed",
	OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {missing} (due to key: {key})",
	// Array errors
	ARRAY_LENGTH_SHORT: "Array is too short ({length}), minimum {minimum}",
	ARRAY_LENGTH_LONG: "Array is too long ({length}), maximum {maximum}",
	ARRAY_UNIQUE: "Array items are not unique (indices {match1} and {match2})",
	ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed",
	// Format errors
	FORMAT_CUSTOM: "Format validation failed ({message})",
	KEYWORD_CUSTOM: "Keyword failed: {key} ({message})",
	// Schema structure
	CIRCULAR_REFERENCE: "Circular $refs: {urls}",
	// Non-standard validation options
	UNKNOWN_PROPERTY: "Unknown property (not in schema)"
};

function ValidationError(code, params, dataPath, schemaPath, subErrors) {
	Error.call(this);
	if (code === undefined) {
		throw new Error ("No error code supplied: " + schemaPath);
	}
	this.message = '';
	this.params = params;
	this.code = code;
	this.dataPath = dataPath || "";
	this.schemaPath = schemaPath || "";
	this.subErrors = subErrors || null;

	var err = new Error(this.message);
	this.stack = err.stack || err.stacktrace;
	if (!this.stack) {
		try {
			throw err;
		}
		catch(err) {
			this.stack = err.stack || err.stacktrace;
		}
	}
}
ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;
ValidationError.prototype.name = 'ValidationError';

ValidationError.prototype.prefixWith = function (dataPrefix, schemaPrefix) {
	if (dataPrefix !== null) {
		dataPrefix = dataPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
		this.dataPath = "/" + dataPrefix + this.dataPath;
	}
	if (schemaPrefix !== null) {
		schemaPrefix = schemaPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
		this.schemaPath = "/" + schemaPrefix + this.schemaPath;
	}
	if (this.subErrors !== null) {
		for (var i = 0; i < this.subErrors.length; i++) {
			this.subErrors[i].prefixWith(dataPrefix, schemaPrefix);
		}
	}
	return this;
};

function isTrustedUrl(baseUrl, testUrl) {
	if(testUrl.substring(0, baseUrl.length) === baseUrl){
		var remainder = testUrl.substring(baseUrl.length);
		if ((testUrl.length > 0 && testUrl.charAt(baseUrl.length - 1) === "/")
			|| remainder.charAt(0) === "#"
			|| remainder.charAt(0) === "?") {
			return true;
		}
	}
	return false;
}

var languages = {};
function createApi(language) {
	var globalContext = new ValidatorContext();
	var currentLanguage;
	var customErrorReporter;
	var api = {
		setErrorReporter: function (reporter) {
			if (typeof reporter === 'string') {
				return this.language(reporter);
			}
			customErrorReporter = reporter;
			return true;
		},
		addFormat: function () {
			globalContext.addFormat.apply(globalContext, arguments);
		},
		language: function (code) {
			if (!code) {
				return currentLanguage;
			}
			if (!languages[code]) {
				code = code.split('-')[0]; // fall back to base language
			}
			if (languages[code]) {
				currentLanguage = code;
				return code; // so you can tell if fall-back has happened
			}
			return false;
		},
		addLanguage: function (code, messageMap) {
			var key;
			for (key in ErrorCodes) {
				if (messageMap[key] && !messageMap[ErrorCodes[key]]) {
					messageMap[ErrorCodes[key]] = messageMap[key];
				}
			}
			var rootCode = code.split('-')[0];
			if (!languages[rootCode]) { // use for base language if not yet defined
				languages[code] = messageMap;
				languages[rootCode] = messageMap;
			} else {
				languages[code] = Object.create(languages[rootCode]);
				for (key in messageMap) {
					if (typeof languages[rootCode][key] === 'undefined') {
						languages[rootCode][key] = messageMap[key];
					}
					languages[code][key] = messageMap[key];
				}
			}
			return this;
		},
		freshApi: function (language) {
			var result = createApi();
			if (language) {
				result.language(language);
			}
			return result;
		},
		validate: function (data, schema, checkRecursive, banUnknownProperties) {
			var def = defaultErrorReporter(currentLanguage);
			var errorReporter = customErrorReporter ? function (error, data, schema) {
				return customErrorReporter(error, data, schema) || def(error, data, schema);
			} : def;
			var context = new ValidatorContext(globalContext, false, errorReporter, checkRecursive, banUnknownProperties);
			if (typeof schema === "string") {
				schema = {"$ref": schema};
			}
			context.addSchema("", schema);
			var error = context.validateAll(data, schema, null, null, "");
			if (!error && banUnknownProperties) {
				error = context.banUnknownProperties(data, schema);
			}
			this.error = error;
			this.missing = context.missing;
			this.valid = (error === null);
			return this.valid;
		},
		validateResult: function () {
			var result = {};
			this.validate.apply(result, arguments);
			return result;
		},
		validateMultiple: function (data, schema, checkRecursive, banUnknownProperties) {
			var def = defaultErrorReporter(currentLanguage);
			var errorReporter = customErrorReporter ? function (error, data, schema) {
				return customErrorReporter(error, data, schema) || def(error, data, schema);
			} : def;
			var context = new ValidatorContext(globalContext, true, errorReporter, checkRecursive, banUnknownProperties);
			if (typeof schema === "string") {
				schema = {"$ref": schema};
			}
			context.addSchema("", schema);
			context.validateAll(data, schema, null, null, "");
			if (banUnknownProperties) {
				context.banUnknownProperties(data, schema);
			}
			var result = {};
			result.errors = context.errors;
			result.missing = context.missing;
			result.valid = (result.errors.length === 0);
			return result;
		},
		addSchema: function () {
			return globalContext.addSchema.apply(globalContext, arguments);
		},
		getSchema: function () {
			return globalContext.getSchema.apply(globalContext, arguments);
		},
		getSchemaMap: function () {
			return globalContext.getSchemaMap.apply(globalContext, arguments);
		},
		getSchemaUris: function () {
			return globalContext.getSchemaUris.apply(globalContext, arguments);
		},
		getMissingUris: function () {
			return globalContext.getMissingUris.apply(globalContext, arguments);
		},
		dropSchemas: function () {
			globalContext.dropSchemas.apply(globalContext, arguments);
		},
		defineKeyword: function () {
			globalContext.defineKeyword.apply(globalContext, arguments);
		},
		defineError: function (codeName, codeNumber, defaultMessage) {
			if (typeof codeName !== 'string' || !/^[A-Z]+(_[A-Z]+)*$/.test(codeName)) {
				throw new Error('Code name must be a string in UPPER_CASE_WITH_UNDERSCORES');
			}
			if (typeof codeNumber !== 'number' || codeNumber%1 !== 0 || codeNumber < 10000) {
				throw new Error('Code number must be an integer > 10000');
			}
			if (typeof ErrorCodes[codeName] !== 'undefined') {
				throw new Error('Error already defined: ' + codeName + ' as ' + ErrorCodes[codeName]);
			}
			if (typeof ErrorCodeLookup[codeNumber] !== 'undefined') {
				throw new Error('Error code already used: ' + ErrorCodeLookup[codeNumber] + ' as ' + codeNumber);
			}
			ErrorCodes[codeName] = codeNumber;
			ErrorCodeLookup[codeNumber] = codeName;
			ErrorMessagesDefault[codeName] = ErrorMessagesDefault[codeNumber] = defaultMessage;
			for (var langCode in languages) {
				var language = languages[langCode];
				if (language[codeName]) {
					language[codeNumber] = language[codeNumber] || language[codeName];
				}
			}
		},
		reset: function () {
			globalContext.reset();
			this.error = null;
			this.missing = [];
			this.valid = true;
		},
		missing: [],
		error: null,
		valid: true,
		normSchema: normSchema,
		resolveUrl: resolveUrl,
		getDocumentUri: getDocumentUri,
		errorCodes: ErrorCodes
	};
	api.language(language || 'en');
	return api;
}

var tv4 = createApi();
tv4.addLanguage('en-gb', ErrorMessagesDefault);

//legacy property
tv4.tv4 = tv4;

return tv4; // used by _header.js to globalise.

}));
},{}],2:[function(require,module,exports){
/*
 *  Copyright (c) 2014 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* More information about these options at jshint.com/docs/options */
/* jshint browser: true, camelcase: true, curly: true, devel: true,
   eqeqeq: true, forin: false, globalstrict: true, node: true,
   quotmark: single, undef: true, unused: strict */
/* global mozRTCIceCandidate, mozRTCPeerConnection, Promise,
mozRTCSessionDescription, webkitRTCPeerConnection, MediaStreamTrack */
/* exported trace,requestUserMedia */

'use strict';

var getUserMedia = null;
var attachMediaStream = null;
var reattachMediaStream = null;
var webrtcDetectedBrowser = null;
var webrtcDetectedVersion = null;
var webrtcMinimumVersion = null;
var webrtcUtils = {
  log: function() {
    // suppress console.log output when being included as a module.
    if (typeof module !== 'undefined' ||
        typeof require === 'function' && typeof define === 'function') {
      return;
    }
    console.log.apply(console, arguments);
  },
  extractVersion: function(uastring, expr, pos) {
    var match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos]);
  }
};

function trace(text) {
  // This function is used for logging.
  if (text[text.length - 1] === '\n') {
    text = text.substring(0, text.length - 1);
  }
  if (window.performance) {
    var now = (window.performance.now() / 1000).toFixed(3);
    webrtcUtils.log(now + ': ' + text);
  } else {
    webrtcUtils.log(text);
  }
}

if (typeof window === 'object') {
  if (window.HTMLMediaElement &&
    !('srcObject' in window.HTMLMediaElement.prototype)) {
    // Shim the srcObject property, once, when HTMLMediaElement is found.
    Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
      get: function() {
        // If prefixed srcObject property exists, return it.
        // Otherwise use the shimmed property, _srcObject
        return 'mozSrcObject' in this ? this.mozSrcObject : this._srcObject;
      },
      set: function(stream) {
        if ('mozSrcObject' in this) {
          this.mozSrcObject = stream;
        } else {
          // Use _srcObject as a private property for this shim
          this._srcObject = stream;
          // TODO: revokeObjectUrl(this.src) when !stream to release resources?
          this.src = URL.createObjectURL(stream);
        }
      }
    });
  }
  // Proxy existing globals
  getUserMedia = window.navigator && window.navigator.getUserMedia;
}

// Attach a media stream to an element.
attachMediaStream = function(element, stream) {
  element.srcObject = stream;
};

reattachMediaStream = function(to, from) {
  to.srcObject = from.srcObject;
};

if (typeof window === 'undefined' || !window.navigator) {
  webrtcUtils.log('This does not appear to be a browser');
  webrtcDetectedBrowser = 'not a browser';
} else if (navigator.mozGetUserMedia && window.mozRTCPeerConnection) {
  webrtcUtils.log('This appears to be Firefox');

  webrtcDetectedBrowser = 'firefox';

  // the detected firefox version.
  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent,
      /Firefox\/([0-9]+)\./, 1);

  // the minimum firefox version still supported by adapter.
  webrtcMinimumVersion = 31;

  // The RTCPeerConnection object.
  window.RTCPeerConnection = function(pcConfig, pcConstraints) {
    if (webrtcDetectedVersion < 38) {
      // .urls is not supported in FF < 38.
      // create RTCIceServers with a single url.
      if (pcConfig && pcConfig.iceServers) {
        var newIceServers = [];
        for (var i = 0; i < pcConfig.iceServers.length; i++) {
          var server = pcConfig.iceServers[i];
          if (server.hasOwnProperty('urls')) {
            for (var j = 0; j < server.urls.length; j++) {
              var newServer = {
                url: server.urls[j]
              };
              if (server.urls[j].indexOf('turn') === 0) {
                newServer.username = server.username;
                newServer.credential = server.credential;
              }
              newIceServers.push(newServer);
            }
          } else {
            newIceServers.push(pcConfig.iceServers[i]);
          }
        }
        pcConfig.iceServers = newIceServers;
      }
    }
    return new mozRTCPeerConnection(pcConfig, pcConstraints); // jscs:ignore requireCapitalizedConstructors
  };

  // The RTCSessionDescription object.
  if (!window.RTCSessionDescription) {
    window.RTCSessionDescription = mozRTCSessionDescription;
  }

  // The RTCIceCandidate object.
  if (!window.RTCIceCandidate) {
    window.RTCIceCandidate = mozRTCIceCandidate;
  }

  // getUserMedia constraints shim.
  getUserMedia = function(constraints, onSuccess, onError) {
    var constraintsToFF37 = function(c) {
      if (typeof c !== 'object' || c.require) {
        return c;
      }
      var require = [];
      Object.keys(c).forEach(function(key) {
        if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
          return;
        }
        var r = c[key] = (typeof c[key] === 'object') ?
            c[key] : {ideal: c[key]};
        if (r.min !== undefined ||
            r.max !== undefined || r.exact !== undefined) {
          require.push(key);
        }
        if (r.exact !== undefined) {
          if (typeof r.exact === 'number') {
            r.min = r.max = r.exact;
          } else {
            c[key] = r.exact;
          }
          delete r.exact;
        }
        if (r.ideal !== undefined) {
          c.advanced = c.advanced || [];
          var oc = {};
          if (typeof r.ideal === 'number') {
            oc[key] = {min: r.ideal, max: r.ideal};
          } else {
            oc[key] = r.ideal;
          }
          c.advanced.push(oc);
          delete r.ideal;
          if (!Object.keys(r).length) {
            delete c[key];
          }
        }
      });
      if (require.length) {
        c.require = require;
      }
      return c;
    };
    if (webrtcDetectedVersion < 38) {
      webrtcUtils.log('spec: ' + JSON.stringify(constraints));
      if (constraints.audio) {
        constraints.audio = constraintsToFF37(constraints.audio);
      }
      if (constraints.video) {
        constraints.video = constraintsToFF37(constraints.video);
      }
      webrtcUtils.log('ff37: ' + JSON.stringify(constraints));
    }
    return navigator.mozGetUserMedia(constraints, onSuccess, onError);
  };

  navigator.getUserMedia = getUserMedia;

  // Shim for mediaDevices on older versions.
  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: requestUserMedia,
      addEventListener: function() { },
      removeEventListener: function() { }
    };
  }
  navigator.mediaDevices.enumerateDevices =
      navigator.mediaDevices.enumerateDevices || function() {
    return new Promise(function(resolve) {
      var infos = [
        {kind: 'audioinput', deviceId: 'default', label: '', groupId: ''},
        {kind: 'videoinput', deviceId: 'default', label: '', groupId: ''}
      ];
      resolve(infos);
    });
  };

  if (webrtcDetectedVersion < 41) {
    // Work around http://bugzil.la/1169665
    var orgEnumerateDevices =
        navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
    navigator.mediaDevices.enumerateDevices = function() {
      return orgEnumerateDevices().then(undefined, function(e) {
        if (e.name === 'NotFoundError') {
          return [];
        }
        throw e;
      });
    };
  }
} else if (navigator.webkitGetUserMedia && window.webkitRTCPeerConnection) {
  webrtcUtils.log('This appears to be Chrome');

  webrtcDetectedBrowser = 'chrome';

  // the detected chrome version.
  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent,
      /Chrom(e|ium)\/([0-9]+)\./, 2);

  // the minimum chrome version still supported by adapter.
  webrtcMinimumVersion = 38;

  // The RTCPeerConnection object.
  window.RTCPeerConnection = function(pcConfig, pcConstraints) {
    // Translate iceTransportPolicy to iceTransports,
    // see https://code.google.com/p/webrtc/issues/detail?id=4869
    if (pcConfig && pcConfig.iceTransportPolicy) {
      pcConfig.iceTransports = pcConfig.iceTransportPolicy;
    }

    var pc = new webkitRTCPeerConnection(pcConfig, pcConstraints); // jscs:ignore requireCapitalizedConstructors
    var origGetStats = pc.getStats.bind(pc);
    pc.getStats = function(selector, successCallback, errorCallback) { // jshint ignore: line
      var self = this;
      var args = arguments;

      // If selector is a function then we are in the old style stats so just
      // pass back the original getStats format to avoid breaking old users.
      if (arguments.length > 0 && typeof selector === 'function') {
        return origGetStats(selector, successCallback);
      }

      var fixChromeStats = function(response) {
        var standardReport = {};
        var reports = response.result();
        reports.forEach(function(report) {
          var standardStats = {
            id: report.id,
            timestamp: report.timestamp,
            type: report.type
          };
          report.names().forEach(function(name) {
            standardStats[name] = report.stat(name);
          });
          standardReport[standardStats.id] = standardStats;
        });

        return standardReport;
      };

      if (arguments.length >= 2) {
        var successCallbackWrapper = function(response) {
          args[1](fixChromeStats(response));
        };

        return origGetStats.apply(this, [successCallbackWrapper, arguments[0]]);
      }

      // promise-support
      return new Promise(function(resolve, reject) {
        if (args.length === 1 && selector === null) {
          origGetStats.apply(self, [
              function(response) {
                resolve.apply(null, [fixChromeStats(response)]);
              }, reject]);
        } else {
          origGetStats.apply(self, [resolve, reject]);
        }
      });
    };

    return pc;
  };

  // add promise support
  ['createOffer', 'createAnswer'].forEach(function(method) {
    var nativeMethod = webkitRTCPeerConnection.prototype[method];
    webkitRTCPeerConnection.prototype[method] = function() {
      var self = this;
      if (arguments.length < 1 || (arguments.length === 1 &&
          typeof(arguments[0]) === 'object')) {
        var opts = arguments.length === 1 ? arguments[0] : undefined;
        return new Promise(function(resolve, reject) {
          nativeMethod.apply(self, [resolve, reject, opts]);
        });
      } else {
        return nativeMethod.apply(this, arguments);
      }
    };
  });

  ['setLocalDescription', 'setRemoteDescription',
      'addIceCandidate'].forEach(function(method) {
    var nativeMethod = webkitRTCPeerConnection.prototype[method];
    webkitRTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      var self = this;
      return new Promise(function(resolve, reject) {
        nativeMethod.apply(self, [args[0],
            function() {
              resolve();
              if (args.length >= 2) {
                args[1].apply(null, []);
              }
            },
            function(err) {
              reject(err);
              if (args.length >= 3) {
                args[2].apply(null, [err]);
              }
            }]
          );
      });
    };
  });

  // getUserMedia constraints shim.
  var constraintsToChrome = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function(key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function(mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  getUserMedia = function(constraints, onSuccess, onError) {
    if (constraints.audio) {
      constraints.audio = constraintsToChrome(constraints.audio);
    }
    if (constraints.video) {
      constraints.video = constraintsToChrome(constraints.video);
    }
    webrtcUtils.log('chrome: ' + JSON.stringify(constraints));
    return navigator.webkitGetUserMedia(constraints, onSuccess, onError);
  };
  navigator.getUserMedia = getUserMedia;

  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: requestUserMedia,
                              enumerateDevices: function() {
      return new Promise(function(resolve) {
        var kinds = {audio: 'audioinput', video: 'videoinput'};
        return MediaStreamTrack.getSources(function(devices) {
          resolve(devices.map(function(device) {
            return {label: device.label,
                    kind: kinds[device.kind],
                    deviceId: device.id,
                    groupId: ''};
          }));
        });
      });
    }};
  }

  // A shim for getUserMedia method on the mediaDevices object.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (!navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      return requestUserMedia(constraints);
    };
  } else {
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      webrtcUtils.log('spec:   ' + JSON.stringify(c)); // whitespace for alignment
      c.audio = constraintsToChrome(c.audio);
      c.video = constraintsToChrome(c.video);
      webrtcUtils.log('chrome: ' + JSON.stringify(c));
      return origGetUserMedia(c);
    };
  }

  // Dummy devicechange event methods.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
    navigator.mediaDevices.addEventListener = function() {
      webrtcUtils.log('Dummy mediaDevices.addEventListener called.');
    };
  }
  if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
    navigator.mediaDevices.removeEventListener = function() {
      webrtcUtils.log('Dummy mediaDevices.removeEventListener called.');
    };
  }

  // Attach a media stream to an element.
  attachMediaStream = function(element, stream) {
    if (webrtcDetectedVersion >= 43) {
      element.srcObject = stream;
    } else if (typeof element.src !== 'undefined') {
      element.src = URL.createObjectURL(stream);
    } else {
      webrtcUtils.log('Error attaching stream to element.');
    }
  };
  reattachMediaStream = function(to, from) {
    if (webrtcDetectedVersion >= 43) {
      to.srcObject = from.srcObject;
    } else {
      to.src = from.src;
    }
  };

} else if (navigator.mediaDevices && navigator.userAgent.match(
    /Edge\/(\d+).(\d+)$/)) {
  webrtcUtils.log('This appears to be Edge');
  webrtcDetectedBrowser = 'edge';

  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent,
      /Edge\/(\d+).(\d+)$/, 2);

  // the minimum version still supported by adapter.
  webrtcMinimumVersion = 12;
} else {
  webrtcUtils.log('Browser does not appear to be WebRTC-capable');
}

// Returns the result of getUserMedia as a Promise.
function requestUserMedia(constraints) {
  return new Promise(function(resolve, reject) {
    getUserMedia(constraints, resolve, reject);
  });
}

var webrtcTesting = {};
try {
  Object.defineProperty(webrtcTesting, 'version', {
    set: function(version) {
      webrtcDetectedVersion = version;
    }
  });
} catch (e) {}

if (typeof module !== 'undefined') {
  var RTCPeerConnection;
  if (typeof window !== 'undefined') {
    RTCPeerConnection = window.RTCPeerConnection;
  }
  module.exports = {
    RTCPeerConnection: RTCPeerConnection,
    getUserMedia: getUserMedia,
    attachMediaStream: attachMediaStream,
    reattachMediaStream: reattachMediaStream,
    webrtcDetectedBrowser: webrtcDetectedBrowser,
    webrtcDetectedVersion: webrtcDetectedVersion,
    webrtcMinimumVersion: webrtcMinimumVersion,
    webrtcTesting: webrtcTesting,
    webrtcUtils: webrtcUtils
    //requestUserMedia: not exposed on purpose.
    //trace: not exposed on purpose.
  };
} else if ((typeof require === 'function') && (typeof define === 'function')) {
  // Expose objects and functions when RequireJS is doing the loading.
  define([], function() {
    return {
      RTCPeerConnection: window.RTCPeerConnection,
      getUserMedia: getUserMedia,
      attachMediaStream: attachMediaStream,
      reattachMediaStream: reattachMediaStream,
      webrtcDetectedBrowser: webrtcDetectedBrowser,
      webrtcDetectedVersion: webrtcDetectedVersion,
      webrtcMinimumVersion: webrtcMinimumVersion,
      webrtcTesting: webrtcTesting,
      webrtcUtils: webrtcUtils
      //requestUserMedia: not exposed on purpose.
      //trace: not exposed on purpose.
    };
  });
}

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = activate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _srcServiceFramework = require('../src/service-framework');

var _srcHypertyHypertyConnector = require('../src/hyperty/HypertyConnector');

var _srcHypertyHypertyConnector2 = _interopRequireDefault(_srcHypertyHypertyConnector);

var HelloHyperty = (function () {
  function HelloHyperty(hypertyURL, bus, configuration) {
    _classCallCheck(this, HelloHyperty);

    console.log('World Hyperty Instance');

    var _this = this;
    _this.bus = bus;
    _this.configuration = configuration;
    _this.hypertyURL = hypertyURL;

    var syncher = new _srcServiceFramework.Syncher(hypertyURL, bus, configuration);
    _this.syncher = syncher;

    _this.syncher.onNotification(function (event) {
      console.log('hyperty hello have an notification: ', event);
      _this.hypertyConnector._onNotification(event, hypertyURL);
    });

    _this.hypertyConnector = new _srcHypertyHypertyConnector2['default'](syncher);
    _this.hypertyConnector.name = 'Hello Hyperty';
  }

  _createClass(HelloHyperty, [{
    key: 'connect',
    value: function connect(hypertyURL, options) {
      var _this = this;
      _this.to = hypertyURL;

      return new Promise(function (resolve, reject) {

        console.info('Connecting to: ', hypertyURL);
        _this.hypertyConnector.connect(hypertyURL, options).then(function (controller) {
          console.info('Connected to: ', hypertyURL, controller);
          resolve(controller);
        })['catch'](function (reason) {
          reject(reason);
        });
      });
    }
  }, {
    key: 'accept',
    value: function accept() {
      var _this = this;

      return new Promise(function (resolve, reject) {

        console.info('Subscribing object');
        _this.hypertyConnector.accept().then(function (controller) {
          console.info('subscribed to: ', controller);
          resolve(controller);
        })['catch'](function (reason) {
          console.error(reason);
          reject(reason);
        });
      });
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {

      var _this = this;

      return new Promise(function (resolve, reject) {

        console.info('disconnecting object');
        _this.hypertyConnector.disconnect().then(function (result) {
          console.info('disconnected');
          resolve(result);
        })['catch'](function (reason) {
          console.error(reason);
          reject(reason);
        });
      });
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage() {

      var _this = this;

      _this.bus.postMessage({
        from: _this.hypertyURL,
        to: 'hyperty-runtime://sp1/WorldHyperty',
        body: {
          value: 'Hello from world hyperty instance'
        }
      });
    }
  }]);

  return HelloHyperty;
})();

function activate(hypertyURL, bus, configuration) {

  return {
    hypertyName: 'HelloHyperty',
    hypertyCode: new HelloHyperty(hypertyURL, bus, configuration)
  };
}

module.exports = exports['default'];

},{"../src/hyperty/HypertyConnector":13,"../src/service-framework":18}],4:[function(require,module,exports){
/**
 * Created by amo on 14/11/2015.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CatalogueDataObject = (function () {
    /**
     * Creates the Catalogue Data Object
     * @param guid - Global Unique identifier of the Catalogue Object (e.g. Hyperty descriptor, ProtocolStub descriptor,
     * etc) enabling the same object to be stored and discovered in different Catalogues. That means, guid corresponds to
     * <resource-type-id> per BNF of Resource Path. Couldn't we have problems with too long URL paths?
     * @param type - indicates the type of Catalogue Data Object e.g. Hyperty, ProtocolStub, etc
     * @param objectName - human-understandable name of the catalogue object e.g. "My Awesome Hyperty"
     * @param description - description of the source package
     * @param language - the programming language used in the SourcePackage.SourceCode
     * @param sourcePackageURL - A string containing the URL from where the source code package of the corresponding
     * catalogue object, e.g. deployable packages containing executable code for Hyperties or ProtoStubs, can be downloaded
     */

    function CatalogueDataObject(guid, type, objectName, description, language, sourcePackageURL) {
        _classCallCheck(this, CatalogueDataObject);

        this._guid = guid;
        this._type = type;
        this._objectName = objectName;
        this._description = description;
        this._language = language;
        this._sourcePackageURL = sourcePackageURL;

        this._signature = null;
        this._sourcePackage = null;
    }

    // Getters

    _createClass(CatalogueDataObject, [{
        key: 'guid',
        get: function get() {
            return this._guid;
        }
    }, {
        key: 'type',
        get: function get() {
            return this._type;
        }
    }, {
        key: 'objectName',
        get: function get() {
            return this._objectName;
        }
    }, {
        key: 'description',
        get: function get() {
            return this._description;
        }
    }, {
        key: 'language',
        get: function get() {
            return this._language;
        }
    }, {
        key: 'signature',
        get: function get() {
            return this._signature;
        },

        // Setters
        /**
         * Set the signature to enables integrity and authenticity verification
         * @param signature
         */
        set: function set(signature) {
            if (signature) this._signature = signature;
        }
    }, {
        key: 'sourcePackage',
        get: function get() {
            return this._sourcePackage;
        },
        set: function set(srcPackage) {
            if (srcPackage) this._sourcePackage = srcPackage;
        }
    }, {
        key: 'sourcePackageURL',
        get: function get() {
            return this._sourcePackageURL;
        }
    }]);

    return CatalogueDataObject;
})();

var CatalogueObjectType = {
    HYPERTY: 'hyperty', PROTOSTUB: 'protostub', HYPERTY_RUNTIME: 'hyperty_runtime',
    HYPERTY_INTERCEPTOR: 'hyperty_inspector', HYPERTY_DATA_OBJECT: 'hyperty_data_object',
    POLICY_ENFORCER: 'policy_enforcer'
};
exports.CatalogueObjectType = CatalogueObjectType;
var DataObjectSourceLanguage = {
    JAVASCRIPT_ECMA6: 'javascript_ecma6', JAVASCRIPT_ECMA5: 'javascript_ecma5',
    JSON_SCHEMA_V4: 'json_schema_v4', PYTHON: 'python', TYPESCRIPT: 'typescript'
};
exports.DataObjectSourceLanguage = DataObjectSourceLanguage;
exports['default'] = CatalogueDataObject;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _reTHINKObjectRethinkObject = require('../reTHINKObject/RethinkObject');

var _reTHINKObjectRethinkObject2 = _interopRequireDefault(_reTHINKObjectRethinkObject);

var _CatalogueDataObject = require('./CatalogueDataObject');

var _CatalogueDataObject2 = _interopRequireDefault(_CatalogueDataObject);

var _SourcePackage = require('./SourcePackage');

var _SourcePackage2 = _interopRequireDefault(_SourcePackage);

var _HypertyDescriptor = require('./HypertyDescriptor');

var _HypertyDescriptor2 = _interopRequireDefault(_HypertyDescriptor);

var _ProtocolStubDescriptor = require('./ProtocolStubDescriptor');

var _ProtocolStubDescriptor2 = _interopRequireDefault(_ProtocolStubDescriptor);

var _HypertyRuntimeDescriptor = require('./HypertyRuntimeDescriptor');

var _HypertyRuntimeDescriptor2 = _interopRequireDefault(_HypertyRuntimeDescriptor);

var _PolicyEnforcerDescriptor = require('./PolicyEnforcerDescriptor');

var _PolicyEnforcerDescriptor2 = _interopRequireDefault(_PolicyEnforcerDescriptor);

var _DataObjectSchema = require('./DataObjectSchema');

var _DataObjectSchema2 = _interopRequireDefault(_DataObjectSchema);

var CatalogueDataObjectFactory = (function (_RethinkObject) {
    _inherits(CatalogueDataObjectFactory, _RethinkObject);

    /**
     * Constructor
     * @param {boolean} validation
     * @param {URL.URL } schema - link to the schema
     */

    function CatalogueDataObjectFactory(validation, schema) {
        _classCallCheck(this, CatalogueDataObjectFactory);

        _get(Object.getPrototypeOf(CatalogueDataObjectFactory.prototype), 'constructor', this).call(this, validation, schema);
    }

    _createClass(CatalogueDataObjectFactory, [{
        key: 'createCatalogueDataObject',
        value: function createCatalogueDataObject(type, objectName, description, language, sourcePackageURL) {
            if (typeof type === "undefined" || typeof objectName === "undefined" || typeof description === "undefined" || typeof language === "undefined" || typeof sourcePackageURL === "undefined") throw new Error("Invalid parameters!");
            return new _CatalogueDataObject2['default'](this._generateGuid(), type, objectName, description, language, sourcePackageURL);
        }
    }, {
        key: 'createHypertyDescriptorObject',
        value: function createHypertyDescriptorObject(objectName, description, language, sourcePackageURL, hypertyType, dataObjects) {
            if (typeof objectName === "undefined" || typeof description === "undefined" || typeof language === "undefined" || typeof sourcePackageURL === "undefined" || typeof hypertyType === "undefined" || typeof dataObjects === "undefined") throw new Error("Invalid parameters!");
            return new _HypertyDescriptor2['default'](this._generateGuid(), _CatalogueDataObject.CatalogueObjectType.HYPERTY, objectName, description, language, sourcePackageURL, hypertyType, dataObjects);
        }
    }, {
        key: 'createProtoStubDescriptorObject',
        value: function createProtoStubDescriptorObject(objectName, description, language, sourcePackageURL, messageSchemas, configurationList, constraintList) {
            if (typeof objectName === "undefined" || typeof description === "undefined" || typeof language === "undefined" || typeof sourcePackageURL === "undefined" || typeof messageSchemas === "undefined" || typeof configurationList === "undefined" || typeof constraintList === "undefined") throw new Error("Invalid parameters!");
            return new _ProtocolStubDescriptor2['default'](this._generateGuid(), _CatalogueDataObject.CatalogueObjectType.PROTOSTUB, objectName, description, language, sourcePackageURL, messageSchemas, configurationList, constraintList);
        }
    }, {
        key: 'createHypertyRuntimeDescriptorObject',
        value: function createHypertyRuntimeDescriptorObject(objectName, description, language, sourcePackageURL, runtimeType, hypertyCapabilities, protocolCapabilities) {
            if (typeof objectName === "undefined" || typeof description === "undefined" || typeof language === "undefined" || typeof sourcePackageURL === "undefined" || typeof runtimeType === "undefined" || typeof hypertyCapabilities === "undefined" || typeof protocolCapabilities === "undefined") throw new Error("Invalid parameters!");

            return new _HypertyRuntimeDescriptor2['default'](this._generateGuid(), _CatalogueDataObject.CatalogueObjectType.HYPERTY_RUNTIME, objectName, description, language, sourcePackageURL, runtimeType, hypertyCapabilities, protocolCapabilities);
        }
    }, {
        key: 'createPolicyEnforcerDescriptorObject',
        value: function createPolicyEnforcerDescriptorObject(objectName, description, language, sourcePackageURL, configuration, policies) {
            if (typeof objectName === "undefined" || typeof description === "undefined" || typeof language === "undefined" || typeof sourcePackageURL === "undefined" || typeof configuration === "undefined" || typeof policies === "undefined") throw new Error("Invalid parameters!");

            return new _PolicyEnforcerDescriptor2['default'](this._generateGuid(), _CatalogueDataObject.CatalogueObjectType.POLICY_ENFORCER, objectName, description, language, sourcePackageURL, configuration, policies);
        }
    }, {
        key: 'createDataObjectSchema',
        value: function createDataObjectSchema(type, objectName, description, language, sourcePackageURL) {
            if (typeof type === "undefined" || typeof objectName === "undefined" || typeof description === "undefined" || typeof language === "undefined" || typeof sourcePackageURL === "undefined") throw new Error("Invalid parameters!");

            return new _DataObjectSchema2['default'](this._generateGuid(), type, objectName, description, language, sourcePackageURL);
        }
    }, {
        key: 'createSourcePackage',
        value: function createSourcePackage(sourceCode, sourceCodeClassname) {
            if (typeof sourceCode === "undefined" || typeof sourceCodeClassname === "undefined") throw new Error("Invalid parameters!");

            return new _SourcePackage2['default'](sourceCode, sourceCodeClassname);
        }
    }, {
        key: '_generateGuid',
        value: function _generateGuid() {
            var d = new Date().getTime();

            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
        }
    }]);

    return CatalogueDataObjectFactory;
})(_reTHINKObjectRethinkObject2['default']);

exports['default'] = CatalogueDataObjectFactory;
module.exports = exports['default'];

},{"../reTHINKObject/RethinkObject":17,"./CatalogueDataObject":4,"./DataObjectSchema":6,"./HypertyDescriptor":7,"./HypertyRuntimeDescriptor":8,"./PolicyEnforcerDescriptor":9,"./ProtocolStubDescriptor":10,"./SourcePackage":11}],6:[function(require,module,exports){
/**
 * Created by pzu on 19.11.15.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _CatalogueDataObject2 = require('./CatalogueDataObject');

var _CatalogueDataObject3 = _interopRequireDefault(_CatalogueDataObject2);

var DataObjectSchema = (function (_CatalogueDataObject) {
    _inherits(DataObjectSchema, _CatalogueDataObject);

    function DataObjectSchema(guid, type, objectName, description, language, sourcePackageURL) {
        _classCallCheck(this, DataObjectSchema);

        _get(Object.getPrototypeOf(DataObjectSchema.prototype), 'constructor', this).call(this, guid, type, objectName, description, language, sourcePackageURL);
    }

    //Children
    return DataObjectSchema;
})(_CatalogueDataObject3['default']);

var MessageDataObjectSchema = (function (_DataObjectSchema) {
    _inherits(MessageDataObjectSchema, _DataObjectSchema);

    function MessageDataObjectSchema(guid, type, objectName, description, language, sourcePackageURL) {
        _classCallCheck(this, MessageDataObjectSchema);

        _get(Object.getPrototypeOf(MessageDataObjectSchema.prototype), 'constructor', this).call(this, guid, type, objectName, description, language, sourcePackageURL);
    }

    return MessageDataObjectSchema;
})(DataObjectSchema);

exports.MessageDataObjectSchema = MessageDataObjectSchema;

var HypertyDataObjectSchema = (function (_DataObjectSchema2) {
    _inherits(HypertyDataObjectSchema, _DataObjectSchema2);

    function HypertyDataObjectSchema(guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        _classCallCheck(this, HypertyDataObjectSchema);

        _get(Object.getPrototypeOf(HypertyDataObjectSchema.prototype), 'constructor', this).call(this, guid, type, objectName, description, language, sourcePackageURL);
        this._accessControlPolicy = accessControlPolicy;
    }

    //Children
    return HypertyDataObjectSchema;
})(DataObjectSchema);

exports.HypertyDataObjectSchema = HypertyDataObjectSchema;

var CommunicationDataObjectSchema = (function (_HypertyDataObjectSchema) {
    _inherits(CommunicationDataObjectSchema, _HypertyDataObjectSchema);

    function CommunicationDataObjectSchema(guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        _classCallCheck(this, CommunicationDataObjectSchema);

        _get(Object.getPrototypeOf(CommunicationDataObjectSchema.prototype), 'constructor', this).call(this, guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy);
    }

    return CommunicationDataObjectSchema;
})(HypertyDataObjectSchema);

exports.CommunicationDataObjectSchema = CommunicationDataObjectSchema;

var ConnectionDataObjectSchema = (function (_HypertyDataObjectSchema2) {
    _inherits(ConnectionDataObjectSchema, _HypertyDataObjectSchema2);

    function ConnectionDataObjectSchema(guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        _classCallCheck(this, ConnectionDataObjectSchema);

        _get(Object.getPrototypeOf(ConnectionDataObjectSchema.prototype), 'constructor', this).call(this, guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy);
    }

    return ConnectionDataObjectSchema;
})(HypertyDataObjectSchema);

exports.ConnectionDataObjectSchema = ConnectionDataObjectSchema;

var IdentifyDataObjectSchema = (function (_HypertyDataObjectSchema3) {
    _inherits(IdentifyDataObjectSchema, _HypertyDataObjectSchema3);

    function IdentifyDataObjectSchema(guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        _classCallCheck(this, IdentifyDataObjectSchema);

        _get(Object.getPrototypeOf(IdentifyDataObjectSchema.prototype), 'constructor', this).call(this, guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy);
    }

    return IdentifyDataObjectSchema;
})(HypertyDataObjectSchema);

exports.IdentifyDataObjectSchema = IdentifyDataObjectSchema;

var ContextDataObjectSchema = (function (_HypertyDataObjectSchema4) {
    _inherits(ContextDataObjectSchema, _HypertyDataObjectSchema4);

    function ContextDataObjectSchema(guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy) {
        _classCallCheck(this, ContextDataObjectSchema);

        _get(Object.getPrototypeOf(ContextDataObjectSchema.prototype), 'constructor', this).call(this, guid, type, objectName, description, language, sourcePackageURL, accessControlPolicy);
    }

    return ContextDataObjectSchema;
})(HypertyDataObjectSchema);

exports.ContextDataObjectSchema = ContextDataObjectSchema;
exports['default'] = DataObjectSchema;

},{"./CatalogueDataObject":4}],7:[function(require,module,exports){
/**
 * Created by amo on 14/11/2015.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _CatalogueDataObject2 = require('./CatalogueDataObject');

var _CatalogueDataObject3 = _interopRequireDefault(_CatalogueDataObject2);

var HypertyDescriptor = (function (_CatalogueDataObject) {
    _inherits(HypertyDescriptor, _CatalogueDataObject);

    function HypertyDescriptor(guid, catalogueType, objectName, description, language, sourcePackageURL, hypertyType, dataObjects) {
        _classCallCheck(this, HypertyDescriptor);

        _get(Object.getPrototypeOf(HypertyDescriptor.prototype), 'constructor', this).call(this, guid, catalogueType, objectName, description, language, sourcePackageURL);

        this._configurationDataList = {};
        this._runtimeConstraintList = {};
        this._policies = {};
        this._messageSchema = null;

        this._hypertyType = hypertyType;
        this._dataObjects = dataObjects;
    }

    _createClass(HypertyDescriptor, [{
        key: 'hypertyType',
        get: function get() {
            return this._hypertyType;
        },
        set: function set(hType) {
            if (hType) this._hypertyType = hType;
        }
    }, {
        key: 'dataObjects',
        get: function get() {
            return this._dataObjects;
        },
        set: function set(dataObjectUrl) {
            if (dataObjectUrl) this._dataObjects = dataObjectUrl;
        }
    }, {
        key: 'configurationDataList',
        get: function get() {
            return this._configurationDataList;
        },
        set: function set(configDataList) {
            if (configDataList) this._configurationDataList = configDataList;
        }
    }, {
        key: 'runtimeConstraintList',
        get: function get() {
            return this._runtimeConstraintList;
        },
        set: function set(runtimeConstList) {
            if (runtimeConstList) this._runtimeConstraintList = runtimeConstList;
        }
    }, {
        key: 'messageSchema',
        get: function get() {
            return this._messageSchema;
        },
        set: function set(msgSchema) {
            if (msgSchema) this._messageSchema = msgSchema;
        }
    }, {
        key: 'policies',
        get: function get() {
            return this._policies;
        },
        set: function set(policyList) {
            if (policyList) this._policies = policyList;
        }
    }]);

    return HypertyDescriptor;
})(_CatalogueDataObject3['default']);

var RuntimeHypertyCapabilityType = {};
exports.RuntimeHypertyCapabilityType = RuntimeHypertyCapabilityType;
var HypertyType = { COMMUNICATOR: 'communicator', IDENTITY: 'identity', CONTEXT: 'context' };
exports.HypertyType = HypertyType;
exports['default'] = HypertyDescriptor;

},{"./CatalogueDataObject":4}],8:[function(require,module,exports){
/**
 * Created by amo on 14/11/2015.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _CatalogueDataObject2 = require('./CatalogueDataObject');

var _CatalogueDataObject3 = _interopRequireDefault(_CatalogueDataObject2);

var HypertyRuntimeDescriptor = (function (_CatalogueDataObject) {
    _inherits(HypertyRuntimeDescriptor, _CatalogueDataObject);

    function HypertyRuntimeDescriptor(guid, catalogueType, objectName, description, language, sourcePackageURL, runtimeType, hypertyCapabilities, protocolCapabilities) {
        _classCallCheck(this, HypertyRuntimeDescriptor);

        _get(Object.getPrototypeOf(HypertyRuntimeDescriptor.prototype), 'constructor', this).call(this, guid, catalogueType, objectName, description, language, sourcePackageURL);

        this._runtimeType = runtimeType;
        if (hypertyCapabilities) this._hypertyCapabilities = hypertyCapabilities;else this._hypertyCapabilities = {};
        if (protocolCapabilities) this._protocolCapabilities = protocolCapabilities;else this._protocolCapabilities = {};
    }

    _createClass(HypertyRuntimeDescriptor, [{
        key: 'runtimeType',
        get: function get() {
            return this._runtimeType;
        }
    }, {
        key: 'hypertyCapabilities',
        get: function get() {
            return this._hypertyCapabilities;
        }
    }, {
        key: 'protocolCapabilities',
        get: function get() {
            return this._hypertyCapabilities;
        }
    }]);

    return HypertyRuntimeDescriptor;
})(_CatalogueDataObject3['default']);

var RuntimeType = { BROWSER: 'browser', STANDALONE: 'standalone', SERVER: 'server', GATEWAY: 'gateway' };
exports.RuntimeType = RuntimeType;
var RuntimeHypertyCapabilityType = { MIC: 'mic', CAMERA: 'camera', SENSOR: 'sensor', WEBRTC: 'webrtc',
    ORTC: 'ortc' };
exports.RuntimeHypertyCapabilityType = RuntimeHypertyCapabilityType;
var RuntimeProtocolCapabilityType = { HTTP: 'http', HTTPS: 'https', WS: 'ws', WSS: 'wss', COAP: 'coap',
    DATACHANEL: 'datachannel' };
exports.RuntimeProtocolCapabilityType = RuntimeProtocolCapabilityType;
exports['default'] = HypertyRuntimeDescriptor;

},{"./CatalogueDataObject":4}],9:[function(require,module,exports){
/**
 * Created by pzu on 19.11.15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _CatalogueDataObject2 = require('./CatalogueDataObject');

var _CatalogueDataObject3 = _interopRequireDefault(_CatalogueDataObject2);

var PolicyEnforcerDescriptor = (function (_CatalogueDataObject) {
    _inherits(PolicyEnforcerDescriptor, _CatalogueDataObject);

    function PolicyEnforcerDescriptor(guid, type, objectName, description, language, sourcePackageURL, configuration, policies) {
        _classCallCheck(this, PolicyEnforcerDescriptor);

        _get(Object.getPrototypeOf(PolicyEnforcerDescriptor.prototype), 'constructor', this).call(this, guid, type, objectName, description, language, sourcePackageURL);

        this._configuration = configuration;
        this._policies = policies;
    }

    _createClass(PolicyEnforcerDescriptor, [{
        key: 'configuration',
        get: function get() {
            return this._configuration;
        },
        set: function set(configuration) {
            this._configuration = configuration;
        }
    }, {
        key: 'policies',
        get: function get() {
            return this._policies;
        },
        set: function set(policies) {
            this._policies = policies;
        }
    }]);

    return PolicyEnforcerDescriptor;
})(_CatalogueDataObject3['default']);

exports['default'] = PolicyEnforcerDescriptor;
module.exports = exports['default'];

},{"./CatalogueDataObject":4}],10:[function(require,module,exports){
/**
 * Created by amo on 14/11/2015.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _CatalogueDataObject2 = require('./CatalogueDataObject');

var _CatalogueDataObject3 = _interopRequireDefault(_CatalogueDataObject2);

var _HypertyRuntimeDescriptor = require('./HypertyRuntimeDescriptor');

var _HypertyRuntimeDescriptor2 = _interopRequireDefault(_HypertyRuntimeDescriptor);

var ProtocolStubDescriptor = (function (_CatalogueDataObject) {
    _inherits(ProtocolStubDescriptor, _CatalogueDataObject);

    function ProtocolStubDescriptor(guid, type, objectName, description, language, sourcePackageURL, messageSchemas, configurationList, constraintList) {
        _classCallCheck(this, ProtocolStubDescriptor);

        _get(Object.getPrototypeOf(ProtocolStubDescriptor.prototype), 'constructor', this).call(this, guid, type, objectName, description, language, sourcePackageURL);

        this._messageSchemas = messageSchemas;
        if (configurationList) this._configurationList = configurationList;else this._configurationList = {};

        if (constraintList) this._constraintsList = constraintList;else this._constraintsList = {};
    }

    _createClass(ProtocolStubDescriptor, [{
        key: 'messageSchemas',
        get: function get() {
            return this._messageSchemas;
        }
    }, {
        key: 'constraintsList',
        get: function get() {
            return this._constraintsList;
        }
    }, {
        key: 'configurationList',
        get: function get() {
            return this._configurationList;
        }
    }]);

    return ProtocolStubDescriptor;
})(_CatalogueDataObject3['default']);

exports['default'] = ProtocolStubDescriptor;
module.exports = exports['default'];

},{"./CatalogueDataObject":4,"./HypertyRuntimeDescriptor":8}],11:[function(require,module,exports){
/**
 * Created by amo on 14/11/2015.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SourcePackage = (function () {
    function SourcePackage(sourceCode, sourceCodeClassname) {
        _classCallCheck(this, SourcePackage);

        this._sourceCode = sourceCode;
        this._sourceCodeClassname = sourceCodeClassname;

        this._encoding = null;
        this._signature = null;
    }

    _createClass(SourcePackage, [{
        key: "sourceCode",
        get: function get() {
            return this._sourceCode;
        }
    }, {
        key: "sourceCodeClassname",
        get: function get() {
            return this._sourceCode;
        }
    }, {
        key: "encoding",
        get: function get() {
            return this._encoding;
        },
        set: function set(encoding) {
            if (encoding) this._encoding = encoding;
        }
    }, {
        key: "signature",
        get: function get() {
            return this._signature;
        },
        set: function set(sign) {
            if (sign) this._signature = sign;
        }
    }]);

    return SourcePackage;
})();

exports["default"] = SourcePackage;
module.exports = exports["default"];

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('webrtc-adapter-test');

var _utilsEventEmitter = require('../utils/EventEmitter');

var _utilsEventEmitter2 = _interopRequireDefault(_utilsEventEmitter);

var ConnectionController = (function (_EventEmitter) {
  _inherits(ConnectionController, _EventEmitter);

  function ConnectionController() {
    _classCallCheck(this, ConnectionController);

    _get(Object.getPrototypeOf(ConnectionController.prototype), 'constructor', this).call(this);

    var _this = this;

    _this.mode = 'offer';

    _this.mediaConstraints = {
      optional: [],
      mandatory: {
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
      }
    };

    // Prepare the PeerConnection
    var peerConnection = new RTCPeerConnection();

    peerConnection.addEventListener('signalingstatechange', function (event) {

      if (event.currentTarget.signalingState === 'have-remote-offer') {
        _this.mode = 'answer';
        _this.trigger('controller:state:change', _this.mode);
      }

      if (event.currentTarget.signalingState === 'have-local-offer') {
        _this.trigger('controller:state:change', _this.mode);
      }
    });

    peerConnection.addEventListener('iceconnectionstatechange', function (event) {
      console.info(event.currentTarget.iceConnectionState);
    });

    peerConnection.addEventListener('icecandidate', function (event) {

      if (!event.candidate) return;

      var data = _this._connectionDataObjectReporter.data;
      data.ice = {
        type: 'candidate',
        candidate: event.candidate.candidate,
        sdpMid: event.candidate.sdpMid,
        sdpMLineIndex: event.candidate.sdpMLineIndex
      };
    });

    // Add stream to PeerConnection
    peerConnection.addEventListener('addstream', function (event) {
      console.info('add stream from mode: ', _this.mode);
      _this.trigger('stream:added', URL.createObjectURL(event.stream), _this.connectionDataObjectReporter, _this.connectionDataObjectObserver);
    });

    _this.peerConnection = peerConnection;
  }

  /**
  * Set the connectionDataObject in the controller
  * @param {ConnectionDataObject} connectionDataObject - have all information about the syncher object;
  */

  _createClass(ConnectionController, [{
    key: 'getUserMedia',

    /**
     * Get WebRTC API resources
     * @param  {Object}     options Object containing the information that resources will be used (camera, mic, resolution, etc);
     * @return {Promise}
     */
    value: function getUserMedia(constraints) {

      var _this = this;

      return new Promise(function (resolve, reject) {

        navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
          _this.peerConnection.addStream(mediaStream);
          resolve(mediaStream);
        })['catch'](function (reason) {
          reject(reason);
        });
      });
    }
  }, {
    key: 'changePeerInformation',
    value: function changePeerInformation() {

      var _this = this;

      _this._connectionDataObjectObserver.onChange('*', function (event) {
        console.debug('message:', event);

        var message = event.data;

        if (message.type === 'offer' || message.type === 'answer') {

          _this.peerConnection.setRemoteDescription(new RTCSessionDescription(message), _this.remoteDescriptionSuccess, _this.remoteDescriptionError);
        } else if (message.type === 'candidate') {
          _this.peerConnection.addIceCandidate(new RTCIceCandidate({ candidate: message.candidate }));
        }
      });
    }
  }, {
    key: 'remoteDescriptionSuccess',
    value: function remoteDescriptionSuccess() {
      console.log('remote success');
    }
  }, {
    key: 'remoteDescriptionError',
    value: function remoteDescriptionError(error) {
      console.error('error: ', error);
    }
  }, {
    key: 'createOffer',
    value: function createOffer() {
      var _this = this;

      _this.peerConnection.createOffer(function (description) {
        _this.onLocalSessionCreated(description);
      }, _this.logError, _this.mediaConstraints);
    }
  }, {
    key: 'createAnswer',
    value: function createAnswer() {
      var _this = this;

      _this.peerConnection.createAnswer(function (description) {
        _this.onLocalSessionCreated(description);
      }, _this.logError);
    }

    /**
     * Disconnect the peer connection
     * @method disconnect
     * @return {Promise}
     */
  }, {
    key: 'disconnect',
    value: function disconnect() {

      // TODO: optimize the disconnect function

      var _this = this;

      return new Promise(function (resolve, reject) {

        try {

          _this.peerConnection.close();

          resolve(true);
        } catch (e) {
          reject('error disconnecting connection');
        }
      });
    }
  }, {
    key: 'onLocalSessionCreated',
    value: function onLocalSessionCreated(description) {

      var _this = this;
      var peerConnection = _this.peerConnection;

      peerConnection.setLocalDescription(description, function () {

        var data = _this._connectionDataObjectReporter.data;
        data.sdp = {
          sdp: description.sdp,
          type: description.type
        };
      }, _this.logError);
    }
  }, {
    key: 'logError',
    value: function logError(err) {
      console.error(err.toString(), err);
    }
  }, {
    key: 'connectionDataObjectReporter',
    set: function set(connectionDataObject) {
      if (!connectionDataObject) throw new Error('The Connection Data Object is a needed parameter');

      var _this = this;
      _this._connectionDataObjectReporter = connectionDataObject;

      connectionDataObject.onSubscription(function (event) {
        event.accept();

        if (_this.mode === 'offer') {
          _this.createOffer();
        } else {
          _this.createAnswer();
        }
      });

      console.log('Set connectionDataObject: ', _this._connectionDataObjectReporter);
    },

    /**
    * return the connectionDataObject in the controller
    * @return {ConnectionDataObject} connectionDataObject
    */
    get: function get() {
      var _this = this;
      return _this._connectionDataObjectReporter;
    }

    /**
    * Set the connectionDataObject in the controller
    * @param {ConnectionDataObject} connectionDataObject - have all information about the syncher object;
    */
  }, {
    key: 'connectionDataObjectObserver',
    set: function set(connectionDataObject) {
      if (!connectionDataObject) throw new Error('The Connection Data Object is a needed parameter');

      var _this = this;
      _this._connectionDataObjectObserver = connectionDataObject;

      console.log('Set connectionDataObject: ', _this._connectionDataObjectObserver);

      _this.changePeerInformation();
    },

    /**
    * return the connectionDataObject in the controller
    * @return {ConnectionDataObject} connectionDataObject
    */
    get: function get() {
      var _this = this;
      return _this._connectionDataObjectObserver;
    }
  }]);

  return ConnectionController;
})(_utilsEventEmitter2['default']);

exports['default'] = ConnectionController;
module.exports = exports['default'];

},{"../utils/EventEmitter":23,"webrtc-adapter-test":2}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ConnectionController = require('./ConnectionController');

var _ConnectionController2 = _interopRequireDefault(_ConnectionController);

var _utilsEventEmitter = require('../utils/EventEmitter');

var _utilsEventEmitter2 = _interopRequireDefault(_utilsEventEmitter);

/**
 * Hyperty Connector;
 * @author Vitor Silva [vitor-t-silva@telecom.pt]
 * @version 0.1.0
 */

var HypertyConnector = (function (_EventEmitter) {
  _inherits(HypertyConnector, _EventEmitter);

  /**
   * Create a new Hyperty Connector
   * @param  {Syncher} syncher - Syncher provided from the runtime core
   */

  function HypertyConnector(syncher) {
    _classCallCheck(this, HypertyConnector);

    if (!syncher) throw new Error('The Syncher is a needed parameter');

    _get(Object.getPrototypeOf(HypertyConnector.prototype), 'constructor', this).call(this, syncher);

    var _this = this;
    _this.mode = 'offer';

    _this.connectionController = new _ConnectionController2['default']();

    _this.connectionController.addEventListener('controller:state:change', function (state) {
      if (state === 'answer') {
        _this.mode = state;
        _this._autoConnect(_this.notificationEvent.from);
      }
    });

    // step 2 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#notification-about-incoming-connection-request
    syncher.onNotification(function (event) {
      console.log('connector have an notification: ', event);

      _this.notificationEvent = event;

      var notification = {
        type: event.type,
        owner: event.value.owner,
        from: event.from,
        to: event.value.to,
        resources: event.value.resources
      };

      if (event.type === 'create' && event.value.owner) {
        // step 5 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#notification-about-incoming-connection-request
        // trigger notification to the app an wait for an answer
        // to subscribe the objectURL
        _this.trigger('connector:notification', notification);
      } else {
        _this._autoAccept(event.url);
      }
    });

    _this._syncher = syncher;
  }

  /**
   * Establish connection with other client identifier
   * @param  {HypertyURL} HypertyURL - Define the identifier of the other component
   * @param  {Object} options - Object with options to improve the connect
   */

  _createClass(HypertyConnector, [{
    key: 'connect',
    value: function connect(hypertyURL, options) {
      // TODO: CHange the hypertyURL for a list of URLS
      var _this = this;

      options = options || { video: true, audio: true };

      return new Promise(function (resolve, reject) {

        // Step 3 and 4 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#create-new-connection
        _this.connectionController.getUserMedia(options).then(function (commResources) {
          console.log('Get webRTC common resources', commResources, hypertyURL);

          // TODO: Optimize the resources to get;
          // and add all options available;
          var initial = {};
          initial.owner = true;
          initial.to = hypertyURL;
          initial.resources = {
            video: options.video,
            audio: options.audio
          };

          // Step 5 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#create-new-connection
          return _this._syncher.create({}, [hypertyURL], initial);
        }).then(function (connectionDataObject) {
          console.log('Return Create Connection Data Object', connectionDataObject);

          // Step 11 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#create-new-connection
          _this.connectionController.connectionDataObjectReporter = connectionDataObject;

          // Step 12 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#create-new-connection
          resolve(_this.connectionController);
        })['catch'](function (reason) {
          console.error(reason);
          reject(reason);
        });
      });
    }

    /**
     * Accept the incoming call
     * @method accept
     * @return {Promise}
     */
  }, {
    key: 'accept',
    value: function accept() {
      var _this = this;

      return new Promise(function (resolve, reject) {

        var objectURL = _this.notificationEvent.url;

        // step 6 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#notification-about-incoming-connection-request
        // after waiting for an answer, we can now subscribe the objectURL
        _this._syncher.subscribe(objectURL).then(function (connectionDataObject) {
          console.log('Return Subscribe Connection Data Object', connectionDataObject);

          // step 7 and 10 - https://github.com/reTHINK-project/scenario-service-implementation/tree/master/docs/hyperties/connector#notification-about-incoming-connection-request
          _this.connectionController.connectionDataObjectObserver = connectionDataObject;
          resolve(_this.connectionController);

          var resources = connectionDataObject.data.resources;
          return _this.connectionController.getUserMedia(resources);
        }).then(function (commResources) {
          console.log('Get webRTC common resources', commResources);
        })['catch'](function (reason) {
          console.error(reason);
          reject(reason);
        });
      });
    }

    /**
     * Connection is closed by local peer and disconnected;
     * @method disconnect
     * @return {Promise}
     */
  }, {
    key: 'disconnect',
    value: function disconnect() {

      var _this = this;

      return new Promise(function (resolve, reject) {

        _this.connectionController.disconnect().then(function (disconnected) {

          console.log('disconnected: ', disconnected);

          resolve(disconnected);
        })['catch'](function (reason) {
          reject(reason);
        });
      });
    }
  }, {
    key: '_autoConnect',
    value: function _autoConnect(hypertyURL) {
      var _this = this;

      _this._syncher.create({}, [hypertyURL], {}).then(function (connectionDataObject) {
        console.log('Return Create Connection Data Object', connectionDataObject);
        _this.connectionController.connectionDataObjectReporter = connectionDataObject;
      })['catch'](function (reason) {
        console.error(reason);
      });
    }
  }, {
    key: '_autoAccept',
    value: function _autoAccept(url) {
      var _this = this;

      _this._syncher.subscribe(url).then(function (connectionDataObject) {
        console.log('Return Subscribe Connection Data Object', connectionDataObject);
        _this.connectionController.connectionDataObjectObserver = connectionDataObject;
      });
    }
  }]);

  return HypertyConnector;
})(_utilsEventEmitter2['default']);

exports['default'] = HypertyConnector;
module.exports = exports['default'];

},{"../utils/EventEmitter":23,"./ConnectionController":12}],14:[function(require,module,exports){
/**
* Class implementation of Message Data Model
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Message = function Message(id, from, toList, type, contextId, body, signature) {
    _classCallCheck(this, Message);

    this.id = id;
    this.from = from;
    this.to = toList;
    this.type = type;
    this.contextId = contextId;
    this.signature = signature;
    this.body = body;
}

/*
get id(){ return this.id; }
  get from(){ return this.from; }
  get type() { return this.type; }
  get contextId() { return this.contextId; }
  get body(){ return this.body; }
  set id(identifier){
    if(identifier)
        this.id = identifier;
}
  set from(sender){
    if(sender)
        this.from = sender;
}
  set type(msgType){
    if(msgType)
        this.type = msgType;
}
  set contextId(cID){
    if(cID)
        this.contextId = cID;
}
set body(msgBody){
    if(msgBody)
        this.body = msgBody;
}
set to(recipientList){
    if(recipientList)
        this.to = recipientList;
}
  set signature(signature) {
    if (signature)
        this.signature = signature;
}*/

;

exports.Message = Message;
var MessageType = { CREATE: 'create', READ: 'read', UPDATE: 'update', DELETE: 'delete', SUBSCRIBE: 'subscribe',
    UNSUBSCRIBE: 'unsubscribe', RESPONSE: 'response', FORWARD: 'forward' };

exports.MessageType = MessageType;
exports['default'] = Message;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MessageBody =

/**
 *
 * @param {Identity.JWT} idToken - token for Identity assertion purpose
 * @param {Identity.JWT} accessToken
 * @param {URL.URL} resource
 * @param {URL.HypertyCatalogueURL} schema
 * @param {Identity.JWT} assertedIdentity
 *
 */
function MessageBody(idToken, accessToken, resource, schema, assertedIdentity) {
    _classCallCheck(this, MessageBody);

    //let _this = this;
    if (typeof idoken !== 'undefined') this.idToken = idToken;
    if (typeof accessToken !== 'undefined') this.accessToken = accessToken;
    if (typeof resource !== 'undefined') this.resource = resource;
    if (typeof schema !== 'undefined') this.schema = schema;
    if (typeof assertedIdentity !== 'undefined') this.assertedIdentity = assertedIdentity;
};

var CreateMessageBody = (function (_MessageBody) {
    _inherits(CreateMessageBody, _MessageBody);

    function CreateMessageBody(value, policy, idToken, accessToken, resource, schema, assertedIdentity) {
        _classCallCheck(this, CreateMessageBody);

        if (typeof value === 'undefined') throw new Error("The value parameter is null");
        _get(Object.getPrototypeOf(CreateMessageBody.prototype), 'constructor', this).call(this, idToken, accessToken, resource, schema, assertedIdentity, schema, assertedIdentity);

        this.value = value;
        if (policy) this.policy = policy;
    }

    return CreateMessageBody;
})(MessageBody);

exports.CreateMessageBody = CreateMessageBody;

var ReadMessageBody = (function (_MessageBody2) {
    _inherits(ReadMessageBody, _MessageBody2);

    function ReadMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute, criteriaSyntax, criteria) {
        _classCallCheck(this, ReadMessageBody);

        _get(Object.getPrototypeOf(ReadMessageBody.prototype), 'constructor', this).call(this, idToken, accessToken, resource, schema, assertedIdentity);

        if (attribute) this.attribute = attribute;

        if (criteriaSyntax) this.criteriaSyntax = criteriaSyntax;

        if (criteria) this.criteria = criteria;
    }

    return ReadMessageBody;
})(MessageBody);

exports.ReadMessageBody = ReadMessageBody;

var DeleteMessageBody = (function (_MessageBody3) {
    _inherits(DeleteMessageBody, _MessageBody3);

    function DeleteMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute) {
        _classCallCheck(this, DeleteMessageBody);

        _get(Object.getPrototypeOf(DeleteMessageBody.prototype), 'constructor', this).call(this, idToken, accessToken, resource, schema, assertedIdentity);

        if (attribute) {
            this.attribute = attribute;
        }
    }

    return DeleteMessageBody;
})(MessageBody);

exports.DeleteMessageBody = DeleteMessageBody;

var UpdateMessageBody = (function (_MessageBody4) {
    _inherits(UpdateMessageBody, _MessageBody4);

    function UpdateMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute, value) {
        _classCallCheck(this, UpdateMessageBody);

        _get(Object.getPrototypeOf(UpdateMessageBody.prototype), 'constructor', this).call(this, idToken, accessToken, resource, schema, assertedIdentity);

        this.attribute = attribute;
        this.value = value;
    }

    return UpdateMessageBody;
})(MessageBody);

exports.UpdateMessageBody = UpdateMessageBody;

var ForwardMessageBody = (function (_MessageBody5) {
    _inherits(ForwardMessageBody, _MessageBody5);

    function ForwardMessageBody(idToken, accessToken, resource, schema, assertedIdentity, message) {
        _classCallCheck(this, ForwardMessageBody);

        _get(Object.getPrototypeOf(ForwardMessageBody.prototype), 'constructor', this).call(this, idToken, accessToken, resource, schema, assertedIdentity);

        this.message = message;
    }

    return ForwardMessageBody;
})(MessageBody);

exports.ForwardMessageBody = ForwardMessageBody;

var ResponseMessageBody = (function (_MessageBody6) {
    _inherits(ResponseMessageBody, _MessageBody6);

    function ResponseMessageBody(idToken, accessToken, resource, code, value) {
        _classCallCheck(this, ResponseMessageBody);

        _get(Object.getPrototypeOf(ResponseMessageBody.prototype), 'constructor', this).call(this, idToken, accessToken, resource);

        if (code) {
            this.code = code;
            this.description = REASON_PHRASE[code];
        }

        if (value) this.value = value;
    }

    return ResponseMessageBody;
})(MessageBody);

exports.ResponseMessageBody = ResponseMessageBody;
var RESPONS_CODE = {
    100: '100',
    101: '101',
    200: '200',
    201: '201',
    202: '202',
    203: '203',
    204: '204',
    205: '205',
    206: '206',
    300: '300',
    301: '301',
    302: '302',
    303: '303',
    304: '304',
    305: '305',
    307: '307',
    400: '400',
    401: '401',
    402: '402',
    403: '403',
    404: '404',
    405: '405',
    406: '406',
    407: '407',
    408: '408',
    409: '409',
    410: '410',
    411: '411',
    412: '412',
    413: '413',
    414: '414',
    415: '415',
    416: '416',
    417: '417',
    426: '426',
    500: '500',
    501: '501',
    502: '502',
    503: '503',
    504: '504',
    505: '505'
};
exports.RESPONS_CODE = RESPONS_CODE;
var REASON_PHRASE = {
    100: 'Continue',
    101: 'Switching Protocols',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    307: 'Temporary Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'Request-URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    426: 'Upgrade Required',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Time-out',
    505: 'HTTP Version Not Supported'
};

exports.REASON_PHRASE = REASON_PHRASE;
exports['default'] = MessageBody;

},{}],16:[function(require,module,exports){
/**
* Message Factory
* 
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _reTHINKObjectRethinkObjectJs = require('../reTHINKObject/RethinkObject.js');

var _reTHINKObjectRethinkObjectJs2 = _interopRequireDefault(_reTHINKObjectRethinkObjectJs);

var _MessageJs = require('./Message.js');

var _MessageJs2 = _interopRequireDefault(_MessageJs);

var _MessageBodyJs = require('./MessageBody.js');

var MessageFactory = (function (_RethinkObject) {
    _inherits(MessageFactory, _RethinkObject);

    /**
     * Constructor
     * @param {boolean} validation
     * @param {URL.URL } schema - link to the schema
     */

    function MessageFactory(validation, schema) {
        _classCallCheck(this, MessageFactory);

        _get(Object.getPrototypeOf(MessageFactory.prototype), 'constructor', this).call(this, validation, schema);

        var _this = this;
    }

    _createClass(MessageFactory, [{
        key: 'validate',
        value: function validate(data) {
            return _get(Object.getPrototypeOf(MessageFactory.prototype), 'validate', this).call(this, data);
        }

        /**
         * Create a Message with CREATE MessageType and Create Message Body
         *
         * @param {URL.URL} from - the sender of this message
         * @param {URL.URLList} One or more URLs of Message recipients. According to the URL scheme it may be handled in
         * different ways
         * @param {Object} contextId - the GUID used to identity eg a communication session like a telephony call
         * @param {Identity.JWT} idToken - token for Identity assertion purpose
         * @param {Identity.JWT} accessToken - access token for access control purposes
         * @param {URL.URl} resource - URL of Data Object Resource associated with the message
         * @param {string} signature -
         * @param {string} value - the created object in JSON format
         * @param {URL.URL} policy - URL from where access policy control can be downloaded
         *
         * @return {Message} Create Message
         */
    }, {
        key: 'createMessageRequest',
        value: function createMessageRequest(from, to, contextId, idToken, accessToken, resource, signature, schema, assertedIdentity, value, policy) {
            if (typeof from === 'undefined' || typeof contextId === 'undefined' || typeof value === 'undefined') throw new Error("from, contextId, and value of object to be created MUST be specified");

            var messageBody = new _MessageBodyJs.CreateMessageBody(value, policy, idToken, accessToken, resource, schema, assertedIdentity);
            var message = new _MessageJs2['default'](MessageFactory._generateMessageId(), from, to, _MessageJs.MessageType.CREATE, contextId, messageBody, signature);
            return message;
        }
    }, {
        key: 'createForwardMessageRequest',
        value: function createForwardMessageRequest(data, from, to, contextId, idToken, accessToken, resource, signature, schema, assertedIdentity) {
            if (typeof from === 'undefined' || typeof contextId === 'undefined' || typeof data === 'undefined') throw new Error("from, contextId, and message to forward MUST be specified");

            var messageBody = new _MessageBodyJs.ForwardMessageBody(idToken, accessToken, resource, schema, assertedIdentity, data);
            var message = new _MessageJs2['default'](MessageFactory._generateMessageId(), from, to, _MessageJs.MessageType.FORWARD, contextId, messageBody, signature);
            return message;
        }

        /**
         *  Create Delete Message
         * @param {URL.URL} from - the sender of this message
         * @param {URL.URLList} to - One or more URLs of Message recipients. According to the URL scheme it may be handled in
         * different ways
         * @param {Object} contextId - the GUID used to identity eg a communication session like a telephony call
         * @param {Identity.JWT} idToken - token for Identity assertion purpose
         * @param {Identity.JWT} accessToken - access token for access control purposes
         * @param {URL.URl} resource - URL of Data Object Resource associated with the message
         * @param {string} signature -
         * @param attribute - Identifies the attribute in the Object to be deleted
         * @param schema
         * @param assertedIdentity - user identity
         * @return Delete Message
         */
    }, {
        key: 'createDeleteMessageRequest',
        value: function createDeleteMessageRequest(from, to, contextId, idToken, accessToken, resource, signature, attribute, schema, assertedIdentity) {
            if (typeof from === 'undefined' || typeof contextId === 'undefined') throw new Error("from, contextId, and value of object to be created MUST be specified");
            var messageBody = new _MessageBodyJs.DeleteMessageBody(idToken, accessToken, resource, attribute, schema, assertedIdentity);
            var message = new _MessageJs2['default'](MessageFactory._generateMessageId(), from, to, _MessageJs.MessageType.DELETE, contextId, messageBody, signature);
            return message;
        }

        /**
         * Creates an Update Message Request
         * @param {URL.URL} from - the sender of this message
         * @param {URL.URLList} One or more URLs of Message recipients. According to the URL scheme it may be handled in
         * different ways
         * @param {Object} contextId - the GUID used to identity eg a communication session like a telephony call
         * @param {Identity.JWT} idToken - token for Identity assertion purpose
         * @param {Identity.JWT} accessToken - access token for access control purposes
         * @param {URL.URl} resource - URL of Data Object Resource associated with the message
         * @param {string} signature -
         * @param attribute - Identifies the attribute in the Object to be updated
         * @param value - The new value of the attribute to be updated
         */
    }, {
        key: 'createUpdateMessageRequest',
        value: function createUpdateMessageRequest(from, to, contextId, idToken, accessToken, resource, signature, schema, assertedIdentity, attribute, value) {
            if (typeof from === 'undefined' || typeof contextId === 'undefined') throw new Error("from, and contextId MUST be specified");
            var messageBody = new _MessageBodyJs.UpdateMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute, value);
            var message = new _MessageJs2['default'](MessageFactory._generateMessageId(), from, to, _MessageJs.MessageType.UPDATE, contextId, messageBody, signature);
            return message;
        }

        /**
         *
         * @param {URL.URL} from - the sender of this message
         * @param {URL.URLList} One or more URLs of Message recipients. According to the URL scheme it may be handled in
         * different ways
         * @param {Object} contextId - the GUID used to identity eg a communication session like a telephony call
         * @param {Identity.JWT} idToken - token for Identity assertion purpose
         * @param {Identity.JWT} accessToken - access token for access control purposes
         * @param {URL.URl} resource - URL of Data Object Resource associated with the message
         * @param {string} signature -
         * @param schema -
         * @param assertedIdentity - the user identity
         * @param attribute - Identifies the attribute in the Object to be read
         * @param criteriaSyntax -
         * @param criteria -
         */
    }, {
        key: 'createReadMessageRequest',
        value: function createReadMessageRequest(from, to, contextId, idToken, accessToken, resource, signature, schema, assertedIdentity, attribute, criteriaSyntax, criteria) {
            if (typeof from === 'undefined' || typeof contextId === 'undefined') throw new Error("from, and contextId MUST be specified");
            var messageBody = new _MessageBodyJs.ReadMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute, criteriaSyntax, criteria);
            var message = new _MessageJs2['default'](MessageFactory._generateMessageId(), from, to, _MessageJs.MessageType.UPDATE, contextId, messageBody, signature);
            return message;
        }

        /**
         *
         * @param {URL.URL} from - the sender of this message
         * @param {URL.URLList} One or more URLs of Message recipients. According to the URL scheme it may be handled in
         * different ways
         * @param {Object} contextId - the GUID used to identity eg a communication session like a telephony call
         * @param {Identity.JWT} idToken - token for Identity assertion purpose
         * @param {Identity.JWT} accessToken - access token for access control purposes
         * @param {URL.URl} resource - URL of Data Object Resource associated with the message
         * @param {string} signature -
         * @param schema -
         * @param assertedIdentity - the user's identity
         * @param code - response code compliant with HTTP response codes (RFC7231).
         * @param value - Contains a data value in JSON format.
         */
    }, {
        key: 'createMessageResponse',
        value: function createMessageResponse(from, to, contextId, idToken, accessToken, resource, signature, schema, assertedIdentity, code, value) {
            if (typeof from === 'undefined' || typeof contextId === 'undefined' || typeof code === 'undefined') throw new Error("from, contextId, and response Code MUST be specified");
            var response = new _MessageBodyJs.ResponseMessageBody(idToken, accessToken, resource, code, value);
            return new _MessageJs2['default'](MessageFactory._generateMessageId(), from, to, _MessageJs.MessageType.RESPONSE, contextId, response, signature);
        }

        /**
         * Generate a Delete Message Body to the given Message
         * @param {Message} data - the input Message
         * @param {string} attribute - the attribute to be deleted
         * @return {Message} Delete Message
         */
    }, {
        key: 'generateDeleteMessageBody',
        value: function generateDeleteMessageBody(data, attribute) {
            if (typeof data === 'undefined' || typeof attribute === 'undefined') throw new Error("message and attribute MUST be specified");
            var previousBody = data.body;
            var idToken = previousBody.idToken;
            var accessToken = previousBody.accessToken;
            var resource = previousBody.resource;
            var schema = previousBody.schema;
            var assertedIdentity = previousBody.assertedIdentity;

            var newBody = new _MessageBodyJs.DeleteMessageBody(idToken, accessToken, resource, attribute, schema, assertedIdentity);
            return new _MessageJs2['default'](data.id, data.from, data.to, _MessageJs.MessageType.DELETE, data.contextId, newBody, data.signature);
        }

        /**
         * Generate an Update Message Body to the given Message
         * @param {Message} data - Message to be updated
         * @param {string} attribute to be updated
         * @param {object} value the new value of the attribute
         * @return {Message} Update Message
         */
    }, {
        key: 'generateUpdateMessageBody',
        value: function generateUpdateMessageBody(data, attribute, value) {
            if (!data || !attribute || !value) throw new Error("message attribute and value MUST be specified");
            var previousBody = data.body;
            var idToken = previousBody.idToken;
            var accessToken = previousBody.accessToken;
            var resource = previousBody.resource;
            var schema = previousBody.schema;
            var assertedIdentity = previousBody.assertedIdentity;

            var newBody = new _MessageBodyJs.UpdateMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute, value);
            return new _MessageJs2['default'](data.id, data.from, data.to, _MessageJs.MessageType.UPDATE, data.contextId, newBody, data.signature);
        }

        /**
         * generate a Read Message Body to given request
         * @param {Message} data - Message to be updated
         * @param {Object} attribute - Identifies the attribute in the Object to be read
         * @param {Object} criteria
         * @param {Object} criteriaSyntax
         */
    }, {
        key: 'generateReadMessageBody',
        value: function generateReadMessageBody(data, attribute, criteria, criteriaSyntax) {
            if (!data) throw new Error("message MUST be specified");
            var previousBody = data.body;
            var idToken = previousBody.idToken;
            var accessToken = previousBody.accessToken;
            var resource = previousBody.resource;
            var schema = previousBody.schema;
            var assertedIdentity = previousBody.assertedIdentity;

            var readBody = new _MessageBodyJs.ReadMessageBody(idToken, accessToken, resource, schema, assertedIdentity, attribute, criteriaSyntax, criteria);
            return new _MessageJs2['default'](data.id, data.from, data.to, _MessageJs.MessageType.READ, data.contextId, readBody, data.signature);
        }

        /**
         * Generate a response to the given Message
         * @param {Message} data - Message to be updated
         * @param code - response code compliant with HTTP response codes (RFC7231).
         * @param value - Contains a data value in JSON format.
         */
    }, {
        key: 'generateMessageResponse',
        value: function generateMessageResponse(data, code, value) {
            if (!data || !code) throw new Error("message and response code MUST be specified");

            var previousBody = data.body;
            var idToken = previousBody.idToken;
            var accessToken = previousBody.accessToken;
            var resource = previousBody.resource;

            var response = new _MessageBodyJs.ResponseMessageBody(idToken, accessToken, resource, code, value);
            return new _MessageJs2['default'](data.id, data.from, data.to, _MessageJs.MessageType.RESPONSE, data.contextId, response, data.signature);
        }
    }], [{
        key: '_generateMessageId',
        value: function _generateMessageId() {
            var d = new Date().getTime();

            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
        }
    }]);

    return MessageFactory;
})(_reTHINKObjectRethinkObjectJs2['default']);

exports['default'] = MessageFactory;
module.exports = exports['default'];

},{"../reTHINKObject/RethinkObject.js":17,"./Message.js":14,"./MessageBody.js":15}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _tv4 = require("tv4");

var _tv42 = _interopRequireDefault(_tv4);

var RethinkObject = (function () {
    function RethinkObject(validation, schema) {
        _classCallCheck(this, RethinkObject);

        var _this = this;

        this.validation = validation;
        this.schema = schema;
    }

    _createClass(RethinkObject, [{
        key: "validate",
        value: function validate(data) {
            if (this.schema) return _tv42["default"].validate(data, this.schema);else return false;
        }
    }]);

    return RethinkObject;
})();

exports.RethinkObject = RethinkObject;
exports["default"] = RethinkObject;

},{"tv4":1}],18:[function(require,module,exports){
// import AddressFactory from './address-factory/url';
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _catalogueFactoryCatalogueDataObjectFactory = require('./catalogue-factory/CatalogueDataObjectFactory');

var _catalogueFactoryCatalogueDataObjectFactory2 = _interopRequireDefault(_catalogueFactoryCatalogueDataObjectFactory);

var _messageFactoryMessageFactory = require('./message-factory/MessageFactory');

var _messageFactoryMessageFactory2 = _interopRequireDefault(_messageFactoryMessageFactory);

var _syncherSyncher = require('./syncher/Syncher');

var _syncherSyncher2 = _interopRequireDefault(_syncherSyncher);

var _syncherDataObjectReporter = require('./syncher/DataObjectReporter');

var _syncherDataObjectReporter2 = _interopRequireDefault(_syncherDataObjectReporter);

var _syncherDataObjectObserver = require('./syncher/DataObjectObserver');

var _syncherDataObjectObserver2 = _interopRequireDefault(_syncherDataObjectObserver);

var _hypertyHypertyConnector = require('./hyperty/HypertyConnector');

var _hypertyHypertyConnector2 = _interopRequireDefault(_hypertyHypertyConnector);

var _catalogueFactoryHypertyDescriptor = require('./catalogue-factory/HypertyDescriptor');

var _catalogueFactoryHypertyDescriptor2 = _interopRequireDefault(_catalogueFactoryHypertyDescriptor);

var _catalogueFactoryProtocolStubDescriptor = require('./catalogue-factory/ProtocolStubDescriptor');

var _catalogueFactoryProtocolStubDescriptor2 = _interopRequireDefault(_catalogueFactoryProtocolStubDescriptor);

var _catalogueFactorySourcePackage = require('./catalogue-factory/SourcePackage');

var _catalogueFactorySourcePackage2 = _interopRequireDefault(_catalogueFactorySourcePackage);

// export {AddressFactory};
exports.CatalogueFactory = _catalogueFactoryCatalogueDataObjectFactory2['default'];
exports.MessageFactory = _messageFactoryMessageFactory2['default'];
exports.Syncher = _syncherSyncher2['default'];
exports.DataObjectReporter = _syncherDataObjectReporter2['default'];
exports.DataObjectObserver = _syncherDataObjectObserver2['default'];
exports.HypertyConnector = _hypertyHypertyConnector2['default'];
exports.HypertyDescriptor = _catalogueFactoryHypertyDescriptor2['default'];
exports.ProtocolStubDescriptor = _catalogueFactoryProtocolStubDescriptor2['default'];
exports.SourcePackage = _catalogueFactorySourcePackage2['default'];

},{"./catalogue-factory/CatalogueDataObjectFactory":5,"./catalogue-factory/HypertyDescriptor":7,"./catalogue-factory/ProtocolStubDescriptor":10,"./catalogue-factory/SourcePackage":11,"./hyperty/HypertyConnector":13,"./message-factory/MessageFactory":16,"./syncher/DataObjectObserver":19,"./syncher/DataObjectReporter":20,"./syncher/Syncher":22}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _SyncObject = require('./SyncObject');

var _SyncObject2 = _interopRequireDefault(_SyncObject);

var FilterType = { ANY: 'any', START: 'start', EXACT: 'exact' };

var DataObjectObserver /* implements SyncStatus */ = (function () {
  /* private
  _version: number
  _owner: HypertyURL
    _url: ObjectURL
  _schema: Schema
  _status: on | paused
    _syncObj: SyncData
    ----event handlers----
  _filters: {<filter>: {type: <start, exact>, callback: <function>} }
  */

  function DataObjectObserver(ownerURL, objectURL, schema, initialStatus, initialData) {
    _classCallCheck(this, DataObjectObserver);

    var _this = this;

    _this._version = 0;
    _this._owner = ownerURL;
    _this._url = objectURL;
    _this._schema = schema;

    _this._status = initialStatus;
    _this._syncObj = new _SyncObject2['default'](initialData);
    _this._syncObj.observe(function (event) {
      _this._onFilter(event);
    });

    _this._filters = {};
  }

  _createClass(DataObjectObserver, [{
    key: 'pause',
    value: function pause() {
      //TODO: this feature needs more analise
      throw 'Not implemented';
    }
  }, {
    key: 'resume',
    value: function resume() {
      //TODO: this feature needs more analise
      throw 'Not implemented';
    }
  }, {
    key: 'stop',
    value: function stop() {
      //TODO: should remove the subscription and send message unsubscribe?
      throw 'Not implemented';
    }

    //register change filter
  }, {
    key: 'onChange',
    value: function onChange(filter, callback) {
      var key = filter;
      var filterObj = {
        type: FilterType.EXACT,
        callback: callback
      };

      var idx = filter.indexOf('*');
      if (idx === filter.length - 1) {
        if (idx === 0) {
          filterObj.type = FilterType.ANY;
        } else {
          filterObj.type = FilterType.START;
          key = filter.substr(0, filter.length - 1);
        }
      }

      this._filters[key] = filterObj;
    }

    //filter changes
  }, {
    key: '_onFilter',
    value: function _onFilter(event) {
      var _this = this;

      Object.keys(_this._filters).forEach(function (key) {
        var filter = _this._filters[key];
        if (filter.type === FilterType.ANY) {
          //match anything
          filter.callback(event);
        } else if (filter.type === FilterType.START) {
          //if starts with filter...
          if (event.field.indexOf(key) === 0) {
            filter.callback(event);
          }
        } else if (filter.type === FilterType.EXACT) {
          //exact match
          if (event.field === key) {
            filter.callback(event);
          }
        }
      });
    }

    //receive and process change messages
  }, {
    key: '_changeObject',
    value: function _changeObject(msg) {
      var _this = this;

      //TODO: update version ?
      //how to handle an incorrect version ? Example: receive a version 3 when the observer is in version 1, where is the version 2 ?
      //will we need to confirm the reception ?
      if (_this._version + 1 === msg.body.version) {
        _this._version++;
        var path = msg.body.attrib;
        var value = msg.body.value;
        var findResult = _this._syncObj.findBefore(path);

        if (msg.type === _SyncObject.ChangeType.UPDATE) {
          findResult.obj[findResult.last] = value;
        } else {
          if (msg.type === _SyncObject.ChangeType.ADD) {
            if (msg.body.oType === _SyncObject.ObjectType.OBJECT) {
              findResult.obj[findResult.last] = value;
            } else {
              //ARRAY
              var arr = findResult.obj;
              var index = findResult.last;
              Array.prototype.splice.apply(arr, [index, 0].concat(value));
            }
          } else {
            //REMOVE
            if (msg.body.oType === _SyncObject.ObjectType.OBJECT) {
              delete findResult.obj[findResult.last];
            } else {
              //ARRAY
              var arr = findResult.obj;
              var index = findResult.last;
              arr.splice(index, value);
            }
          }
        }
      } else {
        //TODO: how to handle unsynchronized versions?
        console.log('unsynchronized versions');
      }
    }
  }, {
    key: 'version',
    get: function get() {
      return this._version;
    }
  }, {
    key: 'owner',
    get: function get() {
      return this._owner;
    }
  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }
  }, {
    key: 'schema',
    get: function get() {
      return this._schema;
    }
  }, {
    key: 'status',
    get: function get() {
      return this._status;
    }
  }, {
    key: 'data',
    get: function get() {
      return this._syncObj.data;
    }
  }]);

  return DataObjectObserver;
})();

exports['default'] = DataObjectObserver;
module.exports = exports['default'];

},{"./SyncObject":21}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _SyncObject = require('./SyncObject');

var _SyncObject2 = _interopRequireDefault(_SyncObject);

var _utilsUtilsJs = require('../utils/utils.js');

var DataObjectReporter /* implements SyncStatus */ = (function () {
  /* private
  _version: number
    _url: ObjectURL
  _schema: Schema
  _bus: MiniBus
  _status: on | paused
    _syncObj: SyncData
  _subscriptions: <hypertyUrl: { status: string } }>
    ----event handlers----
  _onSubscriptionHandler: (event) => void
  */

  function DataObjectReporter(owner, url, schema, bus, initialStatus, initialData) {
    _classCallCheck(this, DataObjectReporter);

    var _this = this;

    _this._version = 0;
    _this._owner = owner;
    _this._url = url;
    _this._schema = schema;
    _this._bus = bus;

    _this._subscriptions = {};

    _this._status = initialStatus;
    _this._syncObj = new _SyncObject2['default'](initialData);
    _this._syncObj.observe(function (event) {
      _this._onChange(event);
    });
  }

  _createClass(DataObjectReporter, [{
    key: 'pause',
    value: function pause() {
      //TODO: pause change reports?
    }
  }, {
    key: 'resume',
    value: function resume() {
      //TODO: resume change reports?
    }
  }, {
    key: 'stop',
    value: function stop() {
      //TODO: destroy reporter?
    }
  }, {
    key: 'onSubscription',
    value: function onSubscription(callback) {
      this._onSubscriptionHandler = callback;
    }
  }, {
    key: '_onForward',
    value: function _onForward(msg) {
      var _this = this;

      console.log('DataObjectReporter-RCV: ', msg);
      switch (msg.body.type) {
        case 'subscribe':
          _this._onSubscribe(msg);break;
        case 'unsubscribe':
          _this._onUnSubscribe(msg);break;
      }
    }
  }, {
    key: '_onSubscribe',
    value: function _onSubscribe(msg) {
      var _this = this;
      var hypertyUrl = msg.body.from;

      var event = {
        type: msg.body.type,
        url: hypertyUrl,

        accept: function accept() {
          //create new subscription
          _this._subscriptions[hypertyUrl] = { status: 'on' };

          //send ok response message
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 200, schema: _this._schema, version: _this._version, value: (0, _utilsUtilsJs.deepClone)(_this.data) }
          });
        },

        reject: function reject(reason) {
          //send reject response message
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 403, desc: reason }
          });
        }
      };

      if (_this._onSubscriptionHandler) {
        _this._onSubscriptionHandler(event);
      }
    }
  }, {
    key: '_onUnSubscribe',
    value: function _onUnSubscribe(msg) {
      var _this = this;
      var hypertyUrl = msg.body.from;

      var sub = _this._subscriptions[hypertyUrl];
      delete _this._subscriptions[hypertyUrl];

      var event = {
        type: msg.body.type,
        url: hypertyUrl,
        object: sub
      };

      if (_this._onSubscriptionHandler) {
        _this._onSubscriptionHandler(event);
      }
    }

    //send delta messages to subscriptions
  }, {
    key: '_onChange',
    value: function _onChange(event) {
      var _this = this;

      _this._version++;

      if (_this._status === 'on') {
        _this._bus.postMessage({
          type: event.cType, from: _this._owner, to: _this._url,
          body: { version: _this._version, oType: event.oType, attrib: event.field, value: event.data }
        });
      }
    }
  }, {
    key: 'version',
    get: function get() {
      return this._version;
    }
  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }
  }, {
    key: 'schema',
    get: function get() {
      return this._schema;
    }
  }, {
    key: 'status',
    get: function get() {
      return this._status;
    }
  }, {
    key: 'data',
    get: function get() {
      return this._syncObj.data;
    }
  }, {
    key: 'subscriptions',
    get: function get() {
      return this._subscriptions;
    }
  }]);

  return DataObjectReporter;
})();

exports['default'] = DataObjectReporter;
module.exports = exports['default'];

},{"../utils/utils.js":24,"./SyncObject":21}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilsUtilsJs = require('../utils/utils.js');

var SyncObject = (function () {
  /* private
    _data: any;
    _observers: ((event: ChangeEvent) => void)[]
  */

  function SyncObject(initialData) {
    _classCallCheck(this, SyncObject);

    var _this = this;

    _this._observers = [];
    _this._filters = {};

    if (initialData) {
      _this._data = initialData;
    } else {
      _this._data = {};
    }

    _this._internalObserve(new Path(), _this._data);
  }

  //dynamic path for Array index...

  _createClass(SyncObject, [{
    key: 'observe',
    value: function observe(callback) {
      this._observers.push(callback);
    }
  }, {
    key: 'find',
    value: function find(path) {
      var list = path.split('.');

      return this._findWithSplit(list);
    }
  }, {
    key: 'findBefore',
    value: function findBefore(path) {
      var result = {};
      var list = path.split('.');
      result.last = list.pop();
      result.obj = this._findWithSplit(list);

      return result;
    }
  }, {
    key: '_findWithSplit',
    value: function _findWithSplit(list) {
      var obj = this._data;
      list.forEach(function (value) {
        obj = obj[value];
      });

      return obj;
    }
  }, {
    key: '_fireEvent',
    value: function _fireEvent(event) {
      this._observers.forEach(function (callback) {
        callback(event);
      });
    }
  }, {
    key: '_isObservable',
    value: function _isObservable(obj) {
      if (obj.constructor === Object || obj.constructor === Array) {
        return true;
      }

      return false;
    }
  }, {
    key: '_internalObserve',
    value: function _internalObserve(path, obj) {
      var _this = this;

      if (_this._isObservable(obj)) {
        var handler = function handler(changes) {
          _this._onChanges(path, changes);
        };

        if (obj.constructor === Object) {
          Object.observe(obj, handler);
          for (var prop in obj) {
            if (_this._isObservable(obj[prop])) {
              _this._internalObserve(path['new'](prop), obj[prop]);
            }
          }
        } else if (obj.constructor === Array) {
          Array.observe(obj, handler);
          for (var prop in obj) {
            if (_this._isObservable(obj[prop])) {
              var np = path['new'](new ArrayIndex(obj[prop], prop));
              _this._internalObserve(np, obj[prop]);
            }
          }
        }
      }
    }
  }, {
    key: '_onChanges',
    value: function _onChanges(path, changes) {
      var _this2 = this;

      for (var i in changes) {
        var obj = changes[i].object;
        var objType = undefined;

        if (obj.constructor == Object) {
          objType = ObjectType.OBJECT;
        }

        if (obj.constructor == Array) {
          objType = ObjectType.ARRAY;
        }

        if (changes[i].type === 'splice') {
          (function () {
            var idx = changes[i].index;
            var field = path['new']('' + idx);
            var fieldString = field.toString();

            var removeSize = changes[i].removed.length;
            if (removeSize !== 0) {
              var removeValues = changes[i].removed;
              removeValues.forEach(function (value, index) {
                if (_this2._isObservable(value)) {
                  path.removeIndex(idx + index);
                }
              });

              _this2._fireEvent({
                cType: ChangeType.REMOVE,
                oType: objType,
                field: fieldString,
                data: removeSize
              });
            }

            var addSize = changes[i].addedCount;
            if (addSize !== 0) {
              var addValues = obj.slice(idx, idx + addSize);
              addValues.forEach(function (value, index) {
                if (_this2._isObservable(value)) {
                  var np = path['new'](new ArrayIndex(value, idx + index));
                  _this2._internalObserve(np, value);
                }
              });

              _this2._fireEvent({
                cType: ChangeType.ADD,
                oType: objType,
                field: fieldString,
                data: (0, _utilsUtilsJs.deepClone)(addValues)
              });
            }

            //re-define paths...
            if (idx != obj.length - 1) {
              path.reIndexFrom(obj);
            }
          })();
        } else {
          var field = path['new'](changes[i].name);
          var fieldString = field.toString();

          if (fieldString.indexOf('Symbol') !== -1) {
            //hack for PhantomJS2
            //console.log('SYMBOL: ', changes[i]);
            continue;
          }

          //let oldValue = changes[i].oldValue;
          var newValue = obj[changes[i].name];
          if (changes[i].type === 'update') {
            this._fireEvent({
              cType: ChangeType.UPDATE,
              oType: objType,
              field: fieldString,
              data: (0, _utilsUtilsJs.deepClone)(newValue)
            });
          }

          if (changes[i].type === 'add') {
            this._internalObserve(field, newValue);
            this._fireEvent({
              cType: ChangeType.ADD,
              oType: objType,
              field: fieldString,
              data: (0, _utilsUtilsJs.deepClone)(newValue)
            });
          }

          if (changes[i].type === 'delete') {
            this._fireEvent({
              cType: ChangeType.REMOVE,
              oType: objType,
              field: fieldString
            });
          }
        }
      }
    }
  }, {
    key: 'data',
    get: function get() {
      return this._data;
    }
  }]);

  return SyncObject;
})();

var Path = (function () {
  function Path() {
    _classCallCheck(this, Path);

    this._path = [];
    this._observables = {}; //<index:ArrayIndex>
  }

  _createClass(Path, [{
    key: 'removeIndex',
    value: function removeIndex(idx) {
      //console.log('REMOVE-PATH ' + idx);
      delete this._observables[idx];
    }
  }, {
    key: 'reIndexFrom',
    value: function reIndexFrom(array) {
      var _this3 = this;

      Object.keys(this._observables).forEach(function (key) {
        var arrayIndex = _this3._observables[key];
        var idx = array.indexOf(arrayIndex.obj);
        if (arrayIndex.idx != idx) {
          //console.log('RE-INDEX: ' + key + '->' + idx);
          arrayIndex.idx = idx;
          delete _this3._observables[key];
          _this3._observables[idx] = arrayIndex;
        }
      });
    }
  }, {
    key: 'new',
    value: function _new(idx) {
      if (idx.constructor == ArrayIndex) {
        //console.log('PATH-OBSERV: ', idx);
        this._observables[idx.idx] = idx;
      }

      var nPath = this.clone();
      nPath._path.push(idx);

      return nPath;
    }
  }, {
    key: 'clone',
    value: function clone() {
      var nPath = new Path();
      this._path.forEach(function (value) {
        nPath._path.push(value);
      });

      return nPath;
    }
  }, {
    key: 'toString',
    value: function toString() {
      //TODO: optimize!!
      var str = '';
      this._path.forEach(function (value, index) {
        if (index === 0) {
          str = value.toString();
        } else {
          str += '.' + value.toString();
        }
      });

      return str;
    }
  }]);

  return Path;
})();

var ArrayIndex = (function () {
  function ArrayIndex(obj, idx) {
    _classCallCheck(this, ArrayIndex);

    this.obj = obj;
    this.idx = idx;
  }

  _createClass(ArrayIndex, [{
    key: 'toString',
    value: function toString() {
      return this.idx.toString();
    }
  }]);

  return ArrayIndex;
})();

var ChangeType = { UPDATE: 'update', ADD: 'add', REMOVE: 'remove' };
exports.ChangeType = ChangeType;
var ObjectType = { OBJECT: 'object', ARRAY: 'array' };
exports.ObjectType = ObjectType;
exports['default'] = SyncObject;

},{"../utils/utils.js":24}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _DataObjectReporter = require('./DataObjectReporter');

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = require('./DataObjectObserver');

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

/**
 * @author micaelpedrosa@gmail.com
 * Client API Syncronization system.
 */

var Syncher = (function () {
  /* private
  _owner: URL
  _bus: MiniBus
    _subURL: URL
    _reporters: <url: DataObjectReporter>
  _observers: <url: DataObjectObserver>
    ----event handlers----
  _onResponseHandler: (event) => void
  _onNotificationHandler: (event) => void
  */

  function Syncher(owner, bus, config) {
    _classCallCheck(this, Syncher);

    var _this = this;

    _this._owner = owner;
    _this._bus = bus;

    _this._subURL = config.runtimeURL + '/sm';

    _this._reporters = {};
    _this._observers = {};

    bus.addListener(owner, function (msg) {
      console.log('Syncher-RCV: ', msg);
      switch (msg.type) {
        case 'response':
          _this._onResponse(msg);break;
        case 'forward':
          _this._onForward(msg);break;
        case 'create':
          _this._onRemoteCreate(msg);break;
      }
    });
  }

  _createClass(Syncher, [{
    key: 'create',

    /**
     * Request a DataObjectReporter creation. The URL will be be requested by the allocation mechanism.
     * @param  {Schema} schema Schema of the object
     * @param  {HypertyURL[]} List of hyperties to send the create
     * @param  {JSON} initialData Object initial data
     * @return {Promise<DataObjectReporter>} Return Promise to a new Reporter. The reporter can be accepted or rejected by the PEP
     */
    value: function create(schema, observers, initialData) {
      var _this = this;

      //TODO: what to do with schema?

      var requestMsg = {
        type: 'create', from: _this._owner, to: _this._subURL,
        body: { schema: schema, value: initialData, authorise: observers }
      };

      return new Promise(function (resolve, reject) {
        //request create to the Allocation system? Can be rejected by the PolicyEngine.
        _this._bus.postMessage(requestMsg, function (reply) {
          console.log('create-response: ', reply);
          if (reply.body.code === 200) {
            var objUrl = reply.body.resource;

            //reporter creation accepted
            var newObj = new _DataObjectReporter2['default'](_this._owner, objUrl, schema, _this._bus, 'on', initialData);
            _this._reporters[objUrl] = newObj;
            resolve(newObj);
          } else {
            //reporter creation rejected
            reject(reply.body.desc);
          }
        });
      });
    }

    /**
     * Request a subscription to an existent object.
     * @param  {ObjectURL} objURL Address of the existent object.
     * @return {Promise<DataObjectObserver>} Return Promise to a new Observer.
     */
  }, {
    key: 'subscribe',
    value: function subscribe(objURL) {
      var _this = this;

      //TODO: validate if subscription already exists ?
      var subscribeMsg = {
        type: 'subscribe', from: _this._owner, to: _this._subURL,
        body: { resource: objURL }
      };

      return new Promise(function (resolve, reject) {
        //request subscription
        _this._bus.postMessage(subscribeMsg, function (reply) {
          console.log('subscribe-response: ', reply);
          if (reply.body.code === 200) {
            //subscription accepted
            var newObj = _this._addObserver(objURL, reply.body.schema, reply.body.value);
            resolve(newObj);
          } else {
            //subscription rejected
            reject(reply.body.desc);
          }
        });
      });
    }
  }, {
    key: 'onResponse',
    value: function onResponse(callback) {
      this._onResponseHandler = callback;
    }
  }, {
    key: 'onNotification',
    value: function onNotification(callback) {
      this._onNotificationHandler = callback;
    }
  }, {
    key: '_onResponse',
    value: function _onResponse(msg) {
      var _this = this;

      //TODO: process notification reponses!
      console.log('onResponse:', msg);
    }
  }, {
    key: '_onForward',
    value: function _onForward(msg) {
      var _this = this;

      var reporter = _this._reporters[msg.body.to];
      reporter._onForward(msg);
    }
  }, {
    key: '_onRemoteCreate',
    value: function _onRemoteCreate(msg) {
      var _this = this;

      var event = {
        type: msg.type,
        from: msg.from,
        url: msg.body.resource,
        schema: msg.body.schema,
        value: msg.body.value,

        ack: function ack(type) {
          var lType = 200;
          if (type) {
            lType = type;
          }

          //send ack response message
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: lType }
          });
        }
      };

      if (_this._onNotificationHandler) {
        _this._onNotificationHandler(event);
      }
    }

    /*_onRemoteChange(msg) {
      let _this = this;
    
      let observer = _this._observers[msg.from];
      observer._changeObject(msg);
    }*/

  }, {
    key: '_addObserver',
    value: function _addObserver(objURL, schemaURL, initialData) {
      var _this = this;

      var newObj = new _DataObjectObserver2['default'](_this._owner, objURL, schemaURL, 'on', initialData);
      _this._observers[objURL] = newObj;

      //add listener for objURL
      _this._bus.addListener(objURL, function (msg) {
        console.log('Syncher-' + objURL + '-RCV: ', msg);
        newObj._changeObject(msg);
      });

      return newObj;
    }
  }, {
    key: 'owner',
    get: function get() {
      return this._owner;
    }
  }, {
    key: 'reporters',
    get: function get() {
      return this._reporters;
    }
  }, {
    key: 'observers',
    get: function get() {
      return this._observers;
    }
  }]);

  return Syncher;
})();

exports['default'] = Syncher;
module.exports = exports['default'];

},{"./DataObjectObserver":19,"./DataObjectReporter":20}],23:[function(require,module,exports){
/**
 * EventEmitter
 * All classes which extends this, can have addEventListener and trigger events;
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = (function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);
  }

  _createClass(EventEmitter, [{
    key: "addEventListener",

    /**
     * addEventListener listen for an eventType
     * @param  {string}         eventType - listening for this type of event
     * @param  {Function}       cb        - callback function will be executed when the event it is invoked
     */
    value: function addEventListener(eventType, cb) {
      var _this = this;
      _this[eventType] = cb;
    }

    /**
     * Invoke the eventType
     * @param  {string} eventType - event will be invoked
     * @param  {object} params - parameters will be passed to the addEventListener
     */
  }, {
    key: "trigger",
    value: function trigger(eventType, params) {
      var _this = this;

      if (_this[eventType]) {
        _this[eventType](params);
      }
    }
  }]);

  return EventEmitter;
})();

exports["default"] = EventEmitter;
module.exports = exports["default"];

},{}],24:[function(require,module,exports){
/**
 * Support module with some functions will be useful
 * @module utils
 */

/**
 * @typedef divideURL
 * @type Object
 * @property {string} type The type of URL
 * @property {string} domain The domain of URL
 * @property {string} identity The identity of URL
 */

/**
 * Divide an url in type, domain and identity
 * @param  {URL.URL} url - url address
 * @return {divideURL} the result of divideURL
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.divideURL = divideURL;
exports.deepClone = deepClone;

function divideURL(url) {

  // let re = /([a-zA-Z-]*)?:\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/gi;
  var re = /([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;
  var subst = '$1,$2,$3';
  var parts = url.replace(re, subst).split(',');
  var result = {
    type: parts[0],
    domain: parts[1],
    identity: parts[2]
  };

  return result;
}

/**
 * Make a COPY of the original data
 * @param  {Object}  obj - object to be cloned
 * @return {Object}
 */

function deepClone(obj) {
  //TODO: simple but inefficient JSON deep clone...
  return JSON.parse(JSON.stringify(obj));
}

},{}]},{},[3])(3)
});