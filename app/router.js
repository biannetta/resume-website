import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('blog', function() {
    this.route('post', {path: '/:post_id'});
  });
  this.route('404', {path: '/*path'});
});

export default Router;
