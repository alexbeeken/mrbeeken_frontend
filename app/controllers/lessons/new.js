import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed

export default Ember.Controller.extend({
  unitController: controller('unit'),
  unit: alias('unitController.model'),
  store: service(),
  lesson: computed(function() {
    return this.get('store').createRecord('lesson', {
      unit: this.get('unit')
    })
  }),
  actions: {
    doneSaving() {
      this.get('flashMessages').info('Lesson saved successfully!');
      this.transitionToRoute('unit.edit', this.get('unit.id'));
    }
  }
});
