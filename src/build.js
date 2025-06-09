const fs = require('fs');
const app = require('./app');
const request = require('supertest');

(async () => {
  const res = await request(app).get('/');
  fs.mkdirSync('dist', { recursive: true });
  fs.writeFileSync('dist/index.html', res.text);
  console.log('Static HTML generated!');
})();