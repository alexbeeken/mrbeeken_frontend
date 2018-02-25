import Ember from 'ember';
import Mirage from 'ember-cli-mirage';
import ENV from '../config/environment';

export default function() {
  this.urlPrefix = ENV['apiHost'];

  this.get('/courses');
  this.post('/courses');
  this.get('/courses/:id');
  this.patch('/courses/:id');
  this.del('/courses/:id');

  this.get('/units', function(db, request) {
    let units;
    if(Ember.isEmpty(request.queryParams)) {
      units = db.units;
    } else {
      let courseId = request.queryParams['filter[course_id]'];

      units = db.units.where({ courseId: courseId });
    }
    return units;
  });
  this.post('/units');
  this.get('/units/:id');
  this.patch('/units/:id');
  this.del('/units/:id');

  this.get('/assessments', function(db, request) {
    let assessments;

    if(Ember.isEmpty(request.queryParams)) {
      assessments = db.assessments;
    } else {
      let unitId = request.queryParams['filter[unit_id]'];

      assessments = db.assessments.where({ unitId: unitId });
    }

    return assessments
  });
  this.post('/assessments');
  this.get('/assessments/:id');
  this.patch('/assessments/:id');
  this.del('/assessments/:id');

  this.get('/lessons', function(db, request) {
    let lessons;

    if(Ember.isEmpty(request.queryParams)) {
      lessons = db.lessons;
    } else {
      let unitId = request.queryParams['filter[unit_id]'];

      lessons = db.lessons.where({ unitId: unitId });
    }

    return lessons
  });
  this.del('/lessons/:id');
  this.get('/lessons/:id');
  this.patch('/lessons/:id');
  this.post('/lessons');

  this.get('/users/me', function(db) {
    return db.users.first()
  });
  this.post('/users');

  this.get('/users/unique/:email', function() {
    return new Mirage.Response(
      200,
      {},
      {
        meta: {
          unique: true
        }
      }
    );
  });


  this.post('/session/login', function() {
    return new Mirage.Response(
      200,
      {},
      {
        token: ENV['ember-cli-mirage']['exampleToken']
      }
    );
  });

  this.post('/course-enrollments');
  this.get('/course-enrollments', function(db, request) {
    let courseEnrollments;

    if(Ember.isEmpty(request.queryParams)) {
      courseEnrollments = db.courseEnrollments;
    } else {
      let userId = request.queryParams['filter[user_id]'];

      courseEnrollments = db.courseEnrollments.where({ userId: userId });
    }

    return courseEnrollments
  });
  this.get('/course-enrollments/:id');
}
