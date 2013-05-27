// load configuration for requirejs
require(['config'], function(){
	
	// load the app
	require([
		'app'
		], function(App){
	
		'use strict';
	
		App.init();
	
	});
});


