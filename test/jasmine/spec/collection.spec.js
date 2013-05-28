define([
	'collections/messages'
	], function(Messages){
	
	"use strict";
	
	describe("a collection instantiated with model literal", function() {
		
	  beforeEach(function() {
	    this.model =  Backbone.Model.extend();
	    this.messaages = new Messages;
	    this.messaages.model = this.model; // reset model relationship to use stub
	    this.messaages.add([{
	      id: 5, 
	      text: "Foo"
	    }]);
	  });
    

	  it("should add a model", function() {
	    expect(this.messaages.length).toEqual(1);
	  });
    
	  it("should find a model by id", function() {
	    expect(this.messaages.get(5).get("id")).toEqual(5);
	  });
	});
  
});
