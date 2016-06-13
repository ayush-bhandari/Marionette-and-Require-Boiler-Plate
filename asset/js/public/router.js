define(['backbone','marionette'],
	function(Backbone,Marionette){

return Backbone.Marionette.AppRouter.extend({
    appRoutes: {
    	'': 'no',
    	'page1':'viewPage1'
    }
  });
});
