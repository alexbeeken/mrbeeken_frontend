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
  this.route('admin');
  this.route('dashboard');
  this.resource('courses', function() {
    this.route('new');
  });
  this.resource('course', { path: '/course/:course_id' }, function() {
    this.resource('units', function() {
      this.route('new')
    }),
    this.resource('unit', { path: '/unit/:unit_id' }, function() {
      this.route('edit')
      this.resource('unit-items', function() {
        this.route('new')
      })
      this.resource('unit-item', { path: '/unit-item/:unit_item_id' }, function() {
        this.route('edit')
      })
    }),
    this.route('edit');
  });
});

export default Router;
