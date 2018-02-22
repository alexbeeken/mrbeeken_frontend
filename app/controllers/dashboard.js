import Ember from 'ember';

const { inject, computed } = Ember;
const { alias } = computed;
const { service } = inject;

export default Ember.Controller.extend({
  cuService: service('current-user'),
  currentUser: alias('cuService.user'),
  enrollments: alias('currentUser.courseEnrollments')
});
