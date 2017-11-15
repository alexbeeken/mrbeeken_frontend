import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;
const { alias } = computed;

export default Ember.Controller.extend({
  store: service(),
  posts: computed(function() {
    return this.get('store').findAll('post')
  })
});
