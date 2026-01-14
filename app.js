const express = require("express");
const https = require("https");
const http = require("http");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

/**
 * Health endpoint (used by Docker/K8s/load balancers)
 */
app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    service: "url-status-checker"
  });
});

/**
 * API to check URL status
 * Example: /check?url=https://google.com
 */
app.get("/check", (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).json({ error: "URL is required" });
  }

  const startTime = Date.now();
  const client = targetUrl.startsWith("https") ? https : http;

  const request = client.get(targetUrl, (response) => {
    const responseTime = Date.now() - startTime;

    res.json({
      url: targetUrl,
      status: "UP",
      statusCode: response.statusCode,
      responseTimeMs: responseTime
    });
  });

  request.on("error", () => {
    res.json({
      url: targetUrl,
      status: "DOWN"
    });
  });

  request.setTimeout(5000, () => {
    request.destroy();
    res.json({
      url: targetUrl,
      status: "TIMEOUT"
    });
  });
});

app.listen(PORT, () => {
  console.log(`URL Status Checker running on port ${PORT}`);
});
