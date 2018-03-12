import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed;

export default Ember.Component.extend({
  unitController: controller('unit'),
  unit: alias('unitController.model'),
  actions: {
    nextUnitItem(id) {
      this.sendAction('nextUnitItem', id)
    }
  }
});
