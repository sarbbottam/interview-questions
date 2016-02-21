import {assert} from 'chai';
import jsdom  from 'jsdom';
import {contains} from '../src/html-node-contains';

describe('array-reorder', () => {
  
  let markup = `
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
  
  let firstDocument = jsdom.jsdom(markup);
  let secondDocument = jsdom.jsdom(markup);
  let firstChild = firstDocument.querySelector('#child');
  let secondChild = secondDocument.querySelector('#child'); 
  
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
