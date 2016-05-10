import {assert} from 'chai';
import jsdom from 'jsdom';
import {contains} from '../src/html-node-contains';

describe('array-reorder', () => {
  const markup = `
  <html>
    <head></head>
    <body>
      <div>
        <div>
          <div>
            <div id="child">
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;

  const firstDocument = jsdom.jsdom(markup);
  const secondDocument = jsdom.jsdom(markup);
  const firstChild = firstDocument.querySelector('#child');
  const secondChild = secondDocument.querySelector('#child');

  it(`retrun true if the parent node contains the child node`, () => {
    assert.isTrue(
      contains(firstDocument, firstChild)
    );
    assert.isTrue(
      contains(secondDocument, secondChild)
    );
  });

  it(`retrun false if the parent node does not contain the child node`, () => {
    assert.isFalse(
      contains(firstDocument, secondChild)
    );
    assert.isFalse(
      contains(secondDocument, firstChild)
    );
  });
});
