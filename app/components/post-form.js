import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments)
    let post = this.get('post')
    this.set('audio', post.get('audio'))
    this.set('content', post.get('content'))
    this.set('summary', post.get('summary'))
    this.set('title', post.get('title'))
    this.set('thumbnail', post.get('thumbnail'))
  },
  title: null,
  content: null,
  summary: null,
  audio: null,
  thumbnail: null,
  post: null,
  actions: {
    savePost() {
      let post = this.get('post')
      post.set('audio', this.get('audio'))
      post.set('content', this.get('content'))
      post.set('summary', this.get('summary'))
      post.set('title', this.get('title'))
      post.set('thumbnail', this.get('thumbnail'))
      post.save().then(() => {
        this.sendAction('doneSaving');
      }).catch((reason) => {
        this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
      })
    },
  }
})
