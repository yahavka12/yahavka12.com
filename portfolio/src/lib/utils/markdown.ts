import type { TokenizerAndRendererExtension, Token } from 'marked';

export const SparklesHighlightTokenizerExtension: TokenizerAndRendererExtension = {
  name: 'sparklesHighlight',
  // 'inline' looks for matches within a paragraph or other blocks
  level: 'inline',
  start(src: string) {
    // Marks the start of a match
    return src.indexOf('@@');
  },
  tokenizer(src: string) {
    // Will match anything between @@ and @@. e.g. @@sparkle@@
    const rule = /^\@\@(.*?)\@\@/;
    const match = rule.exec(src);
    if (match) {
      return {
        type: 'sparklesHighlight',
        raw: match[0],
        text: match[1],
        color: 'secondary'
      };
    }
  },
  renderer(token: Token) {
    // This is the HTML that will be generated for the token
    // ⚠️ Only applies to the generated RSS file
    if ('text' in token) {
      return `<span>${token.text}</span>`;
    }
    return '';
  }
};

export const MarkerHighlightTokenizerExtension: TokenizerAndRendererExtension = {
  name: 'markerHighlight',
  level: 'inline',
  start(src: string) {
    return src.indexOf('==');
  },
  tokenizer(src: string) {
    // Will match anything between == and == e.g. ==highlight==
    const rule = /^\=\=(.*?)\=\=/;
    const match = rule.exec(src);
    if (match) {
      return {
        type: 'markerHighlight',
        raw: match[0],
        text: match[1]
      };
    }
  },
  renderer(token: Token) {
    // This is the HTML that will be generated for the token
    // ⚠️ Only applies to the generated RSS file
    if ('text' in token) {
      return `<span>${token.text}</span>`;
    }
    return '';
  }
};