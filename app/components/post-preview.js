import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

export default Ember.Component.extend({
  post: null,
  shortSummary: computed( function() {
    return this.get('post').shortSummary()
  })
});
