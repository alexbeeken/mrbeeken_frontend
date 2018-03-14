import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed;

export default Ember.Component.extend({
  store: service(),
  unitController: controller('unit'),
  unit: alias('unitController.model'),
  actions: {
    nextUnitItem(id) {
      this.sendAction('nextUnitItem', id)
    },
    nextUnit() {
      let id = this.get('unit.nextId')
      this.get('store').findRecord('unit', id).then((unit) => {
        if (unit) {
          let unitItems = unit.get('unitItems')
          let ids = unitItems.map(function(u) { return [u.get('id'), u.get('order')] })
          let nextId = ids.sort(function(a, b) { return a[1] > b[1] })[0][0]
          this.sendAction('nextUnit', nextId, unit)
        }
      })
    },
  }
});
