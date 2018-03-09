import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

export default Ember.Route.extend({
  cuService: service('current-user'),
  currentUser: alias('cuService.user'),
  setupController(controller, model) {
    this._super(controller, model)
    let showEnrollButton;
    if (!this.get('currentUser')) {
      showEnrollButton = false
      controller.set('showEnrollButton', showEnrollButton)
      return
    }
    this.get('store').query('course-enrollment', {
      filter: {
        user_id: this.get('currentUser.id'),
        course_id: model.id
      }
    }).then(function(courseEnrollments) {
      showEnrollButton = !(courseEnrollments.get('length') > 0)
      controller.set('showEnrollButton', showEnrollButton)
      return
    }).catch(function() {
      controller.set('showEnrollButton', true)
    })
  },
  resetController: function(controller) {
    this._super.apply(this, arguments);
    controller.set('showEnrollButton', false);
  }
});
