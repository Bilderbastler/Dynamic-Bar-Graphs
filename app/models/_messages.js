define([
	'backbone'
	], function(Backbone){
	
	"use strict";
	
	var Message = Backbone.Model.extend({
	  defaults: {
	    text: "Hello World"
	  },
		
		initialize : function () {
			// example of event listening
			this.bind('change:text', function(model, newValue) {
				console.log('this model has changed');
			});
			
			this.bind('invalid', function(model, error){
				console.log('validation failed');
			});
			
		},
		
		validate: function (attributes) {
			if(attributes.text == ""){
				// returning a string will result in an error
				return "There must be a text for the message";
			}
		}
		
		
	});
	
	return Message;
});
