import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  units: hasMany(),
  courseEnrollments: hasMany()
});
