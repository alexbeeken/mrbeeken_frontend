import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

export default Ember.Component.extend({
  unit: null,
  actions: {
    nextUnitItem(id) {
      console.log('nav footer component')
      this.sendAction('nextUnitItem', id)
    }
  }
});
