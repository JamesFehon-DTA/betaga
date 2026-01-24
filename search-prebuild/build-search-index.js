const fs = require('fs');
const lunr = require('lunr');

/**
 * SETTINGS
 * ------------------------------------------------------------------
 * OUTPUT_FILENAME:
 *   - Provide only the base filename.
 *   - The script ALWAYS writes to both the Jekyll build directory
 *     and the project root.
 *   - Jekyll will NOT automatically reindex, so regenerate the index
 *     whenever content changes.
 *
 * DOC_BOOSTS:
 *   - Per-document boost rules.
 *   - Match a field/value pair and apply a boost when adding to Lunr.
 *
 * FIELD_CONFIG:
 *   - Jekyll fields to extract.
 *   - kind: 'text' → stripHtml applied
 *   - kind: 'raw'  → used as-is (URL only)
 */

const OUTPUT_FILENAME = {
  index: 'search_index.json',
  docs:  'search_docs.json'
};

const OUTPUT_PATHS = {
  index: [`_site/${OUTPUT_FILENAME.index}`, OUTPUT_FILENAME.index],
  docs:  [`_site/${OUTPUT_FILENAME.docs}`,  OUTPUT_FILENAME.docs]
};

const DOC_BOOSTS = [
  { field: 'type', value: 'Capability', boost: 2 }
];

const FIELD_CONFIG = [
  { key: 'title',       kind: 'text' },
  { key: 'excerpt',     kind: 'text' },
  { key: 'description', kind: 'text' },
  { key: 'url',         kind: 'raw'  },
  { key: 'domain',      kind: 'text' },
  { key: 'type',        kind: 'text' },
  { key: 'content',     kind: 'text' }
];

/**
 * HELPERS
 * ------------------------------------------------------------------
 */

function splitCamelAndAcronyms(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z][a-z]+)([A-Z]{2,})/g, '$1 $2');
}

function govTokenizer(input) {
  if (!input) return [];

  const text = input.toString();
  const camel = splitCamelAndAcronyms(text);
  const parts = camel.split(/[\s,.;:/?!()_\-]+/).filter(Boolean);

  const tokens = [];
  tokens.push(new lunr.Token(text.toLowerCase()));

  parts.forEach(p => tokens.push(new lunr.Token(p.toLowerCase())));

  return tokens;
}

function stripHtml(html) {
  return (html || '').replace(/<[^>]+>/g, ' ');
}

/**
 * LOAD RAW DATA
 * ------------------------------------------------------------------
 */

const raw = JSON.parse(fs.readFileSync('_site/search_data.json', 'utf8'));

/**
 * MAP DOCUMENTS
 * ------------------------------------------------------------------
 * Uses FIELD_CONFIG to build a clean, normalised doc object.
 */

const docs = raw.map((doc, i) => {
  const mapped = { id: i.toString() };

  FIELD_CONFIG.forEach(field => {
    const value = doc[field.key] || '';

    if (field.kind === 'raw') {
      mapped[field.key] = value;
    } else {
      mapped[field.key] = stripHtml(value);
    }
  });

  return mapped;
});

/**
 * BUILD INDEX
 * ------------------------------------------------------------------
 */

const idx = lunr(function () {
  this.ref('url');

  this.field('title',       { boost: 10 });
  this.field('description', { boost: 5 });
  this.field('domain',      { boost: 3 });
  this.field('content');

  this.tokenizer = govTokenizer;

  docs.forEach(d => {
    if (d['site-search'] === false) return;

    const boostRule = DOC_BOOSTS.find(rule => d[rule.field] === rule.value);

    if (boostRule) {
      this.add(d, { boost: boostRule.boost });
    } else {
      this.add(d);
    }
  });
});

/**
 * WRITE OUTPUT
 * ------------------------------------------------------------------
 * Writes to both the Jekyll build directory and the project root.
 */

OUTPUT_PATHS.index.forEach(path =>
  fs.writeFileSync(path, JSON.stringify(idx))
);

OUTPUT_PATHS.docs.forEach(path =>
  fs.writeFileSync(path, JSON.stringify(docs))
);
