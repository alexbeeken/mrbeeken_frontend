import Ember from 'ember';
import Mirage from 'ember-cli-mirage';
import { faker } from 'ember-cli-mirage';
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

  this.get('/unit-items', function(db, request) {
    let unitItems;

    if(Ember.isEmpty(request.queryParams)) {
      unitItems = db.unitItems;
    } else {
      let unitId = request.queryParams['filter[unit_id]'];

      unitItems = db.unitItems.where({ unitId: unitId });
    }

    return unitItems;
  });
  this.post('/unit-items');
  this.get('/unit-items/:id');
  this.patch('/unit-items/:id');
  this.del('/unit-items/:id');

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

  this.post('/course-enrollments', function(db, request) {
    let req = JSON.parse(request.requestBody)
    return db.create('courseEnrollment', {
      userId: req.data.relationships.user.data.id,
      courseId: req.data.relationships.course.data.id,
      inserted_at: faker.date.recent()
    })
  });
  this.get('/course-enrollments', function(db, request) {
    let courseEnrollments;

    if (Ember.isEmpty(request.queryParams)) {
      courseEnrollments = db.courseEnrollments;
    } else {
      let userId = request.queryParams['filter[user_id]'];
      let courseId = request.queryParams['filter[course_id]'];
      if (userId && courseId) {
        courseEnrollments = db.courseEnrollments.where(
          {
            userId: userId,
            courseId: courseId
          }
        );
      } else if (userId) {
        courseEnrollments = db.courseEnrollments.where(
          {
            userId: userId
          }
        );
      } else {
        courseEnrollments = db.courseEnrollments.where(
          {
            courseId: courseId
          }
        );
      }
    }
    return courseEnrollments
  });
  this.get('/course-enrollments/:id');
  this.patch('/course-enrollments/:id');
}
