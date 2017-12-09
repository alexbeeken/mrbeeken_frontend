import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

export default Ember.Component.extend({
  session: service(),
  cuService: service('current-user'),
  currentUser: alias('cuService.user'),
  loggedIn: alias('session.isAuthenticated'),
  isMenuActive: false,
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    toggleMenu() {
      this.sendAction('toggleMenu')
    }
  },
});
