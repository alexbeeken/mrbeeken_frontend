import Ember from 'ember';

const { inject, computed } = Ember;
const { controller } = inject;
const { sort, union, alias } = computed;

export default Ember.Component.extend({
  unitItemController: controller('unit-item'),
  currentId: alias('unitItemController.model.id'),
  isCompleted: false,
  isCurrent: computed('currentId', function() {
    return this.get('currentId') == this.get('model.id')
  })
})
