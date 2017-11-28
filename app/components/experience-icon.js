import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  path: null,
  isSvg: computed('path', function() {
    return /svg/.test(this.get('path'))
  }),
  animationClass: computed('path', function() {
    let path = this.get('path')
    if (this.get('isSvg')) {
      return path.replace(/svg\//, "")
    } else {
      return path.replace(/png\//, "").replace(/.png/, "")
    }
  })
});
