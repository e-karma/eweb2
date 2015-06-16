import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function () {
    this.setMetas({
      title: 'Knockout-JS',
      description: 'See how KnockoutJS compares to the rest of the SPA Javascript Frameworks'
    });
  }
});
