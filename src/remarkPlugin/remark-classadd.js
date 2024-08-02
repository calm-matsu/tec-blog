import {h} from 'hastscript'
import {visit} from 'unist-util-visit'

// This plugin is an example to turn `::note` into divs, passing arbitrary
// attributes.
export function remarkClassadd() {
  /**
   * @param {import('mdast').Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        if (node.name !== 'classadd') return;

        const data = node.data || (node.data = {})
        const tagName = node.type === 'textDirective' ? 'span' : 'div';

        data.hName = tagName;
        data.hProperties = h(tagName, node.attributes || {}).properties;
      }
    })
  }
}