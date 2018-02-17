import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  order: DS.attr(),
  unit: DS.belongsTo('unit')
});
