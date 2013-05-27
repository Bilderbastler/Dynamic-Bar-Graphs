define([
	'collections/messsages'
	], function(Messages){
	
	"use strict";
	
	describe("when instantiated with model literal", function() {
	  beforeEach(function() {
	    this.messageStub = sinon.stub(window, "Message");
	    this.model = new Backbone.Model({
	      id: 5, 
	      text: "Foo"
	    });
	    this.messageStub.returns(this.model);
	    this.messaages = new Messages();
	    this.messaages.model = this.model; // reset model relationship to use stub
	    this.messaages.add({
	      id: 5, 
	      text: "Foo"
	    });
	  });
    
	  afterEach(function() {
	    this.todoStub.restore();
	  });

	  it("should add a model", function() {
	    expect(this.messaages.length).toEqual(1);
	  });
    
	  it("should find a model by id", function() {
	    expect(this.messaages.get(5).get("id")).toEqual(5);
	  });
	});
  
	});
});
