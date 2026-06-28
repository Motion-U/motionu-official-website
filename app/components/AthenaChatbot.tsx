"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

/* ───────────────────────────────────────────
   Types — mirrors the API response shape
   ─────────────────────────────────────────── */
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ApiResponse {
  success: boolean;
  reply: ChatMessage;
  timestamp: string;
  metadata: {
    model: string;
    processingTimeMs: number;
    requestLength: number;
  };
}

/* ───────────────────────────────────────────
   Component
   ─────────────────────────────────────────── */
export default function AthenaChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      // Small delay for the animation to start
      const t = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMsg: ChatMessage = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ask/athena", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data: ApiResponse = await res.json();
      setMessages((prev) => [...prev, data.reply]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* ── Floating trigger button (round) ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close Athena chat" : "Open Athena chat"}
        className="
          fixed bottom-6 right-6 z-[9999]
          w-14 h-14 rounded-full
          flex items-center justify-center
          shadow-lg
          transition-all duration-200
          hover:scale-110 hover:-translate-y-px
          active:scale-95
        "
        style={{
          background:
            "linear-gradient(135deg, var(--brand) 0%, #0284C7 100%)",
          boxShadow: open
            ? "0 4px 20px rgba(14,165,233,0.5)"
            : "0 8px 30px rgba(14,165,233,0.35)",
        }}
      >
        {open ? (
          <FaTimes className="text-white text-lg" />
        ) : (
          <Image
            src="/images/athena_logo.svg"
            alt="Athena"
            width={100}
            height={100}
            className="rounded-full"
          />
        )}
      </button>

      {/* ── Chat panel ── */}
      <div
        className={`
          fixed bottom-24 right-6 z-[9999]
          w-[min(92vw,400px)] max-h-[min(70vh,600px)]
          flex flex-col
          rounded-[20px] overflow-hidden
          transition-all duration-350 ease-out
          origin-bottom-right
        `}
        style={{
          background: "var(--bg-surface)",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-card)",
          opacity: open ? 1 : 0,
          transform: open ? "scale(1)" : "scale(0.85)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* ── Header ── */}
        <div
          className="flex items-center gap-3 px-5 py-4 shrink-0"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div
            className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
            style={{
              background:
                "linear-gradient(135deg, var(--brand) 0%, #0284C7 100%)",
            }}
          >
            <Image
              src="/images/athena_logo.svg"
              alt="Athena"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="font-display font-semibold text-sm"
              style={{ color: "var(--text-primary)" }}
            >
              Athena
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Motion-U AI Assistant
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="p-1.5 rounded-lg transition-colors duration-200 hover:bg-surface-card-hover"
            style={{ color: "var(--text-secondary)" }}
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        {/* ── Messages ── */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {messages.length === 0 && !loading && (
            <p
              className="text-sm text-center py-10"
              style={{ color: "var(--text-muted)" }}
            >
              Ask me anything about Motion-U!
            </p>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className="max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                style={
                  msg.role === "user"
                    ? {
                        background:
                          "linear-gradient(135deg, var(--brand) 0%, #0284C7 100%)",
                        color: "#fff",
                        borderBottomRightRadius: "6px",
                      }
                    : {
                        background: "var(--bg-card)",
                        color: "var(--text-primary)",
                        border: "1px solid var(--border)",
                        borderBottomLeftRadius: "6px",
                      }
                }
              >
                {msg.role === "user" ? (
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                ) : (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline transition-opacity hover:opacity-80"
                          style={{ color: "var(--brand-light)" }}
                        >
                          {children}
                        </a>
                      ),
                      p: ({ children }) => (
                        <p className="text-sm leading-relaxed mb-2 last:mb-0">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc pl-5 mb-2 last:mb-0">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal pl-5 mb-2 last:mb-0">
                          {children}
                        </ol>
                      ),
                      code: ({ children }) => (
                        <code
                          className="text-xs px-1 py-0.5 rounded"
                          style={{
                            background: "rgba(255,255,255,0.08)",
                            color: "var(--brand-light)",
                          }}
                        >
                          {children}
                        </code>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold">{children}</strong>
                      ),
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          ))}

          {/* Loading dots */}
          {loading && (
            <div className="flex justify-start">
              <div
                className="flex items-center gap-1.5 px-4 py-3 rounded-2xl"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderBottomLeftRadius: "6px",
                }}
              >
                <span className="sr-only">Athena is thinking</span>
                {[0, 150, 300].map((delay) => (
                  <span
                    key={delay}
                    className="block w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "var(--text-muted)",
                      animationDelay: `${delay}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="flex justify-center">
              <p
                className="text-xs px-3 py-1.5 rounded-lg"
                style={{
                  background: "rgba(251, 113, 133, 0.12)",
                  color: "#fb7185",
                }}
              >
                {error} — try again
              </p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* ── Input ── */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 px-4 py-3 shrink-0"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            disabled={loading}
            className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none transition-colors duration-200 disabled:opacity-40"
            style={{
              background: "var(--bg-card)",
              color: "var(--text-primary)",
              border: "1px solid var(--border)",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--border-accent)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label="Send message"
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 hover:-translate-y-px disabled:opacity-30 disabled:hover:translate-y-0"
            style={{
              background:
                "linear-gradient(135deg, var(--brand) 0%, #0284C7 100%)",
              color: "#fff",
            }}
          >
            <FaPaperPlane className="text-xs" />
          </button>
        </form>
      </div>
    </>
  );
}
