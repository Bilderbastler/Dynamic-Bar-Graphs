define([
	'views/helloWorld'
	], function(View){
	
	"use strict";
	
	describe("a View", function() {
  
	  beforeEach(function() {
	    this.view = new View;
	  });
  
	  describe("Instantiation", function() {
    
	    it("should create a a view", function() {
	      this.view.render();
				expect(this.view.el.innerHTML).toContain('<label>');
	    });
    
	  });
  
	});
	
});

