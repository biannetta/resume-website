import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('post', {
      orderBy: 'slug',
      equalTo: params.slug
    }).then(function (posts) {
      return posts.get('firstObject');
    });
  }
});
