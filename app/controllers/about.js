import Ember from 'ember';

export default Ember.Controller.extend({
  currentBlurb: 'about/experience',
  experienceActive: true,
  educationActive: false,
  accomplishmentsActive: false,
  actions: {
    switchBlurb(newBlurb) {
      this.set('experienceActive', (newBlurb == 'about.experience'))
      this.set('educationActive', (newBlurb == 'about.education'))
      this.set('accomplishmentsActive', (newBlurb == 'about.accomplishments'))
      this.transitionToRoute(newBlurb)
    }
  }
});
