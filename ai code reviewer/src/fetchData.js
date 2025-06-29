// fetchData.js

export const fetchCohereResponse = async (userMessage) => {
  const apiKey = import.meta.env.VITE_COHERE_API_KEY;

  if (!apiKey) {
    throw new Error("Missing Cohere API key. Set VITE_COHERE_API_KEY in your .env.");
  }

  const response = await fetch("https://api.cohere.ai/v1/chat", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "command",
      message: userMessage,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Cohere API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  console.log("response :    ", data)
  return data.text || "No response from Cohere.";
};

