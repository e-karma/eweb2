import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function () {
    this.setMetas({
      title: 'Angular-JS',
      description: 'See how AngularJS compares to the rest of the SPA Javascript Frameworks'
    });
  }
});
