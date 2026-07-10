const fs = require('fs');
let content = fs.readFileSync('src/App.vue', 'utf8');
content = content.replace(/src="assets\/images\//g, 'src="/src/assets/images/');
fs.writeFileSync('src/App.vue', content, 'utf8');
console.log('Image paths fixed successfully');