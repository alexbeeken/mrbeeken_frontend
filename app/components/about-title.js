import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

export default Ember.Component.extend({
  mouseEnter() {
    this.sendAction('articleSelected');
  },
  mouseLeave() {
    this.sendAction('articleSelected');
  }
});
