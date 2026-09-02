const fs = require('fs');

let indexContent = fs.readFileSync('index.html', 'utf8');

indexContent = indexContent.replace(
  /<div class="mt-4 flex flex-wrap gap-4">\s*<a href="https:\/\/rewoodex-803617416419\.europe-west2\.run\.app\/"[\s\S]*?<\/div>/,
  `<div class="mt-4 flex flex-wrap gap-4">
              <a href="./rewoodex.html" class="inline-flex items-center gap-3 px-6 py-3 bg-fg-primary text-bg-primary rounded-full uppercase tracking-[0.2em] text-[10px] font-bold hover:scale-105 transition-transform duration-300">
                View Case Study <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
              <a href="https://rewoodex-803617416419.europe-west2.run.app/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-6 py-3 border border-current rounded-full uppercase tracking-[0.2em] text-[10px] font-bold hover:scale-105 transition-transform duration-300">
                Live Demo <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
              </a>
            </div>`
);

// For Sehty which didn't have a live demo button, I'll insert it right after the paragraph
indexContent = indexContent.replace(
  /AI-powered personal health record management platform\n\s*<\/p>\n\s*<\/div>/,
  `AI-powered personal health record management platform
            </p>
            <div class="mt-4 flex flex-wrap gap-4">
              <a href="./sehty.html" class="inline-flex items-center gap-3 px-6 py-3 bg-fg-primary text-bg-primary rounded-full uppercase tracking-[0.2em] text-[10px] font-bold hover:scale-105 transition-transform duration-300">
                View Case Study <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>`
);

indexContent = indexContent.replace(
  /<div class="mt-4 flex flex-wrap gap-4">\s*<a href="https:\/\/at3ema-website\.pages\.dev\/"[\s\S]*?<\/div>/,
  `<div class="mt-4 flex flex-wrap gap-4">
              <a href="./at3ema.html" class="inline-flex items-center gap-3 px-6 py-3 bg-fg-primary text-bg-primary rounded-full uppercase tracking-[0.2em] text-[10px] font-bold hover:scale-105 transition-transform duration-300">
                View Case Study <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
              <a href="https://at3ema-website.pages.dev/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-6 py-3 border border-current rounded-full uppercase tracking-[0.2em] text-[10px] font-bold hover:scale-105 transition-transform duration-300">
                Live Demo <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
              </a>
            </div>`
);

fs.writeFileSync('index.html', indexContent);
console.log("index.html updated");
