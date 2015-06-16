import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function () {
    this.setMetas({
      title: 'SANE',
      description: 'Sane is an acronym for Sails And Ember that promotes API automation and ease of use'
    });
  }
});
