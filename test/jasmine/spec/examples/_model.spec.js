define([
	'models/message'
	], function(Message){
	
	"use strict";
	
	describe('a model', function() {

	  describe('when instantiated', function() {
    
	    it('should exhibit attributes', function() {
	      var message = new Message({
	        text: 'Rake leaves'
	      });
	      expect(message.get('text'))
	        .toEqual('Rake leaves');
	    });
			
			it("should not save when title is empty", function(){
				var errorHandler = jasmine.createSpy('error handler');
				var message = new Message;
				message.on('invalid', errorHandler);
				message.save({"text": ""});
				
				expect(errorHandler).toHaveBeenCalled();
				
			});
    
	  });
  
	});
});
