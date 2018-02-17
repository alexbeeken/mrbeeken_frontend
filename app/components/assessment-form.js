import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments)
    let assessment = this.get('assessment')
    this.set('title', assessment.get('title'))
  },
  title: null,
  order: null,
  actions: {
    saveAssessment() {
      let assessment = this.get('assessment')
      assessment.set('title', this.get('title'))
      assessment.set('order', this.get('order'))
      assessment.save().then(() => {
        this.sendAction('doneSaving');
      }).catch((reason) => {
        this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
      })
    },
  }
})
