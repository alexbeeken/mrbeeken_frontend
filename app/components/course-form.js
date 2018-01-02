import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments)
    let course = this.get('course')
    this.set('summary', course.get('summary'))
    this.set('title', course.get('title'))
  },
  title: null,
  content: null,
  course: null,
  actions: {
    saveCourse() {
      let course = this.get('course')
      course.set('summary', this.get('summary'))
      course.set('title', this.get('title'))
      course.save().then(() => {
        this.sendAction('doneSaving');
      }).catch((reason) => {
        this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
      })
    },
  }
})
