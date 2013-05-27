define([
	'models/message'
	], function(Message){
	
	"use strict";
	
	describe('Hello World model', function() {

	  describe('when instantiated', function() {
    
	    it('should exhibit attributes', function() {
	      var message = new Message({
	        text: 'Rake leaves'
	      });
	      expect(message.get('text'))
	        .toEqual('Rake leaves');
	    });
    
	  });
  
	});
});
