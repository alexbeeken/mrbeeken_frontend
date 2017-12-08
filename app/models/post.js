import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  summary: DS.attr(),
  content: DS.attr(),
  thumbnail: DS.attr(),
  audio: DS.attr(),
});
