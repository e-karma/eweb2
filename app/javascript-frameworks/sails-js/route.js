import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function () {
    this.setMetas({
      title: 'Sails-JS',
      description: 'See how Sails-JS compares to the rest of the SPA Javascript Frameworks'
    });
  }
});
