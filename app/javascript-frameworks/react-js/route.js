import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function () {
    this.setMetas({
      title: 'React-JS',
      description: 'See how ReactJS compares to the rest of the SPA Javascript Frameworks'
    });
  }
});
