function flipText(text) {
  return text.split('').reverse().join('');
}

function flipAllText() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while (node = walker.nextNode()) {
    node.nodeValue = flipText(node.nodeValue);
  }
}

flipAllText();