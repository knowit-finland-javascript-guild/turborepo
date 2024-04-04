"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
var node_http_1 = require("node:http");
var url_1 = require("url");
var server = (0, node_http_1.createServer)(function (req, res) {
    var reqUrl = (0, url_1.parse)(req.url, true);
    if (reqUrl.pathname == "/translate" && req.method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ result: "moro" }));
    }
    res.statusCode = 404;
    res.end("🤪");
});
server.listen(8000, "localhost", function () {
    console.log("server up");
});
