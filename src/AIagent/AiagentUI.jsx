import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Bot,
  Send,
  Sparkles,
  Lightbulb,
  FolderOpen,
  Phone,
  UserRound,
} from "lucide-react";

import { askAI } from "./ollama";
import profileData from "./profileData";

function MessageContent({ text }) {
  const lines = String(text || "").split("\n");

  return (
    <div className="space-y-2">
      {lines.map((line, idx) => {
        const raw = line;
        const trimmed = raw.trim();

        if (!trimmed) {
          return <div key={idx} className="h-2" />;
        }

        if (/^https?:\/\/\S+/i.test(trimmed)) {
          return (
            <a
              key={idx}
              href={trimmed}
              target="_blank"
              rel="noreferrer"
              className="block break-all text-cyan-300 underline decoration-cyan-400/50 underline-offset-4 hover:text-cyan-200"
            >
              {trimmed}
            </a>
          );
        }

        if (/^(?:[-*•]|\d+\.)\s+/.test(trimmed)) {
          const content = trimmed.replace(/^(?:[-*•]|\d+\.)\s+/, "");
          return (
            <div key={idx} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <p className="leading-7 text-slate-200">{content}</p>
            </div>
          );
        }

        if (/^#{1,3}\s+/.test(trimmed)) {
          const title = trimmed.replace(/^#{1,3}\s+/, "");
          const level = trimmed.match(/^#{1,3}/)?.[0].length || 1;

          return (
            <div
              key={idx}
              className={
                level === 1
                  ? "text-xl font-bold text-white"
                  : level === 2
                  ? "text-lg font-semibold text-white"
                  : "text-base font-semibold text-white"
              }
            >
              {title}
            </div>
          );
        }

        return (
          <p key={idx} className="leading-7 text-slate-200">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}

const quickPrompts = [
  {
    label: "Show projects",
    icon: <FolderOpen className="h-4 w-4" />,
    text: "Show my projects in a clean list with tech stack and links.",
  },
  {
    label: "Contact",
    icon: <Phone className="h-4 w-4" />,
    text: "Show my contact links in a clean list.",
  },
  {
    label: "About me",
    icon: <UserRound className="h-4 w-4" />,
    text: "Tell me about myself based on my portfolio.",
  },
  {
    label: "Skills",
    icon: <Lightbulb className="h-4 w-4" />,
    text: "Show my skills in categories.",
  },
];

export default function AiagentUI() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: `Hello 👋 I’m ${profileData.name} AI Assistant.\n\nAsk me about projects, skills, contact, or portfolio details.`,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (customText) => {
    const finalText = (customText ?? message).trim();
    if (!finalText || loading) return;

    const userMessage = {
      type: "user",
      text: finalText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const reply = await askAI(finalText);

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "Ollama connection failed. Please make sure Ollama is running.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-[#030712] text-white">
      {/* Top bar */}
      <div className="border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-400 transition-colors hover:text-cyan-400"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-25 blur-xl" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500">
                <Sparkles className="h-5 w-5 text-black" />
              </div>
            </div>

            <div>
              <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-lg font-bold text-transparent">
                {profileData.name} AI Assistant
              </h1>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Smart Portfolio Chat
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickPrompts.map((item) => (
              <button
                key={item.label}
                onClick={() => sendMessage(item.text)}
                disabled={loading}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-left backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-colors group-hover:bg-cyan-400 group-hover:text-black">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-xs text-slate-500">Quick prompt</p>
                </div>
              </button>
            ))}
          </div>

          <div className="space-y-6 pb-10">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[92%] overflow-hidden rounded-[28px] border transition-all duration-300 sm:max-w-[80%] ${
                    msg.type === "user"
                      ? "rounded-br-md border-cyan-400/30 bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-4 text-black shadow-[0_10px_40px_rgba(34,211,238,0.22)]"
                      : "rounded-bl-md border-white/10 bg-[#0B1120]/90 text-slate-200 backdrop-blur-xl"
                  }`}
                >
                  {msg.type === "ai" && (
                    <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.02] px-5 py-4">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-30 blur-xl" />
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500">
                          <Bot className="h-5 w-5 text-black" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          Kakada AI
                        </h3>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-400">
                          Portfolio assistant
                        </p>
                      </div>
                    </div>
                  )}

                  <div className={msg.type === "ai" ? "px-5 py-5" : ""}>
                    {msg.type === "user" ? (
                      <div className="whitespace-pre-wrap text-[15px] leading-7 text-black">
                        {msg.text}
                      </div>
                    ) : (
                      <MessageContent text={msg.text} />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-[28px] border border-white/10 bg-[#0B1120]/90 px-5 py-4 text-slate-400 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.2s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.1s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
                    </div>
                    <span className="text-sm">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-white/5 bg-black/30 p-5 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <input
                type="text"
                placeholder="Ask about projects, contact, skills..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                className="flex-1 rounded-2xl border border-white/5 bg-black/20 px-5 py-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/40"
              />

              <button
                onClick={() => sendMessage()}
                disabled={loading}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 font-semibold text-black transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}