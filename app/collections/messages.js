define([
	'backbone',
	'message'
	], function(Backbone, Message){
	
	"use strict";
	
	var Messages = Backbone.Collection.extend({
	  model: Message
	});
	
	
	return Messages;
});
