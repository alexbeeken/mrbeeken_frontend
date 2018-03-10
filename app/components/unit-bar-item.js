import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { sort, union, alias } = computed;

export default Ember.Component.extend({
  isCompleted: false,
  actions: {
    complete() {
      this.get('model').set('isCompleted', true).save()
    }
  }
})
