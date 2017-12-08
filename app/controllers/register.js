import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;

const check_pw_match = function(pw1, pw2) {
  return (pw1 == pw2)
}

const pw_length = function(pw) {
  if (pw) {
    return pw.length < 8
  } else {
    return true
  }
}

const check_email = function(email) {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegex.test(email)
}

export default Ember.Controller.extend({
  session: service(),
  flashMessages: service(),
  ajax: service(),
  identification: null,
  password: null,
  passwordConfirm: null,
  passwordsDiff: computed('password', 'passwordConfirm', function() {
    let pw1 = this.get('password')
    let pw2 = this.get('passwordConfirm')
    if (pw1 && pw2) {
      return !check_pw_match(pw1, pw2)
    } else if (pw1 || pw2) {
      return true
    } else {
      return false
    }
  }),
  passwordInvalid: computed('password', 'passwordConfirm', function() {
    let pw1 = this.get('password')
    let pw2 = this.get('passwordConfirm')
    if (pw1 || pw2) {
      return (pw_length(pw1) || pw_length(pw2))
    } else {
      return false
    }
  }),
  emailUnique: null,
  emailInvalid: null,
  inputInvalid: computed('emailUnique', 'emailInvalid', 'passwordsDiff', function() {
    if (!this.get('emailUnique') && !this.get('emailInvalid') && !this.get('passwordsDiff') && !this.get('passwordInvalid')) {
      return null
    } else {
      return true
    }
  }),
  actions: {
    checkEmail() {
      let email = this.get('identification')
      if (check_email(email)) {
        this.set('emailInvalid', false)
        this.store.adapterFor('application').emailUnique(email).then((response) => {
          this.set('emailUnique', (response['meta']['unique'] == '0'))
        }).catch((reason) => {
          this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
        });
      } else {
        this.set('emailInvalid', true)
      }
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
      });
    }
  }
});
