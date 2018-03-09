import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  course: DS.belongsTo('course'),
  lastItemId: DS.attr(),
  inserted_at: DS.attr()
});
