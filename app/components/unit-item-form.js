import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments)
    let unitItem = this.get('model')
    this.set('title', unitItem.get('title'))
    this.set('type', unitItem.get('type'))
    this.set('order', unitItem.get('order'))
    this.set('content', unitItem.get('content'))
  },
  title: null,
  type: null,
  order: null,
  content: null,
  actions: {
    saveUnitItem() {
      let unitItem = this.get('model')
      unitItem.set('title', this.get('title'))
      debugger
      unitItem.set('type', this.get('type'))
      unitItem.set('order', this.get('order'))
      unitItem.set('content', this.get('content'))
      unitItem.save().then(() => {
        this.sendAction('doneSaving');
      }).catch((reason) => {
        this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
      })
    },
  }
})
