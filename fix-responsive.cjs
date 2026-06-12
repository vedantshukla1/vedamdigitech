const fs = require('fs');
const path = require('path');
const dir = './src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Fix fixed sidebars
  content = content.replace(/className="w-64 bg-/g, 'className="w-full md:w-64 bg-');
  content = content.replace(/className="w-80 bg-/g, 'className="w-full md:w-80 bg-');
  content = content.replace(/className="w-80 border-r/g, 'className="w-full md:w-80 border-r');

  // Fix fixed heights on split containers
  content = content.replace(/flex-col md:flex-row h-\[600px\]/g, 'flex-col md:flex-row h-auto md:h-[600px]');
  content = content.replace(/flex-col md:flex-row h-\[700px\]/g, 'flex-col md:flex-row h-auto md:h-[700px]');
  content = content.replace(/flex-col md:flex-row h-\[800px\]/g, 'flex-col md:flex-row h-auto md:h-[800px]');

  // Fix button wraps
  content = content.replace(/className="flex gap-4"/g, 'className="flex flex-wrap gap-4"');
  content = content.replace(/className="flex gap-4 /g, 'className="flex flex-wrap gap-4 ');

  // Fix flex wrappers that don't wrap and cause horizontal overflow
  content = content.replace(/className="flex gap-8/g, 'className="flex flex-wrap gap-8');

  // Specific agent pages chat interface height on mobile
  content = content.replace(/className="flex-1 flex flex-col bg-white relative"/g, 'className="flex-1 flex flex-col min-h-[500px] md:h-full bg-white relative"');
  content = content.replace(/className="flex-1 flex flex-col h-full bg-white relative"/g, 'className="flex-1 flex flex-col min-h-[500px] md:h-full bg-white relative"');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed:', file);
  }
});
