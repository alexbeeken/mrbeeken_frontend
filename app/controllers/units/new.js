import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed

export default Ember.Controller.extend({
  courseController: controller('course'),
  course: alias('courseController.model'),
  store: service(),
  unit: computed(function() {
    return this.get('store').createRecord('unit', { course: this.get('course') })
  }).volatile(),
  actions: {
    doneSaving() {
      this.get('flashMessages').info('Unit saved successfully!');
      this.transitionToRoute('course.edit', this.get('course.id'));
    }
  }
});
