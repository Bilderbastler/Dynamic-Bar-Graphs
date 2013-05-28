define([
	'jquery', 
	'underscore', 
	'backbone',
	'text!templates/helloWorld.html',
	'collections/messages'
	], function($, _, Backbone, viewTemplate, Messages){
	
	"use strict";
	
	var HelloWorld = Backbone.View.extend({
		
		// specifiy html element for this view, element can be accessed via this.el
	  id: 'main',
		//tagName: 'div',
		//className: 'box',
		//attributes: { "data-attr": "some Data" },

	  
	  events: {
	     'click #HelloButton': 'doGreet'
	  },
	  
	  initialize: function(){
			//automaticly show this view
	    //this.render();
			
			this.collection = new Messages([
				{text : '...'},
				{text : 'Hello World'}
				]);
				// load data from server
				//this.collection.fetch();
			
	  },
	  
	  render: function(){
			var message = this.collection.first();
			var compiledTemplate = _.template(viewTemplate, message.attributes);
	    $(this.el).append(compiledTemplate);
	  },
		
		// custom event handler methods:
		doGreet : function () {
			var message = this.collection.last();
			$('#message').text(message.get('text'));
		}
	});
	
	return HelloWorld;
});
