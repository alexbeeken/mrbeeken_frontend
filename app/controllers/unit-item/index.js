import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    nextUnitItem(id) {
      this.transitionToRoute('unit-item.index', id);
    }
  }
});
