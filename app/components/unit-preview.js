import Ember from 'ember';

const { inject, computed, merge } = Ember;
const { service } = inject;
const { union, sort } = computed;

export default Ember.Component.extend({
  store: service(),
  assessments: computed('unit', function() {
    return this.get('store').query('assessment', {
      filter: {
        "unit_id" : this.get('unit.id')
      }
    });
  }),
  lessons: computed('unit', function() {
    return this.get('store').query('lesson', {
      filter: {
        "unit_id" : this.get('unit.id')
      }
    })
  }),
  unitItems: union('assessments', 'lessons'),
  sortedUnitItems: sort('unitItems', 'sortProperties'),
  sortProperties: ['order'],
  unit: null
});
