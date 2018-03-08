import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  order: DS.attr(),
  summary: DS.attr(),
  course: DS.belongsTo('course'),
  unitItems: DS.hasMany('unit-item'),
  lessons: DS.hasMany('lesson'),
  assessments: DS.hasMany('assessment')
});
