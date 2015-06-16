import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function () {
    this.setMetas({
      title: 'Backbone-JS',
      description: 'See how BackboneJS compares to the rest of the SPA Javascript Frameworks'
    });
  }
});
