import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

export default Ember.Component.extend({
  path: null,
  isSvg: computed('path', function() {
    return /svg/.test(this.get('path'))
  })
});
