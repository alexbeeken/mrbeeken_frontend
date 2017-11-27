import Ember from 'ember';

const { inject } = Ember;
const { controller } = inject;

export default Ember.Controller.extend({
  activitiesController: controller('activities'),
  init() {
    this.set('activitiesController.currentActivitiesSlide', '.monolake')
  }
})
