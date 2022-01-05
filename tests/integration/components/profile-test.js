import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | profile', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('profileParagraphs', [
      {
        paragraphs: ['testing 123'],
      },
    ]);
    await render(hbs`<Profile @profile={{profileParagraphs}}/>`);

    assert.equal(this.element.querySelector('p').innerHTML, 'testing 123');
  });
});
