const visit = require('unist-util-visit');

const plugin = (options) => {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      const match = node.value.match(/\(\((.*?)\)\)/s);
      if (match) {
        const text = match[1];
        const before = node.value.substring(0, match.index);
        const after = node.value.substring(match.index + match[0].length);
        const replacement = [
          before && {type: 'text', value: before},
          {type: 'html', value: `<span style="color:#FE6700">[${text}]</span>`},
          after && {type: 'text', value: after},
        ].filter(Boolean);
        parent.children.splice(index, 1, ...replacement);
      }
    });
  };
};

module.exports = plugin;
