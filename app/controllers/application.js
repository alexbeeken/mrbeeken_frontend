import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed;

export default Ember.Controller.extend({
  activitiesController: controller('activities'),
  actions: {
    transitionAway(newBlurb) {
      let from = this.currentPath
      if (from.includes('activities')) {
        this.set('activitiesController.currentActivitiesSlide', from.replace('activities', ''))
      }
      this.transitionToRoute(newBlurb)
    }
  }
});
