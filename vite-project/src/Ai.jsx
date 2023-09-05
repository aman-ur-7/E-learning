import React, { useState } from "react";
import axios from "axios";

const Ai = () => {
  const [userMessage, setUserMessage] = useState("");
  const [witResponse, setWitResponse] = useState(null);

  const CLIENT_ACCESS_TOKEN = "VK3XGDVVNMSA6NATN7S4RKSKNMQEIA57";

  const sendMessageToWit = async () => {
    try {
      const response = await axios.get("https://api.wit.ai/message", {
        headers: {
          Authorization: `Bearer ${CLIENT_ACCESS_TOKEN}`,
        },
        params: {
          v: "20230905",
          q: userMessage,
        },
      });

      setWitResponse(response.data);
    } catch (error) {
      console.error("Error sending message to Wit.ai:", error);
    }
  };

  return (
    <div>
      <h1>Wit.ai Chatbot Integration</h1>
      <input
        type="text"
        placeholder="Enter a message..."
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      />
      <button onClick={sendMessageToWit}>Send</button>
      {witResponse && (
        <div>
          <h2>Wit.ai Response:</h2>
          <pre>{JSON.stringify(witResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Ai;
