import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias, sort } = computed;

export default Ember.Controller.extend({
  cuService: service('current-user'),
  currentUser: alias('cuService.user'),
  noCurrentUser: computed('currentUser', function() {
    return this.get('currentUser') == null;
  }),
  sortedUnits: sort('model.units', 'sortProperties'),
  sortProperties: ['order'],
  enrollments: alias('currentUser.courseEnrollments'),
  showEnrollButton: false,
  actions: {
    enroll() {
      let model = this.get('model')
      let enrollment = this.get('store').createRecord('courseEnrollment', {
        user: this.get('currentUser'),
        course: model,
        lastItemId: 0
      });

      enrollment.save().then(() => {
        this.get('flashMessages').info('You have enrolled in: ' + model.get('title'));
        this.set('showEnrollButton', false)
      }).catch((reason) => {
        this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
      });
    }
  }
});
