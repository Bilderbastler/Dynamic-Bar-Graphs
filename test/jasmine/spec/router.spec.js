define([
	'router'
	], function(Router){
	
	"use strict";
	
	describe("AppRouter routes", function() {
	  beforeEach(function() {
	    this.router = new Router;
	    this.routeSpy = sinon.spy();
	    try {
	      Backbone.history.start({silent:true, pushState:true});
	    } catch(e) {}
	    this.router.navigate("elsewhere");
	  });
  
	  it("fires the index route with a blank hash", function() {
	    this.router.bind("route:index", this.routeSpy);
	    this.router.navigate("", true);
	    expect(this.routeSpy).toHaveBeenCalledOnce();
	    expect(this.routeSpy).toHaveBeenCalledWith();
	  });
	});
	
});
