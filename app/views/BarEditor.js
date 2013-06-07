define([
	'jquery', 
	'underscore', 
	'backbone',
	'handlebars',
	'text!templates/BarEditor.html',
	'collections/bars'
	], function($, _, Backbone, Handlebars, viewTemplate, Bars){
	
	"use strict";
	
	var BarEditor = Backbone.View.extend({
		
		// specifiy html element for this view, element can be accessed via this.el
	  el: '#main',
		//tagName: 'div',
		//className: 'box',
		//attributes: { "data-attr": "some Data" },

	  
	  events: {
	     'click #AddBarButton': 'doAdd'
	  },
	  
	  initialize: function(){
			this.template = Handlebars.compile(viewTemplate);
			//automaticly show this view
	    //this.render();
			
			this.collection = new Bars();
				// load data from server
				//this.collection.fetch();
			
	  },
	  
	  render: function(){
			var source = this.template({});
	    this.$el.append(source);
	  },
		
		// custom event handler methods:
		doAdd : function () {
			
		}
	});
	
	return BarEditor;
});
