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
  this.route('admin');
  this.route('about');
  this.route('videos');
  this.route('posts', function() {
    this.route('new');
  });
  this.resource('post', { path: '/post/:post_id' }, function() {
    this.route('edit');
  });
});

export default Router;
