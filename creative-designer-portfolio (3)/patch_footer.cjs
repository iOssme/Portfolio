const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

content = content.replace('© 2024 J. DOE', '© 2026 ASER AHMED KHALED');
content = content.replace(/hello@example\.com/g, 'aserahmad2586@gmail.com');

fs.writeFileSync('src/components/Footer.tsx', content);
console.log("Patched Footer.tsx");
