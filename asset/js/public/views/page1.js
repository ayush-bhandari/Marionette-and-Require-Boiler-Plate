define(['jquery','backbone','marionette','underscore','text!../../../templates/page1.html'],
	function($,Backbone,Marionette,_,template){

var page1view=Backbone.Marionette.ItemView.extend({
   template: _.template(template),
   
   //add events and other ui features here

 
 
});

return page1view;

});
