import DS from 'ember-data';

const SUMMARY_MAX = 496
const TITLE_MAX = 120

export default DS.Model.extend({
  title: DS.attr(),
  summary: DS.attr(),
  content: DS.attr(),
  thumbnail: DS.attr(),
  audio: DS.attr(),
});
