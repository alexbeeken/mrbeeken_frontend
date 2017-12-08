import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  store: service(),
  post: computed(function() {
    return this.get('store').createRecord('post')
  }),
  actions: {
    doneSaving() {
      this.get('flashMessages').info('post created successfully');
      this.transitionToRoute('posts');
    }
  }
});
