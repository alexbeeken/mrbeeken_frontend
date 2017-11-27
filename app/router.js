import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('education');
  this.route('experience');
  this.route('activities', function() {
    this.route('conferences');
    this.route('monolake');
    this.route('mrbeeken');
  });
  // this.route('users');
  // this.route('login', { path: '/login' });
  // this.route('register', { path: '/register' });
  // this.route('home');
  // this.route('admin');
  // this.route('about', function() {
  //
  // });
  // this.route('projects');
  // this.route('posts', function() {
  //   this.route('new');
  // });
  // this.resource('post', { path: '/post/:post_id' }, function() {
  //   this.route('edit');
  // });
});

export default Router;
