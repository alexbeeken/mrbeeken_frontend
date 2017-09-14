import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  user: null,
  actions: {
    getUserInfo() {
      let user = this.store.queryRecord('user', { filter: { email: 'test@example.com' }})
      this.set('user', user)
    }
  }
});
