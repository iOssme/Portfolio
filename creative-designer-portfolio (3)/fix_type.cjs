const fs = require('fs');
let content = fs.readFileSync('src/data/projects.ts', 'utf-8');
content = content.replace(/import type { Project } from '.*?';/, "import type { Project } from '../types';");
fs.writeFileSync('src/data/projects.ts', content);
