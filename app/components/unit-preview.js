import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

export default Ember.Component.extend({
  store: service(),
  unit: computed('unit_id', function() {
    this.get('store').findRecord('unit', this.get('unit_id'))
  }),
  assessments: alias('unit.assessments'),
  lessons: alias('unit.lessons'),
  unit_id: null
});
