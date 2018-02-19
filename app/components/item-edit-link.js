import Ember from 'ember';

const { computed } = Ember;
const { alias } = computed;

export default Ember.Component.extend({
  itemName: alias('item._internalModel.modelName'),
  item: null
})
