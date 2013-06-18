// The Router will render a view that coresponds to a route
define([
	'backbone'
	,	'views/BarEditor'
],

function(Backbone, BarEditorView) {

  var Router = Backbone.Router.extend({
		
    routes: {
			'' : 'showGraphEditor',
			'*actions' : 'error'
    },
		
		initialize: function () {
			this.editorView = new BarEditorView();
		},
		
		showGraphEditor : function () {
			this.editorView.render();
		},

		error : function () {
			console.log('There is nothing here to see. Sorry!');
		}
	
  });
	
  return Router;

});
