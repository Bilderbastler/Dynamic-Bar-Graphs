define([
	'backbone',
	'models/message'
	], function(Backbone, Message){
	
	"use strict";
	
	var Messages = Backbone.Collection.extend({
	  model: Message
		
		// server connection
		//url : '/messages',
	});
	
	
	return Messages;
});
