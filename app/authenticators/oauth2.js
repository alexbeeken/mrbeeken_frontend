// app/authenticators/oauth2.js
import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrantAuthenticator.extend({
  serverTokenEndpoint: 'http://localhost:4000/api/v1/sessions/login',
  makeRequest(url, data) {
    const options = {
      url: url,
      data: data,
      type: 'POST',
      dataType: 'json',
      accept: 'application/vnd.api+json',
      headers: {
        "Content-Type": 'application/vnd.api+json'
      }
    };
  }
});
