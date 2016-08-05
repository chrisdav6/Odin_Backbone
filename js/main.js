var Person = Backbone.Model.extend({
	defaults: {
		name: 'Guest Worker',
		age: 23,
		occupation: 'worker'
	}
});

var PersonView = Backbone.View.extend({
	tagName: 'li',

	my_template: _.template("<strong><%= name %></strong> (<%= age %>) - <%= occupation %>"),

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html( this.my_template(this.model.toJSON()));
	}
});