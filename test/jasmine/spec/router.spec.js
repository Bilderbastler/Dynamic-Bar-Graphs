define([
	'router'
	], function(Router){
	
	"use strict";
	
	xdescribe("AppRouter routes", function() {
	  beforeEach(function() {
	    this.router = new Router;
	    this.routeSpy = jasmine.createSpy('Route Handler Spy');
	    try {
	      Backbone.history.start({silent:true, pushState:true});
	    } catch(e) {}
	    this.router.navigate("elsewhere");
	  });
  
	  it("fires the index route with a blank hash", function() {
	    this.router.bind("route:index", this.routeSpy);
	    this.router.navigate("", true);
	    expect(this.routeSpy).toHaveBeenCalled();
	    expect(this.routeSpy).toHaveBeenCalledWith();
	  });
	});
	
});
