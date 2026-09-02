const fs = require('fs');

const indexContent = fs.readFileSync('index.html', 'utf8');

const headMatch = indexContent.match(/([\s\S]*?)<nav/);
const navMatch = indexContent.match(/(<nav[\s\S]*?<\/nav>)/);
const footerMatch = indexContent.match(/(<footer[\s\S]*?<\/html>)/);

const head = headMatch[1];
const nav = navMatch[1]
  .replace(/href="#home"/g, 'href="./index.html#home"')
  .replace(/href="#work"/g, 'href="./index.html#work"')
  .replace(/href="#about"/g, 'href="./index.html#about"')
  .replace(/href="#contact"/g, 'href="./index.html#contact"');
const footer = footerMatch[1];

function createPage(id, title, tagline, year, client, timeline, tools, cover, storyBg, storyCh, showcaseHTML) {
  const content = `
${head}
${nav}
  <main class="flex-grow pt-24">
    <article class="w-full">
      <header class="px-6 md:px-12 pt-24 md:pt-32 pb-16">
        <div class="flex items-center gap-4 text-[10px] tracking-[0.3em] opacity-40 uppercase mb-8">
          <a href="./index.html#work" class="hover:opacity-100 transition-opacity">Work</a>
          <span>/</span>
          <span>${title}</span>
        </div>
        <h1 class="text-5xl md:text-[80px] lg:text-[120px] font-black tracking-tighter uppercase leading-[0.85] mb-8">
          ${title}
        </h1>
        <p class="text-xl md:text-2xl font-light italic opacity-80 max-w-4xl mb-16">
          ${tagline}
        </p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-border-subtle">
          <div>
            <span class="block text-[10px] tracking-[0.3em] opacity-40 uppercase mb-2">Role</span>
            <span class="text-sm font-light">UI/UX Designer</span>
          </div>
          <div>
            <span class="block text-[10px] tracking-[0.3em] opacity-40 uppercase mb-2">Client</span>
            <span class="text-sm font-light italic">${client}</span>
          </div>
          <div>
            <span class="block text-[10px] tracking-[0.3em] opacity-40 uppercase mb-2">Timeline</span>
            <span class="text-sm font-light">${timeline}</span>
          </div>
          <div>
            <span class="block text-[10px] tracking-[0.3em] opacity-40 uppercase mb-2">Tools</span>
            <span class="text-sm font-light">${tools}</span>
          </div>
        </div>
      </header>

      <div class="w-full h-[50vh] md:h-[80vh] overflow-hidden p-4 md:p-12 bg-border-subtle border-y border-border-subtle">
        <img src="${cover}" alt="${title}" class="w-full h-full object-contain rounded-xl shadow-2xl">
      </div>

      <section class="px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-border-subtle">
        <div class="md:col-span-4">
          <h2 class="text-[10px] tracking-[0.3em] opacity-40 uppercase">Narrative</h2>
        </div>
        <div class="md:col-span-8 flex flex-col gap-8">
          <p class="text-2xl md:text-4xl leading-[1.3] font-light">
            ${storyBg}
          </p>
          <p class="text-lg md:text-xl font-light opacity-70 max-w-3xl leading-relaxed">
            ${storyCh}
          </p>
        </div>
      </section>

      ${showcaseHTML}

      <div class="px-6 md:px-12 py-24 border-b border-border-subtle">
        <a href="./index.html#work" class="inline-flex items-center gap-3 px-8 py-4 border border-current hover:bg-fg-primary hover:text-bg-primary rounded-full uppercase tracking-[0.2em] text-[10px] font-bold transition-colors duration-500">
          <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Projects
        </a>
      </div>
    </article>
  </main>
${footer}
`;
  fs.writeFileSync(`${id}.html`, content.trim());
}

