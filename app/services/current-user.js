import Ember from 'ember';

const { inject, RSVP } = Ember;
const { service } = inject;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),
  user: null,
  load() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('user', { me: true }).then((user) => {
        this.set('user', user);
      });
    } else {
      return RSVP.resolve();
    }
  }
});
