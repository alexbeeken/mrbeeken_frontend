import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  store: service(),
  unit: computed(function() {
    return this.get('store').createRecord('unit', this.get('course.id'))
  }),
  actions: {
    doneSaving() {
      this.get('flashMessages').info('course created successfully');
      this.transitionToRoute('units', this.get('course.id'));
    }
  }
});
