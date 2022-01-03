import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | profile-skills', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('skillList', [{ text: 'skill1' }]);

    await render(hbs`<ProfileSkills @skills={{this.skillList}} />`);

    assert.equal(this.element.querySelector('span').innerHTML, 'skill1');
  });
});
