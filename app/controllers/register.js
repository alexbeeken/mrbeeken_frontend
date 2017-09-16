import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed;

export default Ember.Controller.extend({
  session: service(),
  flashMessages: service(),
  identification: 'test@example.com',
  password: '123456789',
  passwordConfirm: '123456789',
  passwordsMatch: computed('password', 'passwordConfirm', function() {
    return this.get('password') === this.get('passwordConfirm')
  }),
  actions: {
    checkEmailForUniqueNess() {
      // TODO
    },
    checkPasswordMatch() {
      return this.get('password') === this.get('passwordConfirm')
    },
    register() {
      var user = this.store.createRecord('user', {
        email: this.get('identification'),
        password: this.get('password'),
        passwordConfirmation: this.get('passwordConfirm')
      });

      user.save().then((user) => {
        var credentials = {identification: user.get('email'), password: this.get('password')}

        return this.get('session').authenticate('authenticator:jwt', credentials);
      }).catch((reason) => {
        this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
      });;
    }
  }
});
