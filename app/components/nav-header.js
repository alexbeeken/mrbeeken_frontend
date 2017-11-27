import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

export default Ember.Component.extend({
  session: service(),
  cuService: service('current-user'),
  currentUser: alias('cuService.user'),
  loggedIn: alias('session.isAuthenticated'),
  currentBlurb: 'experience',
  experienceActive: true,
  educationActive: false,
  activitiesActive: false,
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    switchBlurb(newBlurb) {
      this.set('experienceActive', (newBlurb == 'experience'))
      this.set('educationActive', (newBlurb == 'education'))
      this.set('activitiesActive', (newBlurb == 'activities'))
      this.sendAction('transitionAway', newBlurb)
    }
  },
});
