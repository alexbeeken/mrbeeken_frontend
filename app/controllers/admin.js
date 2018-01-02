import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  store: service(),
  posts: computed(function() {
    return this.get('store').findAll('post')
  }),
  courses: computed(function() {
    return this.get('store').findAll('course')
  }),
  actions: {
    deletePost(id) {
      this.get('store').findRecord('post', id, { backgroundReload: false }).then((post) => {
        post.deleteRecord();
        post.get('isDeleted'); // => true
        post.save().then(() => {
          this.get('flashMessages').info('post deleted');
        }).catch((reason) => {
          this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
        });
      })
    },
    deleteCourse(id) {
      this.get('store').findRecord('course', id, { backgroundReload: false }).then((course) => {
        course.deleteRecord();
        course.get('isDeleted'); // => true
        course.save().then(() => {
          this.get('flashMessages').info('course deleted');
        }).catch((reason) => {
          this.get('flashMessages').danger(reason.message || reason.errors[0].title || reason);
        });
      })
    }
  }
});
