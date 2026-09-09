# AI — ELIZA Chatbot

A self-contained, offline **ELIZA-style AI chatbot** with an Express JSON API and a
modern web UI. ELIZA (Weizenbaum, 1966) is one of the earliest natural-language
programs; this implementation runs entirely locally with **no external services,
API keys, or secrets** required.

## Features

- Pattern-matching conversation engine (`src/eliza.js`) with keyword ranking,
  decomposition rules, reassembly templates, and pronoun reflection.
- Express server (`src/server.js`) exposing:
  - `GET /api/health` — service health + active session count.
  - `POST /api/chat` — `{ "message": "...", "sessionId": "..." }` → `{ "reply": "..." }`.
  - Static web UI served from `src/public/`.
- Per-session response rotation so repeated inputs get varied replies.

## Requirements

- Node.js >= 20 (developed against Node 22).

## Getting started

```bash
npm install       # install dependencies
npm start         # start the server on http://localhost:3000
```

Then open <http://localhost:3000> and start chatting.

Set a custom port with `PORT=8080 npm start`.

## Development

```bash
npm run dev       # start with auto-reload (node --watch)
npm test          # run the unit + API test suites (node --test)
npm run lint      # run eslint
```

## API example

```bash
curl -s http://localhost:3000/api/chat \
  -H 'Content-Type: application/json' \
  -d '{"message":"I need a vacation"}'
# {"reply":"Why do you need a vacation?","sessionId":"default"}
```

## Project layout

```
src/
  eliza.js          # conversation engine
  server.js         # Express app + API + static hosting
  public/           # web UI (index.html, styles.css, app.js)
test/
  eliza.test.js     # engine unit tests
  api.test.js       # HTTP API integration tests
```
