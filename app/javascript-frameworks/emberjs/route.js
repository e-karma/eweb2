import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function () {
    this.setMetas({
      title: 'emberjs',
      description: 'EmberJS leads the pack of javascript frameworks.'
    });
  }
});
