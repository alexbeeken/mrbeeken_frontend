import Ember from 'ember';

const { inject, computed } = Ember;
const { controller, service } = inject;
const { alias, sort } = computed;

export default Ember.Component.extend({
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
  currentUnitItem: alias('unitItemController.model'),
  unitItems: alias('model.unitItems'),
  sortProperties: ['order:asc'],
  sortedItems: sort('unitItems', 'sortProperties'),
  actions: {
    complete() {
      let currentEnrollment = this.get('currentEnrollment')
      let currentUnitItem = this.get('currentUnitItem')
      currentEnrollment.save(
        {
          completedItemIds: (
            currentEnrollment.get(
              'completedItemIds'
            ).push(
              this.get('currentUnitItem.id')
            )
          )
        }
      ).then(() => {
        let sortedItemIds = this.get('sortedItems').map(function(item) {
          return item.id
        })
        let index = sortedItemIds.indexOf(currentUnitItem.id)
        let nextId = sortedItemIds[index + 1]
        if (nextId) {
          this.sendAction('nextUnitItem', nextId)
        } else {
          this.get('flashMessages').danger('there is no next unit item!! FIX ME ALEX');
        }
      }).catch((reason) => {
        this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
      });
    },
    goBack() {
      let current = this.get('currentUnitItem')
      let sortedItemIds = this.get('sortedItems').map(function(item) {
        return item.id
      })
      let index = sortedItemIds.indexOf(current.id)
      let lastId = sortedItemIds[index - 1]
      if (lastId) {
        this.sendAction('nextUnitItem', lastId)
      } else {
        this.get('flashMessages').danger('there is no next last item!! FIX ME ALEX');
      }
    }
  }
})