import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  session: service(),
  currentUser: service('current-user'),
  loggedIn: computed('session.isAuthenticated', function() {
    return this.get('session.isAuthenticated');
  }),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  },

});
