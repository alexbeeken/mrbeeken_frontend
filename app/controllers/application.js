import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

export default Ember.Controller.extend({
  actions: {
    transitionAway(newBlurb) {
      this.transitionToRoute(newBlurb)
    }
  }
});
