const fs = require('fs');
const path = require('path');
const dir = './src';

function walkDir(d) {
  let results = [];
  const list = fs.readdirSync(d);
  list.forEach(file => {
    const filePath = path.join(d, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(filePath));
    } else if (file.endsWith('.jsx')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walkDir(dir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Add dummy alt="Image" to any <img that lacks an alt tag
  // Note: this regex finds <img ...> but doesn't add alt if it's already there
  content = content.replace(/<img((?:(?!\balt\b)[^>])+)>/g, '<img alt="Vedam Digitech"$1>');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log('Added alt tags to:', file);
  }
});
