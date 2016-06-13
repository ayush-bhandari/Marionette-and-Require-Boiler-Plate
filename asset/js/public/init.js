require.config({
	baseUrl: "asset/js/",

	
	shim: {
    jquery: {
    	exports: '$'
    },
    underscore: {
    	exports: '_'
    },

    backbone: {
    	deps: ['underscore', 'jquery'], 
    	exports: 'Backbone'
    },
    
     backbonelocalStorage : { 
        exports: 'LocalStorage'
    },

    marionette: {
    	deps:['backbone'], 
    	exports: 'Marionette'
    },
   

     'baseapp': {
    	deps:['jquery','underscore','backbone','marionette']
	}
  },
	paths:{
		text: 'vendor/require-text',
		jquery: 'vendor/jquery',
		underscore: 'vendor/underscore',
		backbone: 'vendor/backbone',
		marionette: 'vendor/backbone.marionette',
 		backbonelocalStorage: 'vendor/backbone.localStorage',
        
		'baseapp': 'public/app'

	}
	
});

//your app is started form here
require(["baseapp", "marionette"],
    function (App, Marionette) {
       
          
      App.start();

       
    });

