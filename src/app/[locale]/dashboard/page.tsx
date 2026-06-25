"use client"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { motion } from "motion/react"

interface Message {
  _id: string
  name: string
  email: string
  message: string
  status: "new" | "read" | "followedUp"
  createdAt: string
}

function Greeting() {
  const [text, setText] = useState("")
  useEffect(() => {
    const h = new Date().getHours()
    if (h < 12) setText("Good morning")
    else if (h < 17) setText("Good afternoon")
    else setText("Good evening")
  }, [])
  return <>{text}</>
}

function pluralize(count: number, word: string) {
  return count === 1 ? word : word + "s"
}

export default function DashboardHome() {
  const { data: session } = useSession()
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    fetch("/api/contact")
      .then((r) => r.json())
      .then((d) => { if (d.messages) setMessages(d.messages) })
      .catch(() => {})
  }, [])

  const total = messages.length
  const newCount = messages.filter((m) => m.status === "new").length
  const readCount = messages.filter((m) => m.status === "read").length
  const doneCount = messages.filter((m) => m.status === "followedUp").length
  const recent = messages.slice(0, 5)
  const today = new Date()

  const dayName = today.toLocaleDateString("en", { weekday: "long" })
  const monthName = today.toLocaleDateString("en", { month: "long" })
  const dayNum = today.getDate()

  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/20">
              {dayName}, {monthName} {dayNum}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white/90">
              <Greeting />
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                , {session?.user?.name?.split(" ")[0] || "Hashim"}
              </span>
            </h1>
            <p className="mt-2 text-base text-white/25">
              {total} {pluralize(total, "message")} in the system &middot; {newCount} need attention
            </p>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400/60">
              <motion.span
                className="h-full w-full rounded-full bg-emerald-400"
                animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
            <span className="text-xs text-white/20">System online</span>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent p-8 lg:col-span-2"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/8 blur-[60px]" />
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/20">Volume</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-7xl font-bold tracking-tight text-white/90">{total}</span>
            <span className="text-sm text-white/25">total messages</span>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { count: newCount, label: "New", color: "bg-amber-400", bar: "from-amber-400/30 to-amber-400/5" },
              { count: readCount, label: "Read", color: "bg-blue-400", bar: "from-blue-400/30 to-blue-400/5" },
              { count: doneCount, label: "Followed Up", color: "bg-emerald-400", bar: "from-emerald-400/30 to-emerald-400/5" },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${s.color}`} />
                  <span className="text-xs text-white/25">{s.label}</span>
                </div>
                <p className="mt-1 text-2xl font-bold text-white/70">{s.count}</p>
                <div className="mt-2 h-1 rounded-full bg-white/[0.04]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${total > 0 ? (s.count / total) * 100 : 0}%` }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`h-full rounded-full bg-gradient-to-r ${s.bar}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent p-8"
        >
          <div className="pointer-events-none absolute -left-16 -top-16 h-36 w-36 rounded-full bg-violet-500/8 blur-[50px]" />
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/20">Flow</p>
          <div className="mt-8 flex flex-col items-center gap-3">
            {[
              { count: newCount, color: "bg-amber-400", label: "New" },
              { count: readCount, color: "bg-blue-400", label: "Read" },
              { count: doneCount, color: "bg-emerald-400", label: "Done" },
            ].map((s, i, arr) => (
              <div key={s.label} className="flex flex-col items-center">
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${s.color}`} />
                  <span className="text-lg font-bold text-white/70">{s.count}</span>
                </div>
                <span className="text-[10px] font-medium tracking-widest uppercase text-white/20">{s.label}</span>
                {i < arr.length - 1 && (
                  <div className="my-0.5 h-4 w-px bg-gradient-to-b from-white/[0.08] to-transparent" />
                )}
              </div>
            ))}
          </div>
          {total > 0 && (
            <div className="mt-6 rounded-xl bg-white/[0.03] px-4 py-3 text-center">
              <p className="text-xs text-white/25">
                <span className="font-semibold text-white/50">{Math.round((doneCount / total) * 100)}%</span> resolved rate
              </p>
            </div>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/20">Activity Stream</h2>
          {recent.length > 0 && (
            <span className="text-[10px] text-white/15">
              Latest {recent.length} of {total}
            </span>
          )}
        </div>
        <div className="relative mt-5">
          {recent.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/[0.06] py-16 text-center">
              <p className="text-sm text-white/15">No activity yet. Messages will appear here.</p>
            </div>
          ) : (
            <div className="relative">
              <div className="pointer-events-none absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-transparent" />
              <div className="space-y-3">
                {recent.map((msg, i) => (
                  <motion.div
                    key={msg._id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative flex items-center gap-4 rounded-xl px-5 py-4 transition-colors hover:bg-white/[0.02]"
                  >
                    <div className="relative shrink-0">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                        msg.status === "new" ? "bg-amber-400/15 text-amber-300/80" :
                        msg.status === "read" ? "bg-blue-400/15 text-blue-300/80" :
                        "bg-emerald-400/15 text-emerald-300/80"
                      }`}>
                        {msg.name.charAt(0).toUpperCase()}
                      </div>
                      <div className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#05050A] ${
                        msg.status === "new" ? "bg-amber-400" :
                        msg.status === "read" ? "bg-blue-400" : "bg-emerald-400"
                      }`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-medium text-white/80">{msg.name}</span>
                        <span className="truncate text-xs text-white/20">{msg.email}</span>
                      </div>
                      <p className="mt-0.5 truncate text-sm text-white/30">{msg.message}</p>
                    </div>
                    <span className="shrink-0 text-[10px] font-medium text-white/15">
                      {new Date(msg.createdAt).toLocaleDateString("en", { month: "short", day: "numeric" })}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
