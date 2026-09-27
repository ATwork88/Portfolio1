"use client";

import { FormEvent, useState } from "react";

const suggestedQuestions = [
  "What kind of software engineer is Teresa?",
  "Tell me about Teresa's healthcare experience.",
  "What technologies does Teresa work with?",
];

export function ChatSection() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!message.trim() || loading) {
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      const result = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message.trim(),
        }),
      });

      const data = await result.json();

      if (!result.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setResponse(data.message);
    } catch (error) {
      console.error(error);
      setResponse(
        "Sorry, I couldn't answer that right now. Please try again later.",
      );
    } finally {
      setLoading(false);
    }
  }

  function askQuestion(question: string) {
    setMessage(question);
  }

  return (
    <section id="chat" className="section chat-section">
      <p className="section-eyebrow">Ask Teresa</p>

      <h2>Curious about my work?</h2>

      <p className="section-lead">
        Ask about my experience, projects, technical background, or the kinds
        of problems I enjoy solving.
      </p>

      <div className="chat-panel">
        <div className="chat-panel-header">
          <div>
            <p className="chat-label">Portfolio assistant</p>
            <p className="chat-description">
              Ask a question and I&apos;ll point you toward the relevant parts
              of my background.
            </p>
          </div>

          <span className="chat-status">
            <span className="chat-status-dot" />
            Available
          </span>
        </div>

        <div className="chat-suggestions">
          {suggestedQuestions.map((question) => (
            <button
              key={question}
              type="button"
              className="chat-suggestion"
              onClick={() => askQuestion(question)}
            >
              {question}
            </button>
          ))}
        </div>

        <form className="chat-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Ask a question..."
            disabled={loading}
            aria-label="Ask a question about Teresa"
          />

          <button
            type="submit"
            className="chat-submit"
            disabled={loading || !message.trim()}
          >
            {loading ? "Thinking..." : "Ask"}
          </button>
        </form>

        {response && (
          <div className="chat-response">
            <p className="chat-response-label">Response</p>
            <p>{response}</p>
          </div>
        )}
      </div>
    </section>
  );
}