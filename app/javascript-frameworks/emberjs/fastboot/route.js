import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function () {
    this.setMetas({
      title: 'Fastboot - Faster App Loading',
      description: 'Fastboot - Have your cake and eat it too.  With Ember + Fastboot, the main drawback of single page apps is eliminated; initial load'
    });
  }
});
