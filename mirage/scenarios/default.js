const rand_within = function(atLeast, max) {
  return Math.floor(Math.random(100) * (max - atLeast)) + atLeast
}

export default function(server) {
  let courses = server.createList('course', rand_within(4, 8));
  let units = [];
  courses.forEach(function(course) {
    units = units.concat(
      server.createList(
        'unit',
        rand_within(2, 5),
        { course: course }
      )
    );
  });
  units.forEach(function(unit) {
    server.createList(
      'assessment',
      rand_within(3, 6),
      { unit: unit }
    );
    server.createList(
      'lesson',
      rand_within(3, 6),
      { unit: unit }
    );
  });
  let user = server.create('user', { superuser: true });
  server.create(
    'courseEnrollment',
    {
      user: user,
      course: courses[0],
      lastItemId: courses[0].units.models[0].assessments.models[0].id,
      lastItemType: 'assessment'
    }
  );
}
