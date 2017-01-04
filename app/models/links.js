import DS from 'ember-data';

export default DS.Model.extend({
  icon: DS.attr('string'),
  link: DS.attr('string'),
  target: DS.attr('string'),
  text: DS.attr('string')
});
