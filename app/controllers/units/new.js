import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;

export default Ember.Controller.extend({
  courseController: controller('course'),
  store: service(),
  unit: computed(function() {
    return this.get('store').createRecord('unit')
  }),
  actions: {
    doneSaving() {
      this.get('flashMessages').info('course created successfully');
      this.transitionToRoute('units', this.get('courseController.model.id'));
    }
  }
});
