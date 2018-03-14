import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  nextId: DS.attr(),
  order: DS.attr(),
  prevId: DS.attr(),
  title: DS.attr(),
  type: DS.attr(),
  unit: DS.belongsTo('unit')
});
