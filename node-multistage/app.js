const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Multi-Stage Docker Demo</title>
      </head>
      <body style="font-family: Arial; text-align: center; margin-top: 100px;">
        <h1>Hello from Node.js!</h1>
        <h2>Multi-Stage Docker Build</h2>
        <p>This app runs using a Distroless image.</p>
        <p>Learning DevOps hands-on!</p>
      </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});