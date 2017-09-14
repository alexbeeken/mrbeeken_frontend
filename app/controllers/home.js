import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed;

export default Ember.Controller.extend({
  currentUser: alias('applicationController.currentUser'),
  applicationController: controller('application'),
  actions: {
    getUserInfo() {
      let currentUser = this.store.findAll('current-user')
      this.set('currentUser', currentUser)
    }
  }
});
