import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:token',
  pathForType: function(type) {
    return 'me';
  },
  host: 'http://localhost:4000/api/v1',
  currentUser() {
    return this.ajax(this.urlForCurrentUserAction(), 'GET');
  },

  urlForCurrentUserAction() {
    return `${this.buildURL('me')}`;
  }
});
