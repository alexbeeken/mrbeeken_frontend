import Ember from 'ember';

export default Ember.Component.extend({
  show: false,
  actions: {
    dismissMenu() {
      this.set('show', false)
    },
    showMenu() {
      this.set('show', true)
    }
  }
});
