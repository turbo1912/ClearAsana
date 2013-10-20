define([
	'zepto',
	'underscore',
	'backbone',
	'Item',
	'marionette',
	'socketio'
], function ($, _, Backbone, itemModel, Marionette, io) {
	'use strict';

	var Items = Backbone.Collection.extend({
		urlRoot : '/tasks',
	    model : itemModel,

	   	initialize : function() {

	   		// this.on('change', this.onModelSaved , this);
	   	},
	   	comparator: function(model) {
			if(model.get("completed"))
				return -1;
			else{
				return 1;
			}

    	},
	
	});

	return Items;
});


// setInterval(function() {
//   channel.fetch();
// }, 10000);