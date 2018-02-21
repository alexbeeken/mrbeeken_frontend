import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.hacker.phrase().capitalize();
  },
  content() {
    return faker.lorem.paragraphs(6).capitalize();
  },
  order() {
    return Math.round(Math.random(100) * 200);
  }
});
