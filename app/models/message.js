define([
	'backbone'
	], function(Backbone){
	
	"use strict";
	
	var Message = Backbone.Model.extend({
	  defaults: {
	    text: "Hello World"
	  }
		
		initialize: function () {
			
		}
		
		validate: function (attributes) {
			if(attributes.text == ""){
				// returning a string will result in an error
				return "There must be a text for the message";
			}
		}
		
		
	});
	
	return Message;
});
