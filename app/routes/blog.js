import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('post', {
      orderBy: 'timestamp'
    }).then(posts => posts.filter((post) => {
      return post.get('published') === true;
    })
  )},
});
