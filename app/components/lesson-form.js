import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments)
    let lesson = this.get('lesson')
    this.set('title', lesson.get('title'))
    this.set('content', lesson.get('content'))
  },
  title: null,
  content: null,
  order: null,
  actions: {
    saveLesson() {
      let lesson = this.get('lesson')
      lesson.set('title', this.get('title'))
      lesson.set('content', this.get('content'))
      lesson.set('order', this.get('order'))
      lesson.save().then(() => {
        this.sendAction('doneSaving');
      }).catch((reason) => {
        this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
      })
    },
  }
})
