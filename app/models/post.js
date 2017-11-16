import DS from 'ember-data';

const SUMMARY_MAX = 420

export default DS.Model.extend({
  title: DS.attr(),
  summary: DS.attr(),
  content: DS.attr(),
  thumbnail: DS.attr(),
  audio: DS.attr(),
  shortSummary: function() {
    let summary = this.get('summary');
    if (summary.length > SUMMARY_MAX) {
      return summary.substr(0, SUMMARY_MAX) + '...'
    } else {
      return summary
    }
  }
});
