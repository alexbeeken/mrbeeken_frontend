import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  store: service(),
  actions: {
    doneSaving() {
      this.get('flashMessages').info('Course saved successfully!');
      this.transitionToRoute('admin');
    }
  }
});
