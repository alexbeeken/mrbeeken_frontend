import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

export default Ember.Component.extend({
  cuService: service('current-user'),
  currentUser: alias('cuService.user'),
  superuser: alias('cuService.user.superuser'),
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
