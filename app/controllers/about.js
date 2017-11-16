import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;

export default Ember.Controller.extend({
  currentBlurb: 'philosophy',
  actions: {
    switchBlurb(partialName) {
      this.set('currentBlurb', partialName)
    }
  }
});
