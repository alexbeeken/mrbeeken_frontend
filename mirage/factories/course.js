import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.company.bs().capitalize();
  },

  summary() {
    return faker.lorem.paragraphs(1);
  }
});
