import profileData from "./profileData";

function formatValue(value, indent = 0) {
  const pad = " ".repeat(indent);

  if (Array.isArray(value)) {
    return value.map((item) => `${pad}- ${item}`).join("\n");
  }

  if (value && typeof value === "object") {
    return Object.entries(value)
      .map(([key, val]) => {
        if (Array.isArray(val)) {
          return `${pad}${key}:\n${formatValue(val, indent + 2)}`;
        }

        if (val && typeof val === "object") {
          return `${pad}${key}:\n${formatValue(val, indent + 2)}`;
        }

        return `${pad}${key}: ${val}`;
      })
      .join("\n");
  }

  return `${pad}${value}`;
}

function buildProfilePrompt() {
  return Object.entries(profileData)
    .map(([key, value]) => {
      const title = key.toUpperCase();
      return `${title}:\n${formatValue(value, 2)}`;
    })
    .join("\n\n");
}

export async function askAI(message) {
  const prompt = `
You are AI Assistant for this profile.

PROFILE DATA:
${buildProfilePrompt()}

RULES:
- Keep answers short
- Use simple English
- Use emojis sometimes
- Make responses modern and clean
- Use spacing for readability
- Avoid long paragraphs
- Use bullet points when needed
- Answer only from the profile data when possible


USER:
${message}

ASSISTANT:
`;

  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "phi3",
      prompt,
      stream: false,
      options: {
        temperature: 0.6,
        num_predict: 120,
      },
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to connect to Ollama");
  }

  const data = await response.json();
  return data.response || "No response from AI.";
}