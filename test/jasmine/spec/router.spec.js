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
  
	  it("fires the editor action with a blank hash", function() {
	    this.router.bind("route:showGraphEditor", this.routeSpy);
	    this.router.navigate("", true);
	    expect(this.routeSpy).toHaveBeenCalled();
	  });
		
	  it("fires the error route with a random hash", function() {
	    this.router.bind("route:error", this.routeSpy);
	    this.router.navigate("asdfjk", true);
	    expect(this.routeSpy).toHaveBeenCalled();
	    expect(this.routeSpy).toHaveBeenCalledWith("asdfjk");
	  });
		
		it("renders the editor", function(){
			var viewSpy = this.router.editorView;
			spyOn(viewSpy, "render");
			this.router.navigate("", true);
			expect(this.router.editorView).toBeDefined();
			expect(viewSpy.render).toHaveBeenCalled();
		});
	});
	
});
