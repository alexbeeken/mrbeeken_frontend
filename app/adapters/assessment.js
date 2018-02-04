import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const { inject } = Ember;
const { service, controller } = inject;

const singleRequestTypes =
  ['updateRecord', 'findRecord']

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:token',
  unitController: controller('unit'),
  courseController: controller('course'),
  buildURL (modelName, id, snapshot, requestType, query) {
    let course = this.get('courseController.model')
    let unit = this.get('unitController.model')
    if (singleRequestTypes.includes(requestType)) {
      return "http://localhost:4000/api/v1/courses/" + course.id + "/units/" + unit.id + "/assessments/" + id;
    } else {
      return "http://localhost:4000/api/v1/courses/" + course.id + "/units/" + unit.id + "/assessments";
    }
  }
})
