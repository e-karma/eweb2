import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function () {
    this.setMetas({
      title: 'HTMLBars - Better Ember Apps',
      description: 'HTMLBars is a main reason that EmberJS leads the pack of javascript frameworks.'
    });
  }
});
