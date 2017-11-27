import Ember from 'ember';

const { inject } = Ember;
const { controller } = inject;

export default Ember.Route.extend({
  activitiesController: controller('activities'),
  beforeModel(/* transition */) {
    this.transitionTo('activities' + this.get('activitiesController.currentActivitiesSlide'))
  }
});
