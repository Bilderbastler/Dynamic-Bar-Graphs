define([
	'jquery', 
	'underscore', 
	'backbone',
	'text!templates/helloWorld.html'
	], function($, _, Backbone, viewTemplate){
	
	"use strict";
	
	var HelloWorld = Backbone.View.extend({
	  // attaches -: line 4: this.el: command not found to an existing element.
	  el: '#main',
	  
	  events: {
	     'click #HelloButton': 'doGreet'
	  },
	  
	  initialize: function(){
			//automaticly show this view
	    //this.render();
	  },
	  
	  render: function(){
			var compiledTemplate = _.template(viewTemplate, {message_text : '...'});
	    $(this.el).append(compiledTemplate);
	  },
		
		// custom event handler methods:
		doGreet : function () {
			$('#message').text('Hello World');
		}
	});
	
	return HelloWorld;
});
