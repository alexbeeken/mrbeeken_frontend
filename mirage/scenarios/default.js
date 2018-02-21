export default function(server) {
  server.createList('course', 10);
  server.createList('unit', 10);
  server.create('user', { superuser: true })
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
}
