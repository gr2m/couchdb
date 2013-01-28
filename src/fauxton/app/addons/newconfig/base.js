define([
  "app",
  "api",
  "addons/newconfig/routes"
],

function(app, FauxtonAPI, NewConfigRoutes) {
  var NewConfig = new FauxtonAPI.addon();
  console.log('hello from NewConfig');

  NewConfig.initialize = function() {
    FauxtonAPI.addHeaderLink({title: "new Config", href: "#_newconfig"});
  };

  NewConfig.Routes = NewConfigRoutes;
  console.log('NewConfig', NewConfig);
  return NewConfig;
});