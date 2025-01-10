import http from "http";
import fs from "fs/promises";
import path from "path";
import url from "url";

const PORT = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (request, response) => {
  if (request.method === "GET") {
    let filePath;
    if (request.url === "/") {
      filePath = path.join(__dirname, "public", "index.html");
    }

    const data = await fs.readFile(filePath);
    response.setHeader("Content-Type", "text/html");
    response.write(data);
    response.end();
  } else {
    throw new Error("Method request not allowed");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
