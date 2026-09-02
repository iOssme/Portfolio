const fs = require('fs');

const dataPath = '/app/applet/src/data/projects.ts';
let content = fs.readFileSync(dataPath, 'utf8');

const monolithRegex = /\{\s*id:\s*'monolith'[\s\S]*?(?=\}\s*\];)/;

const sehtyProject = `{
    id: 'sehty',
    title: 'Sehty (صحتي)',
    tagline: 'AI-powered personal health record management platform',
    category: 'Digital Health, UI/UX',
    year: '2024',
    role: 'Lead Designer',
    client: 'Sehty, Inc.',
    timeline: 'Ongoing',
    tools: ['Figma', 'React Native', 'AI OCR'],
    coverImage: '/Sehty/1788283983484.png',
    story: {
      background: 'Sehty – VitalArchive (صحتي) is an AI-powered personal health record management platform and digital health ecosystem. It enables patients to securely scan, digitize, and organize unstructured medical records into an accessible and structured digital vault.',
      challenges: 'Up to 37%–40% of medical tests are repeated due to lost documents. 19% of emergency department fatalities stem from inadequate access to vital baseline patient history. Misdiagnosis due to fragmented records causes over 800,000 fatalities annually.'
    },
    logoConcept: {
      description: 'An interconnected geometric "S" and lifeline ribbon blending deep cyan and green gradients, symbolizing continuity of care, vitality, and security. Bilingual Support: Seamless dual-script interface (Arabic and English).',
      image: '/Sehty/1788283983484.png'
    },
    colors: [
      { name: 'Deep Medical Jade', hex: '#4BA672', rgb: 'RGB(75, 166, 114)' },
      { name: 'Clinical Sage', hex: '#63A680', rgb: 'RGB(99, 166, 128)' },
      { name: 'Soft Mint Tint', hex: '#8FBFA4', rgb: 'RGB(143, 191, 164)' },
      { name: 'Soft Mint Light', hex: '#BFD9CA', rgb: 'RGB(191, 217, 202)' },
      { name: 'Off-White Canvas', hex: '#F2F2F2', rgb: 'RGB(242, 242, 242)' }
    ],
    showcase: [
      {
        title: 'Color Palette & Typography',
        description: 'Built around calming and therapeutic green tones, the design minimizes cognitive overload during high-stress medical moments with clean cards, clear typography, and recognizable icon badges.',
        image: '/Sehty/AdobeColor-My Color Theme (2).jpeg'
      },
      {
        title: 'Main Dashboard & Vault',
        description: 'At-a-glance vitals & categorization. Prominent "Scan New Document" banner, Quick Filters (Cardiology, Pediatrics, Lab), and interactive ECG / Vitals monitor cards.',
        image: '/Sehty/1788283983484.png'
      },
      {
        title: 'Onboarding & Capture',
        description: 'Zero-friction digitization. AI-Powered Scanning modal with real-time edge detection and OCR data extraction.',
        image: '/Sehty/_storage_emulated_0_Android_data_com.miui.gallery_cache_SecurityShare_1788283983361.png'
      }
    ]
  }`;

if (monolithRegex.test(content)) {
    content = content.replace(monolithRegex, sehtyProject);
    fs.writeFileSync(dataPath, content);
    console.log("Successfully replaced MONOLITH with Sehty");
} else {
    console.log("Could not find MONOLITH project in file");
}
