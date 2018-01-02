import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  store: service(),
  courses: computed(function() {
    return this.get('store').findAll('course')
  })
});
