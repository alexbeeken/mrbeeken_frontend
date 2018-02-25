import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  summary: DS.attr(),
  units: DS.hasMany('unit'),
  courseEnrollments: DS.hasMany('courseEnrollment')
});
