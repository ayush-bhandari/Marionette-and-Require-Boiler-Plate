
define(['backbone','backbonelocalStorage','model'],function(Backbone,LocalStorage,userModel){



	
	var collection = Backbone.Collection.extend({
		model: userModel,
		localStorage: new Backbone.LocalStorage("dataStorage")

	});
	//creating a new collection and returning it
	var coll= new collection();
return coll;
});