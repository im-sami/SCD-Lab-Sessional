import express from "express";
import httpProxy from "http-proxy";

const app = express();
const apiProxy = httpProxy.createProxyServer();

app.all("/menu/*", (req, res) => {
  apiProxy.web(req, res, { target: "http://localhost:3001" });
});

app.all("/orders/*", (req, res) => {
  apiProxy.web(req, res, { target: "http://localhost:3002" });
});

app.all("/inventory/*", (req, res) => {
  apiProxy.web(req, res, { target: "http://localhost:3003" });
});

app.all("/customer/*", (req, res) => {
  apiProxy.web(req, res, { target: "http://localhost:3004" });
});

app.all("/payments/*", (req, res) => {
  apiProxy.web(req, res, { target: "http://localhost:3005" });
});

app.listen(3000, () => {
  console.log("API Gateway on port 3000");
});
