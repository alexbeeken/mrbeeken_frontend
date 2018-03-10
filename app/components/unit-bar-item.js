import Ember from 'ember';

const { inject, computed } = Ember;
const { controller, service } = inject;
const { sort, union, alias } = computed;

export default Ember.Component.extend({
  willRender() {
    this._super(...arguments);
    let index = this.get(
      'currentEnrollment.completedItemIds'
    ).indexOf(this.get('model.id'))
    if (index !== -1) {
      this.set('isCompleted', true)
    } else {
      this.set('isCompleted', false)
    }
  },
  cuService: service('current-user'),
  currentUser: alias('cuService.user'),
  enrollments: alias('currentUser.courseEnrollments'),
  currentEnrollment: computed('enrollments', function() {
    let index = this.get('enrollments').map(function(enrollment) {
      return enrollment.course.id
    }).indexOf(this.get('unit.course.id'))
    return this.get('enrollments').objectAt(index)
  }),
  unitItemController: controller('unit-item'),
  currentId: alias('unitItemController.model.id'),
  isCompleted: null,
  isCurrent: computed('currentId', function() {
    return this.get('currentId') == this.get('model.id')
  })
})
