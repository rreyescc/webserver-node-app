import http from 'http'
import fs from 'fs'
import 'dotenv/config'

const port = process.env.SERVER_PORT;

const server = http.createServer((req, res) => {
  //res.write(req.url);
  //res.end();

  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write(`<h1>Hello ${req.url}</h1>`);
  // res.end();

//   const data = { name: 'Rafael', age: 35 };
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   //res.write(JSON.stringify(data));
//   res.end(JSON.stringify(data))
//  // res.end();

  //console.log("url: " + req.url);
  
  // if(req.url === '/') {
  //   const content = fs.readFileSync('./public/index.html', 'utf-8');
  //   res.writeHead(200, { 'Content-Type': 'text/html' });
  //   //res.write(content);
  //   res.end( content );
  // } else {
  //   res.writeHead(404, { 'Content-Type': 'text/html' });
  //   res.end("Not Found");
  // }

  // const url = req.url || '/';
  // const fileExtension = url.split('.').pop();
  // const fileType = fileExtension === "/" ? "html" : url.split('.').pop();

  // console.log({ url, fileExtension, fileType });

  // const contentType = {
  //   js: 'application/js',
  //   css: 'text/css',
  //   html: 'text/html'
  // }

  //let filePath;

  // if(url === "/") {
  //   filePath = `./public${url}index.html`;
  // } else {
  //   filePath = `./public${url}`;
  // }

  // const filePath = url === "/" ? `./public${url}index.html` : `./public${url}`;

  // const content = fs.readFileSync(filePath, 'utf-8');
  // res.writeHead(200, { 'Content-Type': contentType[fileType] });






  // switch(fileType) {
  //   case '/':
  //     const htmlContent = fs.readFileSync('./public/index.html', 'utf-8');
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end( htmlContent );
  //     break;
  //   case 'css':
  //     const cssFilePath = `./public${url}`;
  //     console.log("css------>" + cssFilePath);
  //     const cssContent = fs.readFileSync(cssFilePath, 'utf-8');
  //     res.writeHead(200, { 'Content-Type': 'text/css' });
  //     res.end( cssContent );
  //     break;
  //   case 'js':
  //     const jsFilePath = `./public${url}`;
  //     console.log("js------>" + jsFilePath);
  //     const jsContent = fs.readFileSync(jsFilePath, 'utf-8');
  //     res.writeHead(200, { 'Content-Type': 'application/javascript' });
  //     res.end( jsContent );
  //     break;
  //   default:
  //     res.writeHead(404, { 'Content-Type': 'text/html' });
  //     res.end("Not Found");
  // }

});

//console.log(``)

server.listen(port, () => [
  console.log(`Server running on port ${port}`)
]);
