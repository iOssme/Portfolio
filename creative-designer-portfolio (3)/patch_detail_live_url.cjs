const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

// Ensure ArrowUpRight is imported if we want to use it
if (!content.includes('ArrowUpRight')) {
    content = content.replace(/import \{([^}]+)\}\s*from\s*'lucide-react';/, "import { $1, ArrowUpRight } from 'lucide-react';");
}

const targetTagline = `<p className="text-xl md:text-2xl font-light italic opacity-80 max-w-4xl mb-16">
          {project.tagline}
        </p>`;

const replacementTagline = `<p className={\`text-xl md:text-2xl font-light italic opacity-80 max-w-4xl \${project.liveUrl ? 'mb-8' : 'mb-16'}\`}>
          {project.tagline}
        </p>
        
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-border-subtle hover:bg-fg-primary hover:text-bg-primary rounded-full uppercase tracking-[0.2em] text-[10px] font-bold transition-colors duration-500 mb-16"
          >
            Visit Live Demo <ArrowUpRight className="w-4 h-4" />
          </a>
        )}`;

if (content.includes(targetTagline)) {
    content = content.replace(targetTagline, replacementTagline);
    fs.writeFileSync('src/pages/ProjectDetail.tsx', content);
    console.log("Patched ProjectDetail.tsx");
} else {
    console.log("Target tagline not found.");
}
