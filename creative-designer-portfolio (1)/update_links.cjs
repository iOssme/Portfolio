const fs = require('fs');

// Update types.ts
let typesContent = fs.readFileSync('src/types.ts', 'utf8');
if (!typesContent.includes('liveUrl?: string;')) {
    typesContent = typesContent.replace('packaging?: {', 'liveUrl?: string;\n  packaging?: {');
    fs.writeFileSync('src/types.ts', typesContent);
}

// Update projects.ts
let projectsContent = fs.readFileSync('src/data/projects.ts', 'utf8');

// For rewoodex
if (!projectsContent.includes('liveUrl: \'https://rewoodex-803617416419.europe-west2.run.app/\'')) {
    projectsContent = projectsContent.replace(/id:\s*'rewoodex',/, "id: 'rewoodex',\n    liveUrl: 'https://rewoodex-803617416419.europe-west2.run.app/',");
}

// For at3ema
if (!projectsContent.includes('liveUrl: \'https://at3ema-website.pages.dev/\'')) {
    projectsContent = projectsContent.replace(/id:\s*'at3ema',/, "id: 'at3ema',\n    liveUrl: 'https://at3ema-website.pages.dev/',");
}

fs.writeFileSync('src/data/projects.ts', projectsContent);

console.log("Types and projects.ts updated.");
