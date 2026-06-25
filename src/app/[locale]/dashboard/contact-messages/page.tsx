"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"

interface Message {
  _id: string
  name: string
  email: string
  message: string
  status: "new" | "read" | "followedUp"
  createdAt: string
}

const statusOrder = ["new", "read", "followedUp"]
const nextStatus: Record<string, string> = { new: "read", read: "followedUp" }

const statusColors: Record<string, string> = {
  new: "bg-amber-400",
  read: "bg-blue-400",
  followedUp: "bg-emerald-400",
}

const statusLabels: Record<string, string> = {
  new: "New",
  read: "Read",
  followedUp: "Followed Up",
}

export default function Inbox() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/contact")
      const data = await res.json()
      if (data.messages) setMessages(data.messages)
    } catch {} finally { setLoading(false) }
  }

  useEffect(() => { fetchMessages() }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/contact/${id}`, { method: "DELETE" })
      setMessages((prev) => prev.filter((m) => m._id !== id))
      if (expandedId === id) setExpandedId(null)
    } catch {}
  }

  const handleStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })
      setMessages((prev) => prev.map((m) => (m._id === id ? { ...m, status: status as Message["status"] } : m)))
    } catch {}
  }

  const filtered = messages.filter((msg) => {
    const q = search.toLowerCase()
    const matchesSearch = !q || msg.name.toLowerCase().includes(q) || msg.email.toLowerCase().includes(q) || msg.message.toLowerCase().includes(q)
    return matchesSearch && (filter === "all" || msg.status === filter)
  })

  const newCount = messages.filter((m) => m.status === "new").length

  const filters = [
    { value: "all", label: "All", count: messages.length },
    { value: "new", label: "New", count: newCount },
    { value: "read", label: "Read", count: messages.filter((m) => m.status === "read").length },
    { value: "followedUp", label: "Done", count: messages.filter((m) => m.status === "followedUp").length },
  ]

  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-white/90">Inbox</h1>
        <p className="mt-1.5 text-base text-white/25">
          {messages.length} {messages.length === 1 ? "message" : "messages"} total
          {newCount > 0 && <span className="text-amber-400/60"> &middot; {newCount} unread</span>}
        </p>
      </motion.div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-sm">
          <svg className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, or content..."
            className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] py-2.5 pl-10 pr-4 text-sm text-white/70 placeholder-white/15 outline-none transition-all focus:border-white/[0.12] focus:bg-white/[0.04]"
          />
          <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded-md border border-white/[0.06] px-1.5 py-0.5 sm:flex">
            <span className="text-[10px] font-medium text-white/15">⌘K</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
                filter === f.value
                  ? "bg-white/[0.08] text-white/80"
                  : "text-white/25 hover:text-white/50"
              }`}
            >
              {f.label}
              <span className={`ml-1.5 ${filter === f.value ? "text-white/30" : "text-white/10"}`}>
                {f.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center py-16"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="h-4 w-4 rounded-full border border-white/10 border-t-white/30"
              />
              <span className="text-xs text-white/15">Loading messages</span>
            </div>
          </motion.div>
        ) : filtered.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl border border-dashed border-white/[0.06] py-20 text-center"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.03]">
              <svg className="h-5 w-5 text-white/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </div>
            <p className="text-sm text-white/20">No messages match your search or filter.</p>
          </motion.div>
        ) : (
          <motion.div key="list" className="space-y-1.5">
            {filtered.map((msg, i) => {
              const isExpanded = expandedId === msg._id
              const next = nextStatus[msg.status]
              return (
                <motion.div
                  key={msg._id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0, overflow: "hidden" }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.05 * i }}
                >
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : msg._id)}
                    className={`group relative cursor-pointer rounded-xl border transition-all ${
                      isExpanded
                        ? "border-white/[0.1] bg-white/[0.03]"
                        : "border-white/[0.04] bg-white/[0.015] hover:border-white/[0.08] hover:bg-white/[0.025]"
                    }`}
                  >
                    <div className="flex items-start gap-4 px-5 py-4">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                        msg.status === "new" ? "bg-amber-400/15 text-amber-300/80" :
                        msg.status === "read" ? "bg-blue-400/15 text-blue-300/80" :
                        "bg-emerald-400/15 text-emerald-300/80"
                      }`}>
                        {msg.name.charAt(0).toUpperCase()}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-4">
                          <div className="min-w-0 flex items-baseline gap-2.5">
                            <span className="text-sm font-semibold text-white/85">{msg.name}</span>
                            <span className="hidden truncate text-xs text-white/20 sm:block">{msg.email}</span>
                          </div>
                          <div className="flex shrink-0 items-center gap-3">
                            <span className="text-[10px] text-white/15">
                              {new Date(msg.createdAt).toLocaleDateString("en", { month: "short", day: "numeric" })}
                            </span>
                            <span className={`hidden h-1.5 w-1.5 rounded-full sm:block ${statusColors[msg.status]}`}>
                              <motion.span
                                animate={msg.status === "new" ? { scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] } : {}}
                                transition={{ duration: 2, repeat: Infinity }}
                                className={`block h-full w-full rounded-full ${statusColors[msg.status]}`}
                              />
                            </span>
                          </div>
                        </div>

                        <AnimatePresence initial={false}>
                          {isExpanded ? (
                            <motion.div
                              key="exp"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <motion.div initial={{ y: -6 }} animate={{ y: 0 }} className="mt-4">
                                <p className="text-sm leading-relaxed text-white/50">
                                  {msg.message}
                                </p>
                                <div className="mt-5 flex items-center gap-2.5">
                                  {next && (
                                    <button
                                      onClick={(e) => { e.stopPropagation(); handleStatus(msg._id, next) }}
                                      className="rounded-lg border border-white/[0.08] px-4 py-2 text-xs font-medium text-white/50 transition-all hover:border-white/[0.15] hover:text-white/75"
                                    >
                                      Mark as {statusLabels[next]}
                                    </button>
                                  )}
                                  <button
                                    onClick={(e) => { e.stopPropagation(); handleDelete(msg._id) }}
                                    className="rounded-lg border border-white/[0.06] px-4 py-2 text-xs font-medium text-red-400/40 transition-all hover:border-red-400/20 hover:text-red-400/70"
                                  >
                                    Delete
                                  </button>
                                  <a
                                    href={`mailto:${msg.email}`}
                                    onClick={(e) => e.stopPropagation()}
                                    className="ml-auto rounded-lg border border-white/[0.06] px-4 py-2 text-xs font-medium text-white/30 transition-all hover:border-white/[0.12] hover:text-white/50"
                                  >
                                    Reply via email
                                  </a>
                                </div>
                              </motion.div>
                            </motion.div>
                          ) : (
                            <motion.p
                              key="col"
                              className="mt-1 truncate text-sm text-white/30"
                            >
                              {msg.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="flex shrink-0 flex-col items-center gap-1.5 pt-1">
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg className="h-3 w-3 text-white/20" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 4.5L6 7.5L9 4.5" />
                          </svg>
                        </motion.div>
                        <div className={`h-1 w-1 rounded-full sm:hidden ${statusColors[msg.status]}`} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
