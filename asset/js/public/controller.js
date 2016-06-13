define(['jquery','backbone','marionette','underscore','baseapp','public/views/page1'],
	function($,Backbone,Marionette,_,App,pageOneView){

   return Backbone.Marionette.Controller.extend({
    
    no:function(){
    	
    	 Backbone.history.navigate('#', {trigger: true});
    },

    viewPage1: function(){
    	
    		App.viewOne = new pageOneView({});
          App.mainRegion.show(App.viewOne);
    	
    	
    }

    
});

});
