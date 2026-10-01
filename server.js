import express from "express";

const app = express();
app.use(express.json());
// Root route for MCP discovery
app.get("/", (req, res) => {
  res.send("MCP server is running");
});
// Echo Tool
app.post("/mcp/tool/echo", (req, res) => {
  const { input } = req.body;
  res.json({ output: `Echo: ${input}` });
});

// Math Tool
app.post("/mcp/tool/add", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

// Weather Tool (stubbed demo)
app.post("/mcp/tool/weather", (req, res) => {
  const { city } = req.body;
  res.json({ forecast: `Sunny in ${city}` });
});

app.listen(3000, () => {
  console.log("MCP server running on http://localhost:3000");
});
