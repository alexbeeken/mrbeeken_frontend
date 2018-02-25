import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  password: DS.attr(),
  passwordConfirmation: DS.attr(),
  superuser: DS.attr(),
  courseEnrollments: DS.hasMany('courseEnrollment')
});
