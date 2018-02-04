import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  summary: DS.attr(),
  course: DS.belongsTo('course'),
  lessons: DS.hasMany('lesson'),
  assessments: DS.hasMany('assessment')
});
