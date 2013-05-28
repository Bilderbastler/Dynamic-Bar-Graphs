define([
	'router'
	], function(Router){
	
	"use strict";
	
	describe("a router", function() {
	  beforeEach(function() {
	    this.router = new Router;
	    this.routeSpy = jasmine.createSpy('Route Handler Spy');
			
			try {
          Backbone.history.start({silent: true, pushState: true});
      } catch(e) {}
      this.router.navigate('/DynamicBarGraph/test/jasmine/');
	    
	    this.router.navigate("elsewhere");
	  });
		
		afterEach(function(){
		  this.router.navigate('/DynamicBarGraph/test/jasmine/');
		  Backbone.history.stop();
		});
  
	  it("fires the index route with a blank hash", function() {
	    this.router.bind("route:default", this.routeSpy);
	    this.router.navigate("", true);
	    expect(this.routeSpy).toHaveBeenCalled();
	    expect(this.routeSpy).toHaveBeenCalledWith(null);
	  });
	});
	
});
