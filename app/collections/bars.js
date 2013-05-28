define([
	'backbone',
	'models/bar'
	], function(Backbone, Bar){
	
	"use strict";
	
	var Bars = Backbone.Collection.extend({
	  model: Bar
		
		// server connection
		//url : '/bars',
	});
	
	
	return Bars;
});
