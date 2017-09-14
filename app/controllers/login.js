import Ember from 'ember';

const { inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  session: service('session'),
  identification: 'example@test.com',
  password: 'password',
  errorMessage: null,
  actions: {
    authenticate() {
      var credentials = this.getProperties('identification', 'password')

      this.get('session').authenticate('authenticator:jwt', credentials).catch((reason) => {
        this.set('errorMessage', reason.errors[0].title || reason);
      });
    }
  }
});
