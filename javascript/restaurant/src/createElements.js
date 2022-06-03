function createHTMLelement(tag, id, classes, content) {
  const element = document.createElement(`${tag}`);
  if (id) element.id = id;
  if (classes) {
    for (const _class in classes) element.classList.add(_class);
  }
  if (content) element.innerHTML = content;
  return element;
}

export { createHTMLelement };
