import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  store: service(),
  course: computed(function() {
    return this.get('store').createRecord('course')
  }),
  actions: {
    doneSaving() {
      this.get('flashMessages').info('course created successfully');
      this.transitionToRoute('admin');
    }
  }
});
