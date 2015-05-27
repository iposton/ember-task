window.Tasks = Ember.Application.create();

Tasks.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'tasks_ember.js'
});