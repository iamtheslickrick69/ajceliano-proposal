"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { isTextUIPart } from "ai";
import { MessageCircle, X, Send, Cpu } from "lucide-react";

const WELCOME_TEXT =
  "Hey there! I'm the AI assistant for this proposal. Ask me anything about how Haestus can transform A.J. Celiano with AI. What would you like to know?";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, status } = useChat();

  const isStreaming = status === "streaming" || status === "submitted";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isStreaming]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim() || isStreaming) return;
    sendMessage({ text: input });
    setInput("");
  }

  function getMessageText(msg: (typeof messages)[number]): string {
    return msg.parts
      .filter(isTextUIPart)
      .map((p) => p.text)
      .join("");
  }

  return (
    <>
      {!isOpen && (
        <button
          data-chat-trigger
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:bg-black/80 transition-all hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] h-[520px] rounded-2xl bg-white border border-black/10 shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold">Haestus AI</div>
                <div className="text-[10px] text-emerald-500 font-mono">Live Demo</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg hover:bg-black/5 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-black/30" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 chat-container">
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed bg-[#fafafa] text-black/60">
                {WELCOME_TEXT}
              </div>
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-black text-white"
                      : "bg-[#fafafa] text-black/60"
                  }`}
                >
                  {getMessageText(msg)}
                </div>
              </div>
            ))}
            {isStreaming && messages.length > 0 && messages[messages.length - 1].role === "user" && (
              <div className="flex justify-start">
                <div className="bg-[#fafafa] rounded-2xl px-4 py-3 text-sm text-black/30">
                  <span className="animate-pulse">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-black/5">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about the proposal..."
                className="flex-1 bg-[#fafafa] rounded-xl px-4 py-3 text-sm placeholder:text-black/20 outline-none focus:ring-1 focus:ring-black/10 border border-black/5"
              />
              <button
                type="submit"
                disabled={!input.trim() || isStreaming}
                className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:bg-black/80 transition-colors disabled:opacity-20"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
