/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mrbeeken-frontend',
    environment: environment,
    apiHost: 'http://localhost:4000/api/v1',
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    flashMessageDefaults: {
      timeout: 10000,
      preventDuplicates: true
    },
    googleFonts: [
      'Oswald',
      'Merriweather'
    ],
    contentSecurityPolicy: {
      'font-src': "'self' fonts.gstatic.com",
      'style-src': "'self' fonts.googleapis.com"
    }
  };

  if (environment === 'development') {
    ENV['flashMessageDefaults'] = {
      timeout: 5000
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:jwt',
    routeIfAlreadyAuthenticated: '/',
    routeAfterAuthentication: '/'
  };
  ENV['ember-simple-auth-token'] = {
    refreshAccessTokens: true,
    refreshLeeway: 300, // Refresh the token 5 minutes (300s) before it expires.
    serverTokenEndpoint: ENV.apiHost + '/session/login',
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    },
    identificationField: 'email'
  };

  ENV['ember-cli-mirage'] = {
    enabled: true,
    exampleToken: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVc2VyOjMxIiwiZXhwIjoxNTIxODMzOTk2LCJpYXQiOjE1MTkyNDE5OTYsImlzcyI6Ik1yQmVla2VuIiwianRpIjoiZmQ0Mzc1NTEtOTBhMC00ZjhkLTgxNjUtZDEwYWM5OWJkYzNkIiwicGVtIjp7fSwic3ViIjoiVXNlcjozMSIsInR5cCI6ImFjY2VzcyJ9.0enXIQwK9kNkl1glD1lnbyF3j4t90ktfcjYEb3z-H6WBmLd4IlPg2vqrU-NrzEv-KieV4dm7C5uwOeLUtfMb6A'
  }

  return ENV
};
