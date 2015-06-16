import Ember from 'ember';
import FullpageJsView from 'ember-cli-fullpagejs-view/view/fullpage-js-view';


export default FullpageJsView.extend({
  fullpageOptions: {
    anchors: ['intro', 'Fast', 'Vision', 'Contact'],
    scrollingSpeed: 800,
  }
});
