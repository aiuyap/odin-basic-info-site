// import http from "http";
// import fs from "fs/promises";
const path = require("path");
// import url from "url";
const express = require("express");

const PORT = 8080;
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// SERVER USING BUILT IN HTTP SERVER

// const server = http.createServer(async (request, response) => {
//   try {
//     if (request.method === "GET") {
//       let filePath;
//       if (request.url === "/") {
//         filePath = path.join(__dirname, "public", "index.html");
//       } else if (request.url === "/about") {
//         filePath = path.join(__dirname, "public", "about.html");
//       } else if (request.url === "/contact-me") {
//         filePath = path.join(__dirname, "public", "contact-me.html");
//       } else {
//         filePath = path.join(__dirname, "public", "404.html");
//         response.statusCode = 400;
//       }

//       if (request.url === "/style.css") {
//         response.writeHead(200, { "Content-Type": "text/css" });
//         filePath = path.join(__dirname, "public", "style.css");
//       } else {
//         response.setHeader("Content-Type", "text/html");
//       }

//       const data = await fs.readFile(filePath);

//       response.write(data);
//       response.end();
//     } else {
//       throw new Error("Method request not allowed");
//     }
//   } catch (error) {
//     response.writeHead(500, { "Content-Type": "text/plain" });
//     response.end("Server Error");
//   }
// });

// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
