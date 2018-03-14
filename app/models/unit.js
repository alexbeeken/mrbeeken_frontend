import DS from 'ember-data';

export default DS.Model.extend({
  course: DS.belongsTo('course'),
  nextId: DS.attr(),
  order: DS.attr(),
  prevId: DS.attr(),
  summary: DS.attr(),
  title: DS.attr(),
  unitItems: DS.hasMany('unit-item')
});
