const console = require("node:console");
const http = require("node:http");

http
  .createServer(function (req, res) {
    let { url, headers, method } = req;
    let body = {};
    console.log(url, method);

    req
      .on("data", (data) => {
        console.log(data);
        console.log(data.toString());

        data
          .toString()
          .split("&")
          .map((item) => {
            let s = item.split("=");
            let key = s[0];
            let value = s[1];
            body[key] = value;
          });
      })
      .on("end", () => {
        console.log(body);
      })
      .on("error", (err) => {
        res.statusCode = 400;
        console.log(err);
      });

    res.writeHead(200, { "Content-Type": "text/plain" });
    // req.setHeader('Content')
    res.end("홍홍홍");
  })
  .listen(8080, function () {
    console.log("server on : 8080port");
  });
