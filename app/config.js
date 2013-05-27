// setup up all moodules for require js
// will go to "main" afterwards

define([], function(){
		
	"use strict";

	requirejs.config({
	
		paths : {
			'backbone' : '../libs/backbone/backbone',
			'jquery': '../libs/jquery/jquery',
			'underscore' : '../libs/underscore/underscore',
			'text' : '../libs/backbone/text',
			'bootstrap' : '../libs/bootstrap/bootstrap'
		},
	
	  shim: {
	      'backbone': {
	          'deps': [
	              'underscore',
	              'jquery'
	          ],
	          'exports': 'Backbone'
	      },
	      'underscore': {
	          'exports': '_'
	      },
				'jquery' : {
					'exports' : '$'
				},
				'bootstrap' : ['jquery'],
				'app' : ['backbone']
	  }
	
	});
	
});
