import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

export default Ember.Component.extend({
  cuService: service('current-user'),
  currentUser: alias('cuService.user'),
  superuser: alias('cuService.user.superuser'),
  actions: {
    dismissMenu() {
      this.sendAction('dismissMenu')
    },
    invalidateSession() {
      this.sendAction('invalidateSession')
    }
  }
});
