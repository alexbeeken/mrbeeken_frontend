import Ember from 'ember';

export default Ember.Controller.extend({
  currentBlurb: 'philosophy',
  actions: {
    switchBlurb(partialName) {
      this.set('currentBlurb', partialName)
    }
  }
});
