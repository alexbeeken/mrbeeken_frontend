import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

export default Ember.Controller.extend({
  session: service(),
  cuService: service('current-user'),
  currentUser: alias('cuService.user'),
  loggedIn: computed('session.isAuthenticated', function() {
    return this.get('session.isAuthenticated');
  }),
  isMenuActive: false,
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    dismissMenu() {
      this.set('isMenuActive', false)
    },
    toggleMenu() {
      this.set('isMenuActive', !this.get('isMenuActive'))
    }
  },
});
