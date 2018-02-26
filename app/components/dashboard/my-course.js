import Ember from 'ember';

const { computed } = Ember;
const { alias } = computed;

export default Ember.Component.extend({
  enrollment: null,
  formattedStartTime: computed('enrollment', function() {
    return this.get('enrollment').get('inserted_at').substring(0, 10)
  }),
  percentageComplete: computed('enrollment', function() {
    return 0;
  })
});
