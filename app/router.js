import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', function() {});
  this.route('questions');
  this.route('answers');
  this.route('signout');
});

export default Router;
