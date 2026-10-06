"use client";

import { Bot, RotateCcw, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { chatFaq, chatGreeting } from "@/content/chat";

type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

const greeting: Message = { id: 0, role: "assistant", text: chatGreeting };

export function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [typing, setTyping] = useState(false);
  const nextId = useRef(1);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bottom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 1 || typing) {
      bottom.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [messages, typing]);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const asked = new Set(
    messages.filter((m) => m.role === "user").map((m) => m.text),
  );

  function ask(question: string, answer: string) {
    if (typing) return;

    setMessages((current) => [
      ...current,
      { id: nextId.current++, role: "user", text: question },
    ]);
    setTyping(true);

    timer.current = setTimeout(() => {
      setMessages((current) => [
        ...current,
        { id: nextId.current++, role: "assistant", text: answer },
      ]);
      setTyping(false);
    }, 600);
  }

  function reset() {
    if (timer.current) clearTimeout(timer.current);
    setTyping(false);
    setMessages([greeting]);
  }

  return (
    <section id="chat" className="section chat-section">
      <p className="section-eyebrow">Ask Ajay</p>
      <h2>Curious about my work?</h2>
      <p className="section-lead">
        Pick a question to learn about my experience, projects, and technical
        background.
      </p>

      <div className="chatbot">
        <div className="chatbot-header">
          <div>
            <p className="chat-label">Portfolio assistant</p>
            <p className="chat-description">
              Answers come from Ajay&apos;s profile and work history.
            </p>
          </div>

          <button
            type="button"
            className="chatbot-reset"
            onClick={reset}
            disabled={messages.length === 1}
          >
            <RotateCcw size={14} aria-hidden="true" />
            Clear chat
          </button>
        </div>

        <div className="chatbot-messages" role="log" aria-live="polite">
          {messages.map((message) => (
            <div key={message.id} className={`chat-row ${message.role}`}>
              <span className="chat-avatar" aria-hidden="true">
                {message.role === "assistant" ? (
                  <Bot size={16} />
                ) : (
                  <User size={16} />
                )}
              </span>
              <div className="chat-bubble">{message.text}</div>
            </div>
          ))}

          {typing && (
            <div className="chat-row assistant">
              <span className="chat-avatar" aria-hidden="true">
                <Bot size={16} />
              </span>
              <div className="chat-bubble chat-typing" aria-label="Typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
          <div ref={bottom} />
        </div>

        <div className="chatbot-questions">
          <p className="chatbot-questions-label">Ask a question</p>
          <div className="chat-suggestions">
            {chatFaq.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`chat-suggestion${asked.has(item.question) ? " asked" : ""}`}
                onClick={() => ask(item.question, item.answer)}
                disabled={typing}
              >
                {item.question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
