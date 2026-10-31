const http = require("http");

const PORT = 3000;
const HOST = "0.0.0.0";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My First Node.js App</title>
      </head>
      <body style="font-family: Arial; text-align: center; margin-top: 100px;">
        <h1>Hello from Node.js!</h1>
        <p>This application is running inside a Docker container.</p>
        <p>Built while learning DevOps.</p>
      </body>
    </html>
  `);
});

server.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
