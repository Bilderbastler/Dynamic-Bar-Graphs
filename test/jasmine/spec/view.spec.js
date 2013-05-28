define([
	'views/helloWorld'
	], function(View){
	
	"use strict";
	
	describe("HelloWorldView", function() {
  
	  beforeEach(function() {
	    this.view = new View();
	  });
  
	  describe("Instantiation", function() {
    
	    it("should create a ...", function() {
	      //expect(this.view.el.nodeName).toEqual("UL");
	    });
    
	  });
  
	});
	
	describe('Error Throwing', function(){
		it("should throw an error", function(){
			expect(function () {
					throw new Error("Unexpected error!")
		    }).toThrow(new Error("Unexpected error!"));
			})
			
		});
	});

