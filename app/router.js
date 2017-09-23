import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users');
  this.route('login', { path: '/login' });
  this.route('register', { path: '/register' });
  this.route('home');
  this.route('news');
});

export default Router;
