// the App Objects starts the Router
define([
	'backbone',
	'router'
	], function(Backbone, Router){
	
	"use strict";
	
	var App = {
		init : function () {
			App.router = new Router;
			Backbone.history.start();
			
			// For HTML5 history without "#"
			//Backbone.history.start({ pushState: true, root: '/' });
			
			// Use Browser Storage (plugin!) instead of REST Server
			//Backbone.sync = Backbone.localStorage;
		}
	};
	
	return App;
});
