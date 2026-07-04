const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace arrow function implicit return with explicit block
  const original = 'useEffect(() => window.scrollTo(0, 0), []);';
  const fixed = 'useEffect(() => { window.scrollTo(0, 0); }, []);';
  
  if (content.includes(original)) {
    content = content.replace(original, fixed);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${path.basename(filePath)}`);
  }
}

function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      traverseDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

traverseDirectory(dir);
console.log('UseEffect fix complete.');
