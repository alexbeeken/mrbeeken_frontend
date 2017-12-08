import Ember from 'ember';

export default Ember.Component.extend({
  mouseEnter() {
    this.sendAction('articleSelected');
  },
  mouseLeave() {
    this.sendAction('articleSelected');
  }
});
