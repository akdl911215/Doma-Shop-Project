const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

// const http = require("http");
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Tyle': 'text/plain'});
//     res.write('Hello World!!!');
//     res.end();
// }).listen(PORT, () => console.log(`Listening on 'http://localhost:${PORT}`));
// router.listen(8080, () => console.log("Server is running"));

app.listen(PORT, () => console.log(`Listening on 'http://localhost:${PORT}`));

app.get("/", (req, res) => res.send('Welcome my home'))
