import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function () {
    this.setMetas({
      title: 'Javascript Frameworks - Single Page Apps',
      description: 'Javascript frameworks are the most significant technologicaladvancement the web has seen since in quite some time'
    });
  }
});
