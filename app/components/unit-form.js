import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { sort, alias } = computed;

export default Ember.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments)
    let unit = this.get('unit')
    this.set('summary', unit.get('summary'))
    this.set('title', unit.get('title'))
    this.set('order', unit.get('order'))
  },
  title: null,
  summary: null,
  order: null,
  store: service(),
  unitItems: alias('unit.unitItems'),
  sortProperties: ['order:asc'],
  sortedItems: sort('unitItems', 'sortProperties'),
  actions: {
    saveUnitItem() {
      let unit = this.get('unit')
      unit.set('summary', this.get('summary'))
      unit.set('title', this.get('title'))
      unit.set('order', this.get('order'))
      unit.save().then(() => {
        this.sendAction('doneSaving');
      }).catch((reason) => {
        this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
      })
    },
    deleteUnitItem(unitItemId) {
      if (confirm("Are you sure you want to delete this unit item?")) {
        this.get('store').findRecord('unit-item', unitItemId, { backgroundReload: false }).then((unitItem) => {
          unitItem.deleteRecord();
          unitItem.get('isDeleted'); // => true
          unitItem.save().then(() => {
            this.get('flashMessages').info('Unit item deleted');
          }).catch((reason) => {
            this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
          });
        })
      }
    }
  }
})
