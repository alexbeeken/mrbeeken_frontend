import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed;

export default Ember.Controller.extend({
  session: service(),
  flashMessages: service(),
  store: service(),
  applicationController: controller('application'),
  identification: 'test@example.com',
  password: '123456789',
  errorMessage: null,
  actions: {
    authenticate() {
      var credentials = this.getProperties('identification', 'password')

      var that = this;
      this.get('session').authenticate('authenticator:jwt', credentials).then(function () {
        that.store.adapterFor('current-user').currentUser().then(function(currentUser) {
          that.set('applicationController.currentUser', currentUser);
        })
      }).catch((reason) => {
        this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
      });
    }
  }
});
