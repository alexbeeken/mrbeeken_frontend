import DS from 'ember-data';

export default DS.Model.extend({
  completed: DS.attr(),
  title: DS.attr(),
  order: DS.attr(),
  content: DS.attr(),
  type: DS.attr(),
  unit: DS.belongsTo('unit'),
});
