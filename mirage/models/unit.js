import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  course: belongsTo(),
  lessons: hasMany(),
  assessments: hasMany()
});
