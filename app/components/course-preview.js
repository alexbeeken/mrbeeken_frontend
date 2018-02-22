import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { sort } = computed;

export default Ember.Component.extend({
  course: null
})
