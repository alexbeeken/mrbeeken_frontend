import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments)
    let unit = this.get('unit')
    this.set('summary', unit.get('summary'))
    this.set('title', unit.get('title'))
  },
  title: null,
  summary: null,
  actions: {
    saveUnit() {
      let unit = this.get('unit')
      unit.set('summary', this.get('summary'))
      unit.set('title', this.get('title'))
      unit.save().then(() => {
        this.sendAction('doneSaving');
      }).catch((reason) => {
        this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
      })
    },
  }
})
