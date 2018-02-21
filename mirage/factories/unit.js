import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.company.bs().capitalize();
  },
  summary() {
    return faker.lorem.paragraphs(1);
  },
  order() {
    return Math.round(Math.random(100) * 200);
  }
});
