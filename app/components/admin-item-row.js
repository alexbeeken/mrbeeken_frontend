import Ember from 'ember';

const { computed } = Ember;
const { alias } = computed;

export default Ember.Component.extend({
  unitItem: null,
  unitItemRoute: computed('unitItem', function() {
    return this.get('unitItem.type') + '.edit'
  })
})
