define([
	'backbone',
	'router'
	], function(Backbone, Router){
	
	"use strict";
	
	var App = {
		init : function () {
			App.router = new Router;
			Backbone.history.start();
		}
	};
	
	return App;
});
