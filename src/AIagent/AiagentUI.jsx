// AI PORTFOLIO ASSISTANT
// CLEAN & PREMIUM WEB-APP UI
// SOFT SHADOWS & DEEP ROUNDED CORNERS
// FULL CODE

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Send,
  Sparkles,
  FolderOpen,
  Phone,
  UserRound,
  Copy,
  Check,
  Cpu,
  Bot,
  Sun,
  Moon,
  ChevronRight,
  Command,
} from "lucide-react";

import { askAI } from "./ollama";
import profileData from "./profileData";

function MessageContent({ text, darkMode }) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const parseText = (txt) => {
    return txt.split(urlRegex).map((part, i) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noreferrer"
            className={`break-all font-semibold underline underline-offset-4 transition-opacity hover:opacity-70 ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            {part}
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="space-y-4 text-[15px]">
      {String(text)
        .split("\n")
        .map((line, idx) => {
          const trimmed = line.trim();

          if (!trimmed) {
            return <div key={idx} className="h-1" />;
          }

          if (/^#{1,3}\s+/.test(trimmed)) {
            return (
              <h2
                key={idx}
                className={`text-xl font-bold tracking-tight ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {trimmed.replace(/^#{1,3}\s+/, "")}
              </h2>
            );
          }

          if (/^(?:[-*•]|\d+\.)\s+/.test(trimmed)) {
            return (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                <p
                  className={`leading-relaxed ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {parseText(trimmed.replace(/^(?:[-*•]|\d+\.)\s+/, ""))}
                </p>
              </div>
            );
          }

          return (
            <p
              key={idx}
              className={`leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {parseText(trimmed)}
            </p>
          );
        })}
    </div>
  );
}

