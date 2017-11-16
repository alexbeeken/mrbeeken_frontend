import Ember from 'ember';

const { inject, computed } = Ember;
const { service, controller } = inject;

export default Ember.Controller.extend({
  store: service(),
  posts: computed(function() {
    return this.get('store').findAll('post')
  }),
  actions: {
    deletePost(id) {
      
      this.get('store').findRecord('post', id, { backgroundReload: false }).then((post) => {
        post.deleteRecord();
        post.get('isDeleted'); // => true
        post.save().then((result) => {
          this.get('flashMessages').info('post deleted');
        }).catch((reason) => {
          this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
        });
      })
    }
  }
});