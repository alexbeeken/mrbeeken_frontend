import Ember from 'ember';

const { inject } = Ember;
const { service } = inject;

export default Ember.Route.extend({
  store: service(),
  model(params) {
    return this.get('store').findRecord('post', params.post_id);
  }
});
