define([
	'backbone'
	], function(Backbone){
	
	"use strict";
	
	var Bar = Backbone.Model.extend({
	  defaults: {
	    height : 1,
			name :  "new",
			order : 0 // order in a graph starting from 0	
	  },
		
		initialize : function () {
			// example of event listening
			this.bind('change:text', function(model, newValue) {
				console.log('this model has changed');
			});
			
			this.bind('invalid', function(model, error){
				console.log('validation failed: ' + error);
			});
			
		},
		
		validate: function (attributes) {
			if((typeof attributes.height) !== "number"){
				// returning a string will result in an error
				return "Height must be a number but is " + typeof attributes.height;
			}
			if (attributes.height < 0) {
				return "Height must be positiv";
			}
		}
		
		
	});
	
	return Bar
	;
});
