import React, { useState } from "react";
import axios from "axios";

const Ai = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const fetchApi = async () => {
    const apiKey = "AIzaSyBgLKBYfzZsBzmHIzF_eXO6VGF7DjGSgJM"; // Replace with your API key
    const searchEngineId = "839b85261ff3d4c95"; // Replace with your custom search engine ID

    try {
      const response = await axios.get(
        "https://www.googleapis.com/customsearch/v1",
        {
          params: {
            key: apiKey,
            cx: searchEngineId,
            q: query, // Use the user's query
          },
        }
      );

      setResult(response.data.items || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search query"
      />
      <button onClick={fetchApi}>Fetch Results</button>
      <ul>
        {result.map((result) => (
          <li key={result.cacheId}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ai;
