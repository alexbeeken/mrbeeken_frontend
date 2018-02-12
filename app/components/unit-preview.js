import Ember from 'ember';

const { computed, inject } = Ember;
const { alias } = computed;
const { service } = inject;

export default Ember.Component.extend({
  store: service(),
  assessments: computed('unit', function(){
    return this.get('store').query('assessment', {
      filter: {
        "unit-id" : this.get('unit.id')
      }
    });
  }),
  lessons: computed('unit', function(){
    return this.get('store').query('lesson', {
      filter: {
        "unit-id" : this.get('unit.id')
      }
    });
  }),
  unit: null
});
