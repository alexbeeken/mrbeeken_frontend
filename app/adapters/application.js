import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:token',
  host: 'http://localhost:4000/api/v1',
  urlForQueryRecord(query) {
    if (query.me) {
      delete query.me;
      return `${this._super(...arguments)}/me`;
    }

    if (query.unique) {
      let email = query.unique
      delete query.unique;
      return `${this._super(...arguments)}/unique/` + email
    }

    return this._super(...arguments);
  },
  emailUnique(email, params) {
    const url = `${this.host}/users/unique/${email}`
    return this.ajax(url, 'GET');
  }
});
