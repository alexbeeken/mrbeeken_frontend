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
  this.resource('courses', function() {
    this.route('new');
  });
  this.resource('course', { path: '/course/:course_id' }, function() {
    this.resource('units', function() {
      this.route('new')
    }),
    this.resource('unit', { path: '/unit/:unit_id' }, function() {
      this.route('edit')
      this.resource('assessments', function() {
        this.route('new')
      })
      this.resource('assessment', { path: '/assessment/:assessment_id' }, function() {
        this.route('edit')
      })
      this.resource('lessons', function() {
        this.route('new')
      })
      this.resource('lesson', { path: '/lesson/:lesson_id' }, function() {
        this.route('edit')
      })
    }),
    this.route('edit');
  });
});

export default Router;
