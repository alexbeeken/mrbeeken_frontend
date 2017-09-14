import Ember from 'ember';

const { inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  session: service('session'),
  email: 'example@test.com',
  password: 'password',
  errorMessage: null,
  actions: {
    authenticate() {
      var credentials = this.getProperties('email', 'password')

      this.get('session').authenticate('authenticator:jwt', credentials).then((result) => {
        console.log('HELLO WORLD');
      }).catch((reason) => {
        debugger;
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
