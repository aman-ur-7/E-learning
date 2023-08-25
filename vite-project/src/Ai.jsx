import React, { useState } from "react";
import axios from "axios";

const Ai = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiKey = "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";
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci/completions",
        {
          prompt: query,
          max_tokens: 200, // Adjust as needed
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div>
      <h1>Chat with ChatGPT</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="write"
        />
        <button type="submit">Send</button>
      </form>
      <div>
        <h1>{response}</h1>
      </div>
    </div>
  );
};

export default Ai;
