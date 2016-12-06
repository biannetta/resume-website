import Ember from 'ember';

export function extractDate(params/*, hash*/) {
  var timestamp = params[0];
  var format    = params[1];
  
  var day = moment.unix(timestamp);
  return day.format(format);
}

export default Ember.Helper.helper(extractDate);
