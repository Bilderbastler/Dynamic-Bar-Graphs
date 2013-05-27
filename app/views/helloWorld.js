define([
	'jquery', 
	'underscore', 
	'backbone',
	'text!templates/helloWorld.html'
	], function($, _, Backbone){
	
	"use strict";
	
	var HelloWorld = Backbone.View.extend({
	  // attaches -: line 4: this.el: command not found to an existing element.
	  el: '#main',
	  
	  events: {
	     'click button#HelloButton': 'doGreet'
	  },
	  
	  initialize: function(){
			//automaticly show this view
	    //this.render();
	  },
	  
	  render: function(){
	    $(this.el).append("<ul> <li>hello world</li> </ul>");
	  },
		
		// custom event handler methods:
		doGreet : function (args) {
			
		}
	});
	
	
	
	return HelloWorld;
});
