define([
  "app",
  "api",
  "addons/newconfig/resources"
],

function(app, FauxtonAPI, Resources) {
  var newConfigRoute = function () {
    console.log('newConfigRoute callback yo');
    return {
      layout: "one_pane",
      crumbs: [
        {"name": "Hello","link": "_newconfig"}
      ],
      views: {
        "#dashboard-content": new Resources.Hello({})
      },
      apiUrl: 'newconfig'
    };
  };

  Routes = {
    "_newconfig": newConfigRoute
  };

  return Routes;
});