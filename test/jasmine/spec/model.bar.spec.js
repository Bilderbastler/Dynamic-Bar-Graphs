define([
	'models/bar'
	], function(Bar){
	
	"use strict";
	
	describe("a model for a Bar", function(){
		
		beforeEach(function(){
			this.sut = new Bar;
		});
		
		it("takes a number for the attribute height", function(){
			this.sut.set('height', 5);
			expect(this.sut.get('height')).toBe(5);
		});
		
		it("does not accept non numberic values", function(){
			this.sut.set('height', "foo");
			expect(this.sut.isValid()).toBeFalsy();
		});
		
		it("accepts a numeric value", function(){
			this.sut.set('height', 3.0);
			expect(this.sut.isValid()).toBeTruthy();
			
		});
		
		it("is in a valid state after creation", function(){
			expect(this.sut.isValid()).toBeTruthy();
		});
		
		it("can't have a negative height", function(){
			this.sut.set('height', -1);
			expect(this.sut.isValid()).toBeFalsy();
		});
		
		it("can have a height of 0", function(){
			this.sut.set('height', 0);
			expect(this.sut.isValid()).toBeTruthy();
		});
		
	});
});
