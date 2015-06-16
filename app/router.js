import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('why', function(){
    this.route('responsive-web-design');
    this.route('reactive-programming');
    // this.route('platform');
    this.route('ecommerce');
    // this.route('vision');
    // this.route('efficiency');
    // this.route('best-of-breed');
    // this.route('cutting-edge-features');
    // this.route('best-deal');
  });
  this.route('platform');
  this.route('services', function() {
    this.route("single-page-applications");
  });
  this.route('javascript-frameworks', function(){
    this.route('emberjs', function() { //emberjs 4,400
      this.route('fastboot'); //fastboot 2900
      this.route('htmlbars'); // htmlbars 590
    });
  });
  this.route('contact', function() {
    this.route('received');
    this.route('failure');
  });
    // this.route('design'
    //   this.route('front-end-swap', function(){
    //   });
    //   this.route('mockups', function(){
    //   });
    //   this.route('app-scaffold', function(){
    //   });
    //   this.route('style-guide', function(){
    //     this.route('color-scheme');
    //     this.route('font-selection');
    //   });
    //   this.route('photoshop', function(){
    //     this.route('logo-design');
    //     this.route('custom-image');
    //   });
    //   this.route('illustrator', function(){
    //     this.route('logo-design');
    //     this.route('custom-image');
    //   });
    // );
    // this.route('marketing'
    //   this.route('email-campaign');
    //   this.route('keyword-research');
    //   this.route('on-page-seo');
    //   this.route('content-planning');
    //   this.route('remote-sales');
    //   this.route('promo-video');
    //   this.route('voice-overs');
    //   this.route('content-curation');
    //   this.route('link-building');
    // );
    // this.route('development', function(){
    //   this.route('store');
    //   this.route('platform');
    //   this.route('feature');
    // });
    // this.route('networking', function(){
    //   this.route('fastboot');
    //   this.route('content-delivery-network');
    //   this.route('hosting');
    // });
    // this.route('security-check');
    // this.route('site-search');
  // this.route('gallery', function(){});
  // this.route('sandbox', function(){
  //   this.route('templates');
  //   this.route('plugins');
  // });
});

export default Router;
