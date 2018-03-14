import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.hacker.phrase().capitalize();
  },
  order() {
    return Math.round(Math.random(100) * 200);
  },
  content() {
    return faker.lorem.paragraphs(2);
  },
  type(i) {
    return faker.list.random('assessment', 'lesson')(i);
  },
  nextId: null,
  prevId: null
});
