const fs = require('fs');
let content = fs.readFileSync('src/data/projects.ts', 'utf8');
content = content.replace(/\}\}\n\s*\];/, '}\n];');
fs.writeFileSync('src/data/projects.ts', content);
