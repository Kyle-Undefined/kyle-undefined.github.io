// Remark plugin: converts Obsidian wiki-link image syntax ![[filename]]
// into standard MDAST image nodes so Astro's image pipeline picks them up.

const WIKI_IMAGE_RE = /!\[\[([^\]]+)\]\]/g;

export default function wikiImagePlugin() {
  return function transformer(tree) {
    transformChildren(tree);
  };
}

// Recursively walk the tree. When a text node contains ![[...]], replace it
// with a sequence of text + image nodes spliced into the parent's children.
function transformChildren(node) {
  if (!Array.isArray(node.children)) return;

  let i = 0;
  while (i < node.children.length) {
    const child = node.children[i];

    if (child.type === 'text' && child.value.includes('![[')) {
      const replacements = splitWikiImages(child.value);
      node.children.splice(i, 1, ...replacements);
      i += replacements.length;
    } else {
      transformChildren(child);
      i++;
    }
  }
}

// Split a text string on ![[filename]] boundaries.
// Returns an array of MDAST text and image nodes.
function splitWikiImages(text) {
  const nodes = [];
  let lastIndex = 0;

  WIKI_IMAGE_RE.lastIndex = 0;
  let match;
  while ((match = WIKI_IMAGE_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }
    nodes.push({
      type: 'image',
      url: './images/' + match[1],
      alt: match[1],
      title: null,
    });
    lastIndex = WIKI_IMAGE_RE.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push({ type: 'text', value: text.slice(lastIndex) });
  }

  return nodes;
}
