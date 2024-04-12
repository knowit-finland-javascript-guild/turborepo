import { dir } from "node:console";
import { createServer } from "node:http";
import { parse } from "url";
import { translate } from "utility-library";

const server = createServer((req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*" /* @dev First, read about security */,
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    /** add other headers as per requirement */
  };

  if (req.method === "OPTIONS") {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  res.setHeader(
    "Access-Control-Allow-Origin",
    "*",
  ); /* @dev First, read about security */
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Max-Age", 2592000); // 30 days
  res.setHeader("Access-Control-Allow-Headers", "content-type"); // Might be helpful

  const reqUrl = parse(req.url, true);

  if (reqUrl.pathname == "/translate" && req.method === "GET") {
    const input = reqUrl.query.source ?? "";
    const result = translate(input);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(JSON.stringify({ result: translate(input) }));
    return;
  }

  res.statusCode = 404;
  res.end("🤪");
});

server.listen(9999, "localhost", () => {
  console.log("server up");
});
