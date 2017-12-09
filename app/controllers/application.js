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
      return this.get('session').invalidate().then(() => {
        this.get('flashMessages').info('You have been logged out.');
      }).catch((reason) => {
        this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
      });
    },
    dismissMenu() {
      this.set('isMenuActive', false)
    },
    toggleMenu() {
      this.set('isMenuActive', !this.get('isMenuActive'))
    }
  },
});
