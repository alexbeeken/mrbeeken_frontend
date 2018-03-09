import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { sort, alias } = computed;

export default Ember.Component.extend({
  store: service(),
  unit: null,
  unitItems: alias('unit.unitItems'),
  sortedUnitItems: sort('unitItems', 'sortProperties'),
  sortProperties: ['order']
});
