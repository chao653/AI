const chat = document.getElementById("chat");
const form = document.getElementById("composer");
const input = document.getElementById("input");
const sendBtn = document.getElementById("send");
const statusEl = document.getElementById("status");

const sessionId = `web-${Math.random().toString(36).slice(2, 10)}`;

function addMessage(text, who) {
  const el = document.createElement("div");
  el.className = `msg msg--${who}`;
  el.textContent = text;
  chat.appendChild(el);
  chat.scrollTop = chat.scrollHeight;
  return el;
}

async function refreshHealth() {
  try {
    const res = await fetch("/api/health");
    const data = await res.json();
    statusEl.textContent = data.status === "ok" ? "online" : "offline";
    statusEl.dataset.state = data.status === "ok" ? "ok" : "err";
  } catch {
    statusEl.textContent = "offline";
    statusEl.dataset.state = "err";
  }
}

async function sendMessage(message) {
  addMessage(message, "user");
  sendBtn.disabled = true;
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, sessionId }),
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const data = await res.json();
    addMessage(data.reply, "bot");
  } catch (err) {
    addMessage(`Sorry, something went wrong (${err.message}).`, "bot");
  } finally {
    sendBtn.disabled = false;
    input.focus();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = input.value.trim();
  if (!message) {
    return;
  }
  input.value = "";
  sendMessage(message);
});

addMessage(
  "Hello, I am ELIZA. How are you feeling today?",
  "bot",
);
refreshHealth();
setInterval(refreshHealth, 15000);
input.focus();
