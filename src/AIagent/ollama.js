import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/chat", async (req, res) => {
  try {
    const { message, profileData } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `

You are ${profileData.name} AI assistant.

PROFILE:
${JSON.stringify(profileData)}

USER:
${message}
`;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    res.json({
      response,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "AI failed",
    });
  }
});

app.listen(3001, () => {
  console.log("Server running");
});
