import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    return {
      links: this.store.findAll('link'),
      skills: this.store.findAll('skill'),
    };
  }
}
