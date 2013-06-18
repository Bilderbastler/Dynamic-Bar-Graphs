// The Router will render a view that coresponds to a route
define([
	'backbone'
	,	'views/BarEditor'
],

function(Backbone, BarEditorView) {

  var Router = Backbone.Router.extend({
    routes: {
			/*
      'helloWorld': 'helloAction',
			'post/:id' : 'singlePostAction',
			'showURL' : 'splatAction',
			*/
			
			'' : 'showGraphEditor',
			
			'*actions' : 'error'
    },
		/*
    helloAction: function() {
			helloWorldView = new HelloWorldView;
			helloWorldView.render();
    },
		*/
		
		showGraphEditor : function () {
			var view = new BarEditorView();
			view.render();
		},
		
		
		/*
		singlePostAction : function (id) {
			// takes an argument from the url "#post/4"
		},
		
		splatAction : function (args) {
			// will take all elements after the matching url as a single argument
			// e.g. "#showURL/foo/bar" => args = "foo/bar"
		},
		*/
		
		
		error : function () {
			console.log('There is nothing here to see. Sorry!');
		}
	
  });
	
	

  return Router;

});
