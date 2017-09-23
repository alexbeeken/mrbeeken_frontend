import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed;

export default Ember.Component.extend({
  session: service(),
  cuService: service('current-user'),
  currentUser: alias('cuService.user'),
  loggedIn: computed('session.isAuthenticated', function() {
    return this.get('session.isAuthenticated');
  }),
});
