import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function () {
    this.setMetas({
      title: 'EmberJS - Singe Page Apps',
      description: 'EmberJS is a leading javascript framework for developing single page apps'
    });
  }
});
