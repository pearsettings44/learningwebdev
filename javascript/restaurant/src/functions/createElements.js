function createHTMLelement(tag, id, classes, content) {
  const element = document.createElement(`${tag}`);
  if (id) element.id = id;
  if (classes) {
    for (const index in classes) element.classList.add(classes[index]);
  }
  if (content) element.innerHTML = content;
  return element;
}

export { createHTMLelement };
