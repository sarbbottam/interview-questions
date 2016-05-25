const assert = require('chai').assert;
const jsdom = require('jsdom');
const getRelativeNode = require('../src/relative-node');

describe('relative-node', () => {
  const markup = `
  <html>
    <head></head>
    <body>
      <div>
        <div>
          <div>
          </div>
          <div>
          </div>
          <div>
          </div>
          <div>
            <div id="child">
            </div>
          </div>
          <div>
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

  it(`should return the relative node from the next corresponding tree`, () => {
    assert.equal(
      getRelativeNode(secondDocument, firstChild),
      secondChild
    );
  });
});
