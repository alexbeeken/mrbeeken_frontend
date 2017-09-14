import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  currentUser: null,
  actions: {
    getUserInfo() {
      let currentUser = this.store.findAll('current-user')
      this.set('currentUser', currentUser)
    }
  }
});
