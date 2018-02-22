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
    if(Ember.isEmpty(request.queryParams)) {
      assessments = db.assessments;
    } else {
      let courseId = request.queryParams['filter[course_id]'];

      units = db.units.where({ courseId: courseId });
    }
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
  this.post('/lessons');
  this.get('/lessons/:id');
  this.patch('/lessons/:id');
  this.del('/lessons/:id');

  this.get('/users/me', function(db) {
    return db.users.first()
  });

  this.get('/users/unique/:email', function(db, request) {
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

  this.post('/users');

  this.post('/session/login', function() {
    return new Mirage.Response(
      200,
      {},
      {
        token: ENV['ember-cli-mirage']['exampleToken']
      }
    );
  });
}