createPage(
  'rewoodex',
  'REWOODEX',
  'Handcrafted Wood & Resin Art E-Commerce & Brand Identity',
  '2026',
  'Rewoodex',
  '4 Weeks',
  'Figma, Illustrator, Photoshop',
  './assets/1788291998434.png',
  'Helping a mother transition her handmade wood and resin craft into a modern direct-to-consumer (D2C) brand.',
  'Differentiation in the luxury homeware market, communicating tactile material textures online, and accommodating both bespoke commissions and ready-to-ship products.',
  `
      <section class="py-24 md:py-32 border-b border-border-subtle">
        <div class="px-6 md:px-12 mb-16">
          <h3 class="text-[10px] tracking-[0.3em] opacity-40 uppercase mb-6">System & Interface</h3>
        </div>
        <div class="flex flex-col gap-24">
          <div class="w-full">
            <div class="w-full h-[60vh] md:h-[80vh] overflow-hidden border-y border-border-subtle p-4 md:p-12 bg-border-subtle">
              <img src="./assets/1788291998434.png" class="w-full h-full object-contain rounded-xl shadow-2xl">
            </div>
            <div class="px-6 md:px-12 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
              <h4 class="md:col-span-4 text-[10px] tracking-[0.3em] opacity-40 uppercase">Collection Explorer</h4>
              <p class="md:col-span-8 font-light opacity-70 text-lg leading-relaxed">Immersive landing page hero featuring the brand mantra with a seamless collection carousel outlining Artisan Tables, Luminous Mirrors, Resin Clocks, and Kitchen Tools.</p>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full h-[60vh] md:h-[80vh] overflow-hidden border-y border-border-subtle p-4 md:p-12 bg-border-subtle">
              <img src="./assets/rewoodex_images/1788291998340.png" class="w-full h-full object-contain rounded-xl shadow-2xl">
            </div>
            <div class="px-6 md:px-12 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
              <h4 class="md:col-span-4 text-[10px] tracking-[0.3em] opacity-40 uppercase">Product Category Page</h4>
              <p class="md:col-span-8 font-light opacity-70 text-lg leading-relaxed">A focused category hero for Clocks. Highlights brand trust metrics including "300+ Pieces Crafted" and "7+ Years Expertise" in a minimalist, structured layout.</p>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full h-[60vh] md:h-[80vh] overflow-hidden border-y border-border-subtle p-4 md:p-12 bg-border-subtle">
              <img src="./assets/rewoodex_images/1788291998011.png" class="w-full h-full object-contain rounded-xl shadow-2xl">
            </div>
            <div class="px-6 md:px-12 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
              <h4 class="md:col-span-4 text-[10px] tracking-[0.3em] opacity-40 uppercase">Custom Commission Builder</h4>
              <p class="md:col-span-8 font-light opacity-70 text-lg leading-relaxed">Step-by-step custom commission builder interface for bespoke orders.</p>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full h-[60vh] md:h-[80vh] overflow-hidden border-y border-border-subtle p-4 md:p-12 bg-border-subtle">
              <img src="./assets/rewoodex_images/1788291998233.png" class="w-full h-full object-contain rounded-xl shadow-2xl">
            </div>
            <div class="px-6 md:px-12 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
              <h4 class="md:col-span-4 text-[10px] tracking-[0.3em] opacity-40 uppercase">Collateral & Packaging</h4>
              <p class="md:col-span-8 font-light opacity-70 text-lg leading-relaxed">Recycled kraft packaging, branded tape, and signed certificates of authenticity.</p>
            </div>
          </div>
        </div>
      </section>
  `
);

createPage(
  'sehty',
  'Sehty (صحتي)',
  'AI-powered personal health record management platform',
  '2026',
  'Sehty Health Tech',
  '6 Weeks',
  'Figma, React',
  './assets/Sehty/1788283983484.png',
  'Building an intuitive, secure platform for patients to store, manage, and understand their health records using AI.',
  'Ensuring HIPAA-compliant data handling while maintaining a user-friendly, accessible interface for all age groups.',
  `
      <section class="py-24 md:py-32 border-b border-border-subtle">
        <div class="px-6 md:px-12 mb-16">
          <h3 class="text-[10px] tracking-[0.3em] opacity-40 uppercase mb-6">Platform Showcase</h3>
        </div>
        <div class="flex flex-col gap-24">
          <div class="w-full">
            <div class="w-full h-[60vh] md:h-[80vh] overflow-hidden border-y border-border-subtle p-4 md:p-12 bg-border-subtle">
              <img src="./assets/Sehty/1788283983484.png" class="w-full h-full object-contain rounded-xl shadow-2xl">
            </div>
            <div class="px-6 md:px-12 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
              <h4 class="md:col-span-4 text-[10px] tracking-[0.3em] opacity-40 uppercase">Main Dashboard</h4>
              <p class="md:col-span-8 font-light opacity-70 text-lg leading-relaxed">Clean, accessible dashboard providing a centralized vault for medical records, lab results, and AI-driven health insights.</p>
            </div>
          </div>
        </div>
      </section>
  `
);

createPage(
  'at3ema',
  'At3ema (أطعمة)',
  'Home-to-home food delivery platform',
  '2023',
  'At3ema',
  '3 Weeks',
  'Figma, HTML, CSS',
  './assets/At3ema/Home to home,.png',
  'Connecting home cooks with local communities through an authentic, home-cooked food delivery experience.',
  'Creating a dual-sided marketplace interface that feels welcoming to both passionate home chefs and hungry customers.',
  `
      <section class="py-24 md:py-32 border-b border-border-subtle">
        <div class="px-6 md:px-12 mb-16">
          <h3 class="text-[10px] tracking-[0.3em] opacity-40 uppercase mb-6">UI Showcase</h3>
        </div>
        <div class="flex flex-col gap-24">
          <div class="w-full">
            <div class="w-full h-[60vh] md:h-[80vh] overflow-hidden border-y border-border-subtle p-4 md:p-12 bg-border-subtle">
              <img src="./assets/At3ema/Home to home,.png" class="w-full h-full object-contain rounded-xl shadow-2xl">
            </div>
            <div class="px-6 md:px-12 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
              <h4 class="md:col-span-4 text-[10px] tracking-[0.3em] opacity-40 uppercase">Landing Page</h4>
              <p class="md:col-span-8 font-light opacity-70 text-lg leading-relaxed">A warm, inviting hero section featuring high-quality photography and a clear call to action to explore local homemade meals.</p>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full h-[60vh] md:h-[80vh] overflow-hidden border-y border-border-subtle p-4 md:p-12 bg-border-subtle">
              <img src="./assets/At3ema/1788279884727.png" class="w-full h-full object-contain rounded-xl shadow-2xl">
            </div>
          </div>
          <div class="w-full">
            <div class="w-full h-[60vh] md:h-[80vh] overflow-hidden border-y border-border-subtle p-4 md:p-12 bg-border-subtle">
              <img src="./assets/At3ema/1788279884916.png" class="w-full h-full object-contain rounded-xl shadow-2xl">
            </div>
          </div>
        </div>
      </section>
  `
);

console.log("Pages generated");
