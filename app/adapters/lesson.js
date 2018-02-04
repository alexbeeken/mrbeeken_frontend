import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const { inject } = Ember;
const { controller } = inject;

const singleRequestTypes =
  ['updateRecord', 'findRecord', 'deleteRecord']

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:token',
  unitController: controller('unit'),
  courseController: controller('course'),
  buildURL (modelName, id, snapshot, requestType) {
    let course = this.get('courseController.model')
    let unit = this.get('unitController.model')
    if (singleRequestTypes.includes(requestType)) {
      return "http://localhost:4000/api/v1/courses/" + course.id + "/units/" + unit.id + "/lessons/" + id;
    } else {
      return "http://localhost:4000/api/v1/courses/" + course.id + "/units/" + unit.id + "/lessons";
    }
  }
})
