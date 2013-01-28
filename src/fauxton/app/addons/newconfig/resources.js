define([
  "app",
  "api",

  // ConfigReference
  "addons/newconfig/reference"
],

function (app, FauxtonAPI, ConfigReference) {
  var Resources = {};

  Resources.Hello = FauxtonAPI.View.extend({
    template: "addons/newconfig/templates/dashboard",

    reference: ConfigReference,

    serialize: function () { return this; }
  });

  console.log('ConfigReference', ConfigReference);

  return Resources;
});