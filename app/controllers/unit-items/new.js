import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed

export default Ember.Controller.extend({
  unitController: controller('unit'),
  unit: alias('unitController.model'),
  store: service(),
  unitItem: computed(function() {
    return this.get('store').createRecord('unit-item', {
      unit: this.get('unit')
    })
  }).volatile(),
  actions: {
    doneSaving() {
      this.get('flashMessages').info('Unit Item saved successfully!');
      this.transitionToRoute('unit.edit', this.get('unit.id'));
    }
  }
});
