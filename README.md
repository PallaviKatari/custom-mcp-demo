# MCP Demo Server

A small Express server that exposes three JSON endpoints representing demo tools: echo, addition, and a stubbed weather forecast. The endpoint list is also recorded in `mcp-config.json`.

## Requirements

- Node.js
- npm

## Setup and run

Install the project dependencies and start the server:

```sh
npm install
node server.js
```

The server listens on `http://localhost:3000`.

## Tools

All tools use `POST` and accept a JSON request body.

| Tool | Endpoint | Request body | Response |
| --- | --- | --- | --- |
| Echo | `/mcp/tool/echo` | `{"input":"Hello"}` | `{"output":"Echo: Hello"}` |
| Add | `/mcp/tool/add` | `{"a":2,"b":3}` | `{"result":5}` |
| Weather | `/mcp/tool/weather` | `{"city":"Seattle"}` | `{"forecast":"Sunny in Seattle"}` |

The weather route returns a fixed demo response; it does not retrieve live weather data.

## Try the endpoints

With the server running, send requests using `curl`:

```sh
curl -X POST http://localhost:3000/mcp/tool/echo \
  -H "Content-Type: application/json" \
  -d '{"input":"Hello"}'

curl -X POST http://localhost:3000/mcp/tool/add \
  -H "Content-Type: application/json" \
  -d '{"a":2,"b":3}'

curl -X POST http://localhost:3000/mcp/tool/weather \
  -H "Content-Type: application/json" \
  -d '{"city":"Seattle"}'
```

## Project files

- `server.js` creates the Express app, parses JSON request bodies, registers the three tool routes, and starts the server on port `3000`.
- `mcp-config.json` lists each tool's name, HTTP method, and local endpoint.
- `package.json` defines the project metadata and the Express dependency. No start or test script is currently configured.
