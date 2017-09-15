import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed;

export default Ember.Controller.extend({
  session: service(),
  flashMessages: service(),
  identification: 'test@example.com',
  password: '123456789',
  actions: {
    authenticate() {
      var credentials = this.getProperties('identification', 'password')

      var that = this;
      return this.get('session').authenticate('authenticator:jwt', credentials).catch((reason) => {
        this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
      });
    }
  }
});
