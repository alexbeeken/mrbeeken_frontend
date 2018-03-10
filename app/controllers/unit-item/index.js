import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed

export default Ember.Controller.extend({
  actions: {
    nextUnitItem(id) {
      console.log('controller index')
      this.transitionToRoute('unit-item.index', id);
    }
  }
});
