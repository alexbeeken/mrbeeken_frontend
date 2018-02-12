import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

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
    })
  }),
  unit: null
});
