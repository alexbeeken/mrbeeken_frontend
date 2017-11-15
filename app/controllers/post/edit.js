import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed;

export default Ember.Controller.extend({
  actions: {
    doneSaving() {
      this.get('flashMessages').info('post updated successfully');
    }
  }
});
