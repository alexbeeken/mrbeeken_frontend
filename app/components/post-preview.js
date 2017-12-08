import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  post: null,
  shortSummary: computed( function() {
    return this.get('post').shortSummary()
  })
});
