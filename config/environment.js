'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'biannetta',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: 'AIzaSyCx0KiKhaRDbar350LPkq5XLYMFZuibk-U',
      authDomain: 'resumeprofile-75074.firebaseapp.com',
      databaseURL: 'https://resumeprofile-75074.firebaseio.com',
      projectId: 'resumeprofile-75074',
      storageBucket: 'resumeprofile-75074.appspot.com',
      messagingSenderId: '100835609347',
      appId: '1:100835609347:web:bd9e5051cf919c3ef53736',
    },
    fontawesome: {
      defaultPrefix: 'fab', // brand icons
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    ENV.firebase.databaseURL = 'http://localhost:9000?ns=emulatorui';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
