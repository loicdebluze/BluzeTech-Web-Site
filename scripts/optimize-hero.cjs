const sharp = require('sharp');
const path = require('path');

const src = path.join(__dirname, '..', 'public', 'images', 'hero-bg.jpg');
const dest = path.join(__dirname, '..', 'public', 'images', 'hero-bg.webp');

sharp(src)
  .webp({ quality: 82 })
  .toFile(dest)
  .then(info => console.log('WebP généré :', info))
  .catch(err => console.error(err));
