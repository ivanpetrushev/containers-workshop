const http = require('http');

const instance_id = Math.random() * 1000000;
const server = http.createServer((req, res) => {
  let body = '';
  const execution_id = Math.random() * 1000000;
  console.log(`Headers: ${JSON.stringify(req.headers)}`);
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log(`Body: ${JSON.stringify(req?.body)}`);

  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    console.log(`Body: ${body}`);
    res.writeHead(200, { 
      'Content-Type': 'text/plain',
      // add CORS headers
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.write("hello!\n");
    res.write("bye!\n");
    res.write(`instance_id: ${instance_id}\n`);
    res.write(`execution_id: ${execution_id}\n`);
    res.end();
  });
});

server.listen(80);
console.log('server running on port 80');
console.log(`DB credentials from env: POSTGRES_HOST=${process.env.POSTGRES_HOST} POSTGRES_PORT=${process.env.POSTGRES_PORT} POSTGRES_USER=${process.env.POSTGRES_USER} POSTGRES_PASSWORD=${process.env.POSTGRES_PASSWORD} POSTGRES_DB=${process.env.POSTGRES_DB}`)