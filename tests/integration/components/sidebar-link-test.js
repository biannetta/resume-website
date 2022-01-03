import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sidebar-link', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('sidebarLinks', [
      {
        icon: 'github',
        link: 'sample.com',
        target: 'blank',
        text: 'Link1',
      },
    ]);

    await render(hbs`<SidebarLink @links={{this.sidebarLinks}}/>`);

    assert.equal(this.element.querySelector('a > span').innerHTML, 'Link1');
  });
});
