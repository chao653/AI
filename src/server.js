import express from "express";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { Eliza } from "./eliza.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createApp() {
  const app = express();
  app.use(express.json());

  // One ELIZA instance per session id keeps each conversation's response
  // rotation independent. Sessions live in memory only.
  const sessions = new Map();
  const getSession = (id) => {
    if (!sessions.has(id)) {
      sessions.set(id, new Eliza());
    }
    return sessions.get(id);
  };

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", sessions: sessions.size });
  });

  app.post("/api/chat", (req, res) => {
    const { message, sessionId } = req.body ?? {};
    if (typeof message !== "string" || message.trim() === "") {
      return res.status(400).json({ error: "A non-empty 'message' is required." });
    }
    const id = typeof sessionId === "string" && sessionId ? sessionId : "default";
    const reply = getSession(id).respond(message);
    res.json({ reply, sessionId: id });
  });

  app.use(express.static(path.join(__dirname, "public")));

  return app;
}

const isMain =
  process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);

if (isMain) {
  const port = Number(process.env.PORT) || 3000;
  const app = createApp();
  app.listen(port, () => {
    console.log(`ELIZA chatbot server listening on http://localhost:${port}`);
  });
}
