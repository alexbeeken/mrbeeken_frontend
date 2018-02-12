import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed;

export default Ember.Controller.extend({
  store: service(),
  actions: {
    doneSaving() {
      this.get('flashMessages').info('Unit saved successfully!');
      this.transitionToRoute('course.edit', this.get('course.id'));
    }
  }
});
