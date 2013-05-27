requirejs.config({
	deps: ['app'],
	
  packages: [
      {
          name: "Backbone",
          location: "../libs/backbone",
          main: "backbone.js"
      },
      {
          name: "jQuery",
          location: "../libs/jquery",
          main: "jquery.js"
      },
      {
          name: "Underscore",
          location: "../libs/underscore",
          main: "underscore.js"
      },
      {
          name: "Bootstrap",
          location: "../libs/bootstrap",
          main: "bootstrap.js"
      }
  ],
  shim: {
      "Backbone": {
          "deps": [
              "Underscore",
              "jQuery"
          ],
          "exports": "Backbone"
      },
      "Underscore": {
          "exports": "_"
      },
			"jQuery" : {
				"exports" : "$"
			},
			"Boostrap" : ['jQuery']
  }
});

require([
	'app', 
	'Bootstrap
	], function(App){
	
	"use strict";
	
});

