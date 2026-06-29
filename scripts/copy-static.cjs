const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'BluzeTech-Web-Site');
const dest = path.join(__dirname, '..', 'docs');
const exclude = new Set(['index.html', 'Archives', 'CSS.txt', '.vscode']);
const excludeExt = new Set(['.mp4', '.webm']);

function copyDir(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  for (const item of fs.readdirSync(from)) {
    if (exclude.has(item)) continue;
    if (excludeExt.has(path.extname(item).toLowerCase())) continue;
    const srcPath = path.join(from, item);
    const destPath = path.join(to, item);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(src, dest);
console.log('Pages statiques copiées dans docs/');

const prestigeSrc = path.join(__dirname, '..', 'prestige-vehicules-react');
const prestigeDest = path.join(__dirname, '..', 'docs', 'prestige-vehicules-react');
const excludePrestige = new Set(['node_modules']);
function copyPrestige(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  for (const item of fs.readdirSync(from)) {
    if (excludePrestige.has(item)) continue;
    const s = path.join(from, item);
    const d = path.join(to, item);
    if (fs.statSync(s).isDirectory()) copyPrestige(s, d);
    else fs.copyFileSync(s, d);
  }
}
if (fs.existsSync(prestigeSrc)) {
  copyPrestige(prestigeSrc, prestigeDest);
  console.log('App prestige copiée dans docs/prestige-vehicules-react/');
}

const cnameRoot = path.join(__dirname, '..', 'CNAME');
const cnameDest = path.join(__dirname, '..', 'docs', 'CNAME');
if (fs.existsSync(cnameRoot)) {
  fs.copyFileSync(cnameRoot, cnameDest);
  console.log('CNAME copié dans docs/');
}

const nojekyll = path.join(__dirname, '..', 'docs', '.nojekyll');
fs.writeFileSync(nojekyll, '');
console.log('.nojekyll créé dans docs/');
