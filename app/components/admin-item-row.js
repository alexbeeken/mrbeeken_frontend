import Ember from 'ember';

const { computed } = Ember;
const { alias } = computed;

export default Ember.Component.extend({
  itemEditRoute: computed('item', function() {
    return this.get('itemType') + '.edit'
  }),
  itemType: alias('item._internalModel.modelName'),
  item: null
})
