//
import { createServer } from "node:http";
import { parse } from "url";

const server = createServer((req, res) => {
  const reqUrl = parse(req.url!, true);

  if (reqUrl.pathname == "/translate" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ result: "moro" }));
  }

  res.statusCode = 404;
  res.end("🤪");
});

server.listen(8000, "localhost", () => {
  console.log("server up");
});
