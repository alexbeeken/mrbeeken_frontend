import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  currentActivitiesSlide: '.conferences',
  init() {
    this.transitionToRoute('activities' + this.get('currentActivitiesSlide'))
  }
})
