import profileData from "./profileData";

export async function askAI(message) {
  try {
    const response = await fetch(
      "http://localhost:3001/api/chat",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message,
          profileData,
        }),
      }
    );

    const data = await response.json();

    return data.response;

  } catch (error) {
    console.error(error);

    return "AI connection failed.";
  }
}
