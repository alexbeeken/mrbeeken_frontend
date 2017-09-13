import Ember from 'ember';

const { inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  session: service('session'),
  actions: {
    authenticate() {
      let { email, password } = this.getProperties('email', 'password');
        this.get('session').authenticate('authenticator:oauth2', email, password).catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
    }
  }
});
