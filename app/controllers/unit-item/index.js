import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed

export default Ember.Controller.extend({
  actions: {
    nextUnitItem(id) {
      this.transitionToRoute('unit-item.index', id);
    }
  }
});
