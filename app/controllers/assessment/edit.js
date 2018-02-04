import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed

export default Ember.Controller.extend({
  unitController: controller('unit'),
  unit: alias('unitController.model'),
  store: service(),
  assessment: alias('model'),
  actions: {
    doneSaving() {
      this.get('flashMessages').info('Assessment saved successfully!');
      this.transitionToRoute('unit.edit', this.get('unit.id'));
    }
  }
});
