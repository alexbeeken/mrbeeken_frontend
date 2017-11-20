import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

export default Ember.Controller.extend({
  currentBlurb: 'experience',
  experienceActive: true,
  educationActive: false,
  activitiesActive: false,
  actions: {
    switchBlurb(newBlurb) {
      this.set('experienceActive', (newBlurb == 'experience'))
      this.set('educationActive', (newBlurb == 'education'))
      this.set('activitiesActive', (newBlurb == 'activities'))
      this.transitionToRoute(newBlurb)
    }
  }
});
