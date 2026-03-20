const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'svg', 'avif'];

function normalizeExtension(ext = '') {
  return String(ext)
    .trim()
    .toLowerCase()
    .replace(/^\./, '');
}

function isImageExtension(ext = '') {
  return IMAGE_EXTENSIONS.includes(normalizeExtension(ext));
}

function getImageExtensions() {
  return [...IMAGE_EXTENSIONS];
}

module.exports = {
  normalizeExtension,
  isImageExtension,
  getImageExtensions
};
