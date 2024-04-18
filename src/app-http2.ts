import http2 from 'http2'
import fs from 'fs'
import 'dotenv/config'

const port = process.env.SERVER_PORT;

const server = http2.createSecureServer({
  key: fs.readFileSync('./keys/server.key'),
  cert: fs.readFileSync('./keys/server.crt')
}, (req, res) => {
  res.write(req.url);
  res.end();
});

server.listen(port, () => [
  console.log(`Server running on port ${port}`)
]);
