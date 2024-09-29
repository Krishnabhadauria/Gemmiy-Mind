import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Chatbot.css";

const geminiApiKey = "AIzaSyC4K1cdCB2cfELd0McoYDLLlTS5-7Z7Ld4"; // Your API Key

const geminiClient = axios.create({
  headers: {
    "x-goog-api-key": geminiApiKey,
    "Content-Type": "application/json",
  },
});

const geminiEndpoint =
  "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Function to handle sending user message
  const handleUserMessage = async (text) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: text },
    ]);

    try {
      const response = await geminiClient.post(geminiEndpoint, {
        contents: [
          {
            role: "user",
            parts: [{ text }],
          },
        ],
      });

      // Extract the response text from the API
      const responseText =
        response.data.candidates[0]?.content.parts[0]?.text.trim() ||
        "No response";

      // Remove all asterisks (*) from the response text
      const cleanedResponseText = responseText.replace(/\*/g, "").trim();

      // Add the assistant's message to the conversation
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: cleanedResponseText,
          isCodeBlock: false, // Not dealing with code blocks
        },
      ]);
    } catch (error) {
      console.error("Error handling user message:", error);
      // Add an error message to the conversation in case of failure
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleUserMessage(input);
      setInput(""); // Clear the input after submission
    }
  };

  // Automatically scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chatbot-container">
      <h1 className="chatbot-title">Gemmiy Bot</h1>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chatbot-message ${message.role}`}>
            <strong>{message.role === "user" ? "You" : "Gemmiy"}:</strong>
            <span>{message.content}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="chatbot-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatbot-input"
          placeholder="Type your message..."
        />
        <button type="submit" className="chatbot-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
