import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return {
      links: await this.store.findAll('link'),
      skills: await this.store.findAll('skill'),
      profile: await this.store.findAll('profile'),
    };
  }
}
