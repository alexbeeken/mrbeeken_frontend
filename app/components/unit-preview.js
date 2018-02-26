import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { union, sort } = computed;

export default Ember.Component.extend({
  store: service(),
  unit: null,
  assessments: computed('unit', function() {
    return this.get('store').query('assessment', {
      filter: {
        unit_id: this.get('unit.id')
      }
    });
  }),
  lessons: computed('unit', function() {
    return this.get('store').query('lesson', {
      filter: {
        unit_id: this.get('unit.id')
      }
    })
  }),
  unitItems: union('assessments', 'lessons'),
  sortedUnitItems: sort('unitItems', 'sortProperties'),
  sortProperties: ['order']
});
