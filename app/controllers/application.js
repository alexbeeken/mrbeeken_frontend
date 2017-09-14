import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  session: service('session'),

  loggedIn: computed(function() {
    return this.get('session.isAuthenticated');
  }),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
