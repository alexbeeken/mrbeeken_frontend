import Ember from 'ember';

const { inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  session: service(),
  flashMessages: service(),
  identification: 'test@example.com',
  password: '123456789',
  errorMessage: null,
  actions: {
    authenticate() {
      var credentials = this.getProperties('identification', 'password')

      this.get('session').authenticate('authenticator:jwt', credentials).then(function () {
        let currentUser = this.store.findAll('current-user').then(function (array) {

          this.set('controllers.application.currentUser', array);
        });
      }).catch((reason) => {
        this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
      });



      this.transitionToRoute('/home');
    }
  }
});
