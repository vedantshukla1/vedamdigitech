const fs = require('fs');
const path = require('path');

const dirsToProcess = [
  path.join(__dirname, 'src', 'pages'),
  path.join(__dirname, 'src', 'components')
];

// Files we have already converted manually to the classic theme or want to skip
const skipFiles = [
  'Hero.jsx', 'Navbar.jsx', 'Services.jsx', 'Portfolio.jsx', 'Contact.jsx', 'CursorGlow.jsx'
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace common old tech theme classes with classic elegance theme classes
  
  // Backgrounds
  content = content.replace(/bg-gray-50/g, 'bg-vedam-cream');
  content = content.replace(/bg-blue-600/g, 'bg-vedam-charcoal');
  content = content.replace(/bg-blue-50/g, 'bg-vedam-cream');
  content = content.replace(/bg-blue-100/g, 'bg-vedam-gold\/20');
  content = content.replace(/bg-indigo-100/g, 'bg-vedam-gold\/20');
  content = content.replace(/bg-indigo-600/g, 'bg-vedam-charcoal');
  content = content.replace(/bg-vedam-blue/g, 'bg-vedam-charcoal');
  content = content.replace(/bg-black/g, 'bg-vedam-charcoal');

  // Text colors
  content = content.replace(/text-blue-600/g, 'text-vedam-gold');
  content = content.replace(/text-indigo-600/g, 'text-vedam-gold');
  content = content.replace(/text-blue-800/g, 'text-vedam-charcoal');
  content = content.replace(/text-gray-900/g, 'text-vedam-charcoal');
  content = content.replace(/text-black/g, 'text-vedam-charcoal');
  
  // Borders
  content = content.replace(/border-blue-600/g, 'border-vedam-gold');
  content = content.replace(/border-blue-500/g, 'border-vedam-gold');
  content = content.replace(/border-indigo-500/g, 'border-vedam-gold');
  content = content.replace(/border-blue-100/g, 'border-vedam-gold\/20');

  // Hover states
  content = content.replace(/hover:bg-blue-700/g, 'hover:bg-black');
  content = content.replace(/hover:bg-gray-900/g, 'hover:bg-black');
  content = content.replace(/hover:text-blue-600/g, 'hover:text-vedam-gold');

  // Animations (slow down framer motion if we find duration: 0.3)
  content = content.replace(/duration: 0.3/g, 'duration: 0.8');

  fs.writeFileSync(filePath, content, 'utf8');
}

function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      traverseDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      if (skipFiles.includes(file)) {
        console.log(`Skipping ${file}...`);
        continue;
      }
      console.log(`Processing ${file}...`);
      processFile(fullPath);
    }
  }
}

dirsToProcess.forEach(dir => {
  if (fs.existsSync(dir)) {
    traverseDirectory(dir);
  }
});

console.log('Update complete.');
