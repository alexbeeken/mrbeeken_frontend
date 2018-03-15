import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

export default Ember.Controller.extend({
  session: service(),
  cuService: service('current-user'),
  currentUser: alias('cuService.user'),
  showFooter: computed('currentRouteName', function() {
    return this.get('currentRouteName') === 'unit-item.index';
  }),
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
    },
    nextUnitItem(id) {
      this.transitionToRoute('unit-item.index', id);
    },
    nextUnit(nextId, unit) {
      this.transitionToRoute('unit-item.index', unit.get('course.id'), unit.get('id'), nextId)
    },
    lastUnit(prevId, unit) {
      this.transitionToRoute('unit-item.index', unit.get('course.id'), unit.get('id'), prevId)
    }
  },
});
