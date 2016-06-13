define(['jquery','backbone','marionette','underscore','public/views/page1'],
	function($,Backbone,Marionette,_,pageOneView){

		var mainApp = new Backbone.Marionette.Application();
		
		mainApp.addRegions({
			//add regions here

		 	mainRegion:'#main'
		 	
		});

		mainApp.addInitializer(function(){ 
			
	       mainApp.mainRegion.show(new pageOneView());
	       

           require(["public/router","public/controller"],
    			function (AppRouter,AppController) {
       
		          var appRouter = new AppRouter({
		                controller: new AppController()
		           });	
		      

       
    			});	
	        Backbone.history.start();
		});

return mainApp;
});

