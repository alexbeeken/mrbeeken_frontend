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
        { courseId: course.id }
      )
    );
  });
  units.forEach(function(unit) {
    server.createList(
      'assessment',
      rand_within(3, 6),
      { unitId: unit.id }
    );
    server.createList(
      'lesson',
      rand_within(3, 6),
      { unitId: unit.id }
    );
  });
  server.create('user', { superuser: true });
}
