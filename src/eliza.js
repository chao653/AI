// A compact, self-contained ELIZA implementation.
//
// ELIZA (Weizenbaum, 1966) is one of the earliest natural-language programs.
// It works entirely offline using keyword ranking, decomposition patterns,
// and reassembly rules, so it needs no external services or API keys.

// Words are reflected when echoed back to the user (I <-> you, my <-> your, ...).
const REFLECTIONS = {
  i: "you",
  me: "you",
  my: "your",
  mine: "yours",
  am: "are",
  "i'm": "you're",
  "i've": "you've",
  "i'll": "you'll",
  you: "I",
  your: "my",
  yours: "mine",
  "you're": "I'm",
  "you've": "I've",
  "you'll": "I'll",
  are: "am",
  were: "was",
  was: "were",
  myself: "yourself",
  yourself: "myself",
};

// Keyword rules, ordered by descending rank. The first matching decomposition
// rule wins; one of its reassembly templates is chosen in round-robin order.
// `*` in a decomposition captures the remainder of the phrase for reflection.
const RULES = [
  {
    keyword: "hello",
    rank: 10,
    rules: [
      {
        match: /.*/,
        responses: [
          "Hello. How are you feeling today?",
          "Hi there. What is on your mind?",
        ],
      },
    ],
  },
  {
    keyword: "sorry",
    rank: 5,
    rules: [
      {
        match: /.*/,
        responses: [
          "Please do not apologise.",
          "Apologies are not necessary. Please go on.",
        ],
      },
    ],
  },
  {
    keyword: "i need *",
    rank: 20,
    rules: [
      {
        match: /i need (.*)/,
        responses: [
          "Why do you need {0}?",
          "Would it really help you to get {0}?",
          "Are you sure you need {0}?",
        ],
      },
    ],
  },
  {
    keyword: "i am *",
    rank: 15,
    rules: [
      {
        match: /i am (.*)/,
        responses: [
          "Did you come to me because you are {0}?",
          "How long have you been {0}?",
          "How do you feel about being {0}?",
        ],
      },
    ],
  },
  {
    keyword: "i'm *",
    rank: 15,
    rules: [
      {
        match: /i'm (.*)/,
        responses: [
          "How does being {0} make you feel?",
          "Do you enjoy being {0}?",
          "Why do you tell me you're {0}?",
        ],
      },
    ],
  },
  {
    keyword: "i feel *",
    rank: 15,
    rules: [
      {
        match: /i feel (.*)/,
        responses: [
          "Tell me more about feeling {0}.",
          "Do you often feel {0}?",
          "When do you usually feel {0}?",
        ],
      },
    ],
  },
  {
    keyword: "i want *",
    rank: 15,
    rules: [
      {
        match: /i want (.*)/,
        responses: [
          "What would it mean to you if you got {0}?",
          "Why do you want {0}?",
          "What would you do if you got {0}?",
        ],
      },
    ],
  },
  {
    keyword: "why *",
    rank: 12,
    rules: [
      {
        match: /why (.*)/,
        responses: [
          "Why do you ask that?",
          "Does that question interest you?",
          "What answer would please you the most?",
        ],
      },
    ],
  },
  {
    keyword: "because *",
    rank: 8,
    rules: [
      {
        match: /.*/,
        responses: [
          "Is that the real reason?",
          "What other reasons might there be?",
          "Does that reason seem to explain anything else?",
        ],
      },
    ],
  },
  {
    keyword: "i think *",
    rank: 12,
    rules: [
      {
        match: /i think (.*)/,
        responses: [
          "Do you doubt that {0}?",
          "Do you really think so?",
          "But you are not sure that {0}?",
        ],
      },
    ],
  },
  {
    keyword: "you are *",
    rank: 12,
    rules: [
      {
        match: /you are (.*)/,
        responses: [
          "Why do you think I am {0}?",
          "Does it please you to think I am {0}?",
          "Perhaps you would like me to be {0}.",
        ],
      },
    ],
  },
  {
    keyword: "computer",
    rank: 18,
    rules: [
      {
        match: /.*/,
        responses: [
          "Do computers worry you?",
          "Why do you mention computers?",
          "What do you think machines have to do with your problem?",
        ],
      },
    ],
  },
  {
    keyword: "yes",
    rank: 3,
    rules: [
      {
        match: /.*/,
        responses: [
          "You seem quite sure.",
          "I see. Can you tell me more?",
        ],
      },
    ],
  },
  {
    keyword: "no",
    rank: 3,
    rules: [
      {
        match: /.*/,
        responses: [
          "Why not?",
          "Are you saying no just to be negative?",
        ],
      },
    ],
  },
];

// Responses used when no keyword matches the input.
const FALLBACKS = [
  "Please tell me more.",
  "Can you elaborate on that?",
  "How does that make you feel?",
  "I see. Please go on.",
  "Let's explore that further.",
  "Why do you say that?",
];

function reflect(phrase) {
  return phrase
    .split(/\s+/)
    .map((word) => {
      const key = word.toLowerCase();
      return Object.prototype.hasOwnProperty.call(REFLECTIONS, key)
        ? REFLECTIONS[key]
        : word;
    })
    .join(" ")
    .replace(/[.?!]+$/, "");
}

function normalise(input) {
  return String(input ?? "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * A stateful ELIZA conversation. Keeping the round-robin response index on the
 * instance means repeated inputs cycle through varied replies.
 */
export class Eliza {
  constructor() {
    this.responseIndex = new Map();
  }

  nextResponse(key, responses) {
    const current = this.responseIndex.get(key) ?? 0;
    const response = responses[current % responses.length];
    this.responseIndex.set(key, current + 1);
    return response;
  }

  respond(input) {
    const text = normalise(input);
    if (!text) {
      return "Please say something so we can begin.";
    }

    const matches = RULES.filter((rule) =>
      text.includes(rule.keyword.replace(" *", "")),
    ).sort((a, b) => b.rank - a.rank);

    for (const rule of matches) {
      for (const decomposition of rule.rules) {
        const found = text.match(decomposition.match);
        if (!found) {
          continue;
        }
        const template = this.nextResponse(rule.keyword, decomposition.responses);
        const captured = found[1] ? reflect(found[1]) : "";
        return template.replace(/\{0\}/g, captured);
      }
    }

    return this.nextResponse("__fallback__", FALLBACKS);
  }
}

export { reflect, normalise };
