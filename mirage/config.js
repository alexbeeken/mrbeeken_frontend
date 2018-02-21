import Mirage from 'ember-cli-mirage';
import ENV from '../config/environment';

export default function() {
  this.urlPrefix = ENV['apiHost'];

  this.get('/courses', (schema) => {
    return schema.courses.all();
  });

  this.get('/courses/:id', (schema, request) => {
    return schema.courses.find(request.params.id);
  });

  this.get('/users/me', function(db) {
    return db.users.first()
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
}