function CopyButton({ text, darkMode }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all ${
        darkMode
          ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
      }`}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-emerald-500" />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

const quickActions = [
  {
    title: "Projects",
    text: "Show all projects",
    icon: <FolderOpen className="h-5 w-5" />,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Skills",
    text: "Show all skills",
    icon: <Cpu className="h-5 w-5" />,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "About",
    text: "Tell me about Kakada",
    icon: <UserRound className="h-5 w-5" />,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Contact",
    text: "Show contact information",
    icon: <Phone className="h-5 w-5" />,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export default function AiagentUI() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") !== "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: `# Welcome 👋\n\nI'm ${profileData.name}'s AI assistant.\n\nAsk me anything about:\n- Projects\n- Skills\n- Contact\n- Portfolio\n- Experience`,
    },
  ]);

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (customText) => {
    const finalText = (customText ?? message).trim();
    if (!finalText || loading) return;

    setMessages((prev) => [...prev, { type: "user", text: finalText }]);
    setMessage("");
    setLoading(true);

    try {
      const reply = await askAI(finalText);
      setMessages((prev) => [...prev, { type: "ai", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: "⚠️ AI connection failed." },
      ]);
    }
    setLoading(false);
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        darkMode ? "bg-[#0A0A0B] text-slate-100" : "bg-[#FAFAFA] text-slate-900"
      }`}
    >
      {/* FLOATING HEADER */}
      <header className="fixed left-0 right-0 top-6 z-50 px-4 sm:px-6">
        <div
          className={`mx-auto flex max-w-5xl items-center justify-between rounded-[2rem] border p-2 shadow-sm backdrop-blur-xl ${
            darkMode
              ? "border-white/10 bg-[#121214]/80"
              : "border-slate-200/60 bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          }`}
        >
          <div className="flex items-center gap-2 pl-2">
            <Link
              to="/"
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                darkMode ? "hover:bg-white/10" : "hover:bg-slate-100"
              }`}
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md shadow-indigo-500/20">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold tracking-wide">
                  Portfolio AI Assistant
                </h1>
                <p
                  className={`text-[10px] font-medium uppercase tracking-wider ${
                    darkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  Creative & Technology
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pr-2">
            <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-emerald-500 sm:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              SYSTEM ACTIVE
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative flex h-10 w-16 items-center rounded-full p-1 transition-colors duration-300 ${
                darkMode ? "bg-slate-800" : "bg-slate-200"
              }`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 ${
                  darkMode
                    ? "translate-x-6 bg-slate-950 text-white shadow-sm"
                    : "translate-x-0 bg-white text-slate-900 shadow-sm"
                }`}
              >
                {darkMode ? (
                  <Moon className="h-3.5 w-3.5" />
                ) : (
                  <Sun className="h-3.5 w-3.5" />
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="mx-auto flex max-w-5xl flex-col px-4 pb-32 pt-36 sm:px-6">
        
        {/* HERO INTRO */}
        {messages.length === 1 && (
          <div className="mb-12 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-indigo-600 text-white shadow-xl shadow-indigo-500/20">
              <Command className="h-10 w-10" />
            </div>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              How can I help you today?
            </h2>
            <p
              className={`max-w-xl text-base ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              I am an AI assistant designed to provide detailed insights into
              projects, capabilities, and professional background.
            </p>

            <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
              {quickActions.map((item) => (
                <button
                  key={item.title}
                  onClick={() => sendMessage(item.text)}
                  className={`group flex items-center justify-between rounded-[1.5rem] border p-4 text-left transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    darkMode
                      ? "border-white/5 bg-[#121214] hover:border-white/10"
                      : "border-slate-200 bg-white shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                      darkMode ? "text-slate-600" : "text-slate-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* CHAT FEED */}
        <div className="space-y-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex w-full ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`relative max-w-[90%] sm:max-w-[75%] ${
                  msg.type === "user"
                    ? "rounded-[2rem] rounded-tr-sm bg-indigo-600 px-6 py-4 text-white shadow-md shadow-indigo-500/10"
                    : `rounded-[2rem] rounded-tl-sm border px-6 py-5 ${
                        darkMode
                          ? "border-white/5 bg-[#121214]"
                          : "border-slate-200 bg-white shadow-sm"
                      }`
                }`}
              >
                {msg.type === "ai" && index !== 0 && (
                  <div className="mb-4 flex items-center justify-between border-b border-inherit pb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                        <Bot className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-bold">Assistant</span>
                    </div>
                    <CopyButton text={msg.text} darkMode={darkMode} />
                  </div>
                )}
                {msg.type === "user" ? (
                  <p className="text-[15px] leading-relaxed">{msg.text}</p>
                ) : (
                  <MessageContent text={msg.text} darkMode={darkMode} />
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div
                className={`flex max-w-[75%] items-center gap-3 rounded-[2rem] rounded-tl-sm border px-6 py-5 ${
                  darkMode
                    ? "border-white/5 bg-[#121214]"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 dark:bg-slate-500" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.2s] dark:bg-slate-500" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.4s] dark:bg-slate-500" />
                </div>
              </div>
            </div>
          )}
          <div ref={endRef} className="h-4" />
        </div>
      </main>

      {/* FLOATING INPUT ISLAND */}
      <div className="fixed bottom-6 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div
            className={`flex items-end gap-2 rounded-[2rem] border p-2 shadow-2xl backdrop-blur-xl ${
              darkMode
                ? "border-white/10 bg-[#121214]/90"
                : "border-slate-200/80 bg-white/90 shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
            }`}
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Ask me anything..."
              className={`max-h-32 min-h-[56px] w-full resize-none bg-transparent px-5 py-4 text-[15px] outline-none ${
                darkMode
                  ? "text-white placeholder:text-slate-500"
                  : "text-slate-900 placeholder:text-slate-400"
              }`}
              rows={1}
            />

            <button
              onClick={() => sendMessage()}
              disabled={loading || !message.trim()}
              className="mb-1 mr-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md transition-all hover:scale-105 active:scale-95 disabled:scale-100 disabled:opacity-50"
            >
              <Send className="h-5 w-5 -translate-x-[1px] translate-y-[1px]" />
            </button>
          </div>
          <div className="mt-3 text-center">
            <p
              className={`text-[11px] font-medium ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              AI can make mistakes. Verify important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}