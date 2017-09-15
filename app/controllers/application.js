import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  session: service(),
  cuService: service('current-user'),
  currentUser: computed(function() {
    return this.get('cuService.user');
  }),
  loggedIn: computed('session.isAuthenticated', function() {
    return this.get('session.isAuthenticated');
  }),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  },

});
