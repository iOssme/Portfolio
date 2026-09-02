const fs = require('fs');

function getContrastText(hex) {
  const rgb = parseInt(hex.replace('#', ''), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >>  8) & 0xff;
  const b = (rgb >>  0) & 0xff;
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma < 128 ? '#ffffff' : '#000000';
}

function generatePaletteHTML(colors) {
  let html = `
      <!-- Interactive Color Palette -->
      <section class="px-6 md:px-12 py-24 md:py-32 border-b border-border-subtle">
        <h3 class="text-[10px] tracking-[0.3em] opacity-40 uppercase mb-8">Interactive System Swatches</h3>
        <div class="flex flex-col sm:flex-row gap-2 h-auto sm:h-32">`;
  
  colors.forEach(c => {
    const textColor = getContrastText(c.hex);
    html += `
          <div class="flex-1 flex items-end p-4 group hover:flex-[2] transition-all cursor-crosshair min-h-[100px]" style="background-color: ${c.hex};">
            <div class="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-[10px] font-bold uppercase mb-1" style="color: ${textColor};">${c.name}</span>
              <span class="text-[9px] tracking-widest" style="color: ${textColor};">${c.hex}</span>
            </div>
          </div>`;
  });
  
  html += `
        </div>
      </section>`;
  return html;
}

const rewoodexColors = [
  { name: 'Resin Amber Gold', hex: '#BF9926' },
  { name: 'Olive Ochre', hex: '#8C711F' },
  { name: 'Taupe Woodsmoke', hex: '#A68C76' },
  { name: 'Deep Espresso Walnut', hex: '#26150A' },
  { name: 'Papyrus Linen', hex: '#F2EFEB' }
];

const sehtyColors = [
  { name: 'Deep Medical Teal', hex: '#0A5C5A' },
  { name: 'Vibrant Aqua', hex: '#14918E' },
  { name: 'Clinical White', hex: '#E8F6F6' },
  { name: 'Cool Gray', hex: '#64748B' },
  { name: 'Charcoal Slate', hex: '#1A202C' }
];

const at3emaColors = [
  { name: 'Saffron Red', hex: '#E04A22' },
  { name: 'Golden Yolk', hex: '#F9A01B' },
  { name: 'Dough White', hex: '#F8F5F0' },
  { name: 'Warm Spice', hex: '#8A5A44' },
  { name: 'Roasted Bean', hex: '#2C1A14' }
];

function injectPalette(file, colors) {
  let content = fs.readFileSync(file, 'utf8');
  const paletteHTML = generatePaletteHTML(colors);
  
  const targetRegex = /<\/section>\s*<section class="py-24 md:py-32/;
  
  if (targetRegex.test(content)) {
    content = content.replace(targetRegex, '</section>\n' + paletteHTML + '\n      <section class="py-24 md:py-32');
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  } else {
    console.log(`Could not find target insertion point in ${file}`);
  }
}

injectPalette('rewoodex.html', rewoodexColors);
injectPalette('sehty.html', sehtyColors);
injectPalette('at3ema.html', at3emaColors);
