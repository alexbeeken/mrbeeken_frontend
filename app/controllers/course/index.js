import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { sort } = computed;

export default Ember.Controller.extend({
  store: service(),
  sortedUnits: sort('model.units', 'sortProperties'),
  sortProperties: ['order']
});