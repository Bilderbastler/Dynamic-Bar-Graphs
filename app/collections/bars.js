define([
	'backbone',
	'models/bar'
	], function(Backbone, Bar){
	
	"use strict";
	
	var Bars = Backbone.Collection.extend({
	  model: Bar,
		
		 //localStorage: new Backbone.LocalStorage("backbone.bars")
		
		// server connection
		//url : '/bars',
	});
	
	
	return Bars;
});
