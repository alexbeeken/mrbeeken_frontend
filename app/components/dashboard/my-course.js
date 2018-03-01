import Ember from 'ember';

const { computed, inject } = Ember;
const { alias } = computed;
const { service } = inject;

export default Ember.Component.extend({
  store: service(),
  enrollment: null,
  formattedStartTime: computed('enrollment', function() {
    return this.get('enrollment').get('inserted_at').substring(0, 10)
  }),
  percentageComplete: computed('enrollment', function() {
    return 0;
  }),
  itemLinkRoute: computed('enrollment', function() {
    return this.get('enrollment.lastItemType') + '.index'
  }),
  item: computed('enrollment', function() {
    return this.get('store').findRecord(
      this.get('enrollment.lastItemType'),
      this.get('itemId')
    )
  }),
  itemId: alias('enrollment.lastItemId'),
  unitId: alias('item.unit.id'),
  courseId: alias('item.unit.course.id')
});
