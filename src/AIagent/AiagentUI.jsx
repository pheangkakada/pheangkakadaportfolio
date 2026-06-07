import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Bot,
  Send,
  Sparkles,
  FolderOpen,
  Phone,
  UserRound,
  Lightbulb,
  ChevronRight,
} from "lucide-react";

import { askAI } from "./ollama";
import profileData from "./profileData";

function MessageContent({ text }) {
  const parseInlineLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return text.split(urlRegex).map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-cyan-400 underline underline-offset-4 transition hover:text-cyan-300"
          >
            {part}
          </a>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };

  const lines = String(text || "").split("\n");

  return (
    <div className="space-y-3">
      {lines.map((line, idx) => {
        const trimmed = line.trim();

        if (!trimmed) {
          return <div key={idx} className="h-2" />;
        }

        // headings
        if (/^#{1,3}\s+/.test(trimmed)) {
          const title = trimmed.replace(/^#{1,3}\s+/, "");

          return (
            <h3
              key={idx}
              className="text-lg font-semibold text-white"
            >
              {title}
            </h3>
          );
        }

        // bullet list
        if (/^(?:[-*•]|\d+\.)\s+/.test(trimmed)) {
          const content = trimmed.replace(
            /^(?:[-*•]|\d+\.)\s+/,
            ""
          );

          return (
            <div key={idx} className="flex gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

              <p className="leading-7 text-slate-300 break-words">
                {parseInlineLinks(content)}
              </p>
            </div>
          );
        }

        return (
          <p
            key={idx}
            className="leading-7 text-slate-300 break-words"
          >
            {parseInlineLinks(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
const quickPrompts = [
  {
    title: "Projects",
    text: "Show my projects with tech stack and links.",
    icon: <FolderOpen className="h-5 w-5" />,
  },
  {
    title: "Skills",
    text: "Show all my skills in categories.",
    icon: <Lightbulb className="h-5 w-5" />,
  },
  {
    title: "About",
    text: "Tell me about myself professionally.",
    icon: <UserRound className="h-5 w-5" />,
  },
  {
    title: "Contact",
    text: "Show all my contact links.",
    icon: <Phone className="h-5 w-5" />,
  },
];

export default function AiagentUI() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: `# Welcome 👋

I’m ${profileData.name} AI assistant.

Ask me about:
- Projects
- Skills
- Experience
- Contact
- Portfolio
`,
    },
  ]);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
    });
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
          text: "⚠️ Ollama connection failed.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Sidebar */}
      <div className="relative hidden w-[320px] border-r border-white/10 bg-white/[0.03] backdrop-blur-2xl lg:flex lg:flex-col">
        <div className="border-b border-white/10 p-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 transition hover:text-cyan-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Portfolio
          </Link>

          <div className="mt-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_50px_rgba(34,211,238,0.35)]">
              <Sparkles className="h-8 w-8 text-black" />
            </div>

            <h1 className="mt-5 text-2xl font-bold">
              {profileData.name}
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              {profileData.role}
            </p>
          </div>
        </div>

        <div className="flex-1 p-6">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-slate-500">
            Quick Actions
          </p>

          <div className="space-y-3">
            {quickPrompts.map((item) => (
              <button
                key={item.title}
                onClick={() => sendMessage(item.text)}
                className="group flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-left transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    {item.icon}
                  </div>

                  <div>
                    <p className="font-medium text-white">
                      {item.title}
                    </p>

                    <p className="text-xs text-slate-500">
                      Ask AI
                    </p>
                  </div>
                </div>

                <ChevronRight className="h-4 w-4 text-slate-500 transition group-hover:text-cyan-400" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="relative flex flex-1 flex-col">
        {/* Header */}
        <div className="sticky top-0 z-20 border-b border-white/10 bg-[#020617]/70 backdrop-blur-2xl">
          <div className="flex items-center justify-between px-5 py-5 lg:px-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500">
                <Bot className="h-6 w-6 text-black" />
              </div>

              <div>
                <h2 className="font-semibold text-white">
                  AI Portfolio Assistant
                </h2>

                <p className="text-sm text-slate-400">
                  Smart portfolio experience
                </p>
              </div>
            </div>

            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-400">
              ● Online
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-8 lg:px-10">
          <div className="mx-auto max-w-4xl space-y-8">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.type === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`relative max-w-[90%] overflow-hidden rounded-[30px] border ${
                    msg.type === "user"
                      ? "border-cyan-400/30 bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-5 text-black shadow-[0_20px_80px_rgba(34,211,238,0.25)]"
                      : "border-white/10 bg-white/[0.03] backdrop-blur-2xl"
                  }`}
                >
                  {msg.type === "ai" && (
                    <div className="flex items-center gap-3 border-b border-white/5 px-6 py-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500">
                        <Bot className="h-5 w-5 text-black" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-white">
                          Kakada AI
                        </h3>

                        <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                          Assistant
                        </p>
                      </div>
                    </div>
                  )}

                  <div className={msg.type === "ai" ? "px-6 py-6" : ""}>
                    {msg.type === "user" ? (
                      <p className="whitespace-pre-wrap text-[15px] font-medium leading-7">
                        {msg.text}
                      </p>
                    ) : (
                      <MessageContent text={msg.text} />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.3s]" />
                    </div>

                    <span className="text-sm text-slate-400">
                      AI is thinking...
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-white/10 bg-[#020617]/80 p-5 backdrop-blur-2xl lg:px-10">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 rounded-[28px] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-2xl">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Ask something about portfolio..."
                className="flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500"
              />

              <button
                onClick={() => sendMessage()}
                disabled={loading}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black transition hover:scale-105 disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}