import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  inserted_at() {
    return faker.date.recent();
  },
  lastItemId() {
    return 0;
  },
  completed() {
    return false;
  },
  completedItemIds() {
    return [];
  }
});
