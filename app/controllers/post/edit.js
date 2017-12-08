import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    doneSaving() {
      this.get('flashMessages').info('post updated successfully');
    }
  }
});
