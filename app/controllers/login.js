import Ember from 'ember';

const { inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  session: service(),
  flashMessages: service(),
  identification: 'test@example.com',
  password: '123456789',
  actions: {
    authenticate() {
      var credentials = this.getProperties('identification', 'password')
      return this.get('session').authenticate('authenticator:jwt', credentials).then(() => {
        this.get('flashMessages').info('login successful');
      }).catch((reason) => {
        this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
      });
    }
  }
});
