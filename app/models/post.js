import Model, { attr } from '@ember-data/model';

export default class Post extends Model {
  @attr('string') title;
  @attr('string') body;
  @attr('number') timestamp;
  @attr('boolean') published;
  @attr('string') slug;
}
