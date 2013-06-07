define([
	'jquery', 
	'underscore', 
	'backbone',
	'text!templates/BarEditor.html',
	'collections/bars'
	], function($, _, Backbone, viewTemplate, Bars){
	
	"use strict";
	
	var BarEditor = Backbone.View.extend({
		
		// specifiy html element for this view, element can be accessed via this.el
	  id: 'main',
		//tagName: 'div',
		//className: 'box',
		//attributes: { "data-attr": "some Data" },

	  
	  events: {
	     'click #AddBarButton': 'doAdd'
	  },
	  
	  initialize: function(){
			//automaticly show this view
	    //this.render();
			
			this.collection = new Bars();
				// load data from server
				//this.collection.fetch();
			
	  },
	  
	  render: function(){
			var message = this.collection.first();
			var compiledTemplate = _.template(viewTemplate, message.attributes);
	    $(this.el).append(compiledTemplate);
	  },
		
		// custom event handler methods:
		doAdd : function () {
			var message = this.collection.last();
			$('#message').text(message.get('text'));
		}
	});
	
	return BarEditor;
});
