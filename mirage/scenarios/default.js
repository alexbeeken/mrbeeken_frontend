const rand_within = function(atLeast, max) {
  return Math.floor(Math.random(100) * (max - atLeast)) + atLeast
}

export default function(server) {
  let course = server.create('course');
  let unit = server.create(
    'unit',
    { course: course }
  );
  let unitItems = server.createList(
    'unitItem',
    rand_within(3, 6),
    { unit: unit }
  );
  let user = server.create('user', { superuser: true });
  let lastVisitedItem = unitItems[rand_within(0, unitItems.length)]
  let completedItemIds = [];
  for (let index = 0; index < unitItems.length; index++) {
    let item = unitItems[index]
    if (item.id !== lastVisitedItem.id && item.order < lastVisitedItem.order) {
      completedItemIds.push(item.id)
    }
  }
  server.create(
    'courseEnrollment',
    {
      user: user,
      course: course,
      lastItemId: lastVisitedItem.id,
      completedItemIds: completedItemIds
    }
  );
}
