"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLocale } from "next-intl"
import { motion } from "motion/react"
import { LayoutDashboard, MessageSquareText, Cog } from "lucide-react"

const items = [
  { href: "/dashboard", label: "Pulse", icon: LayoutDashboard },
  { href: "/dashboard/contact-messages", label: "Inbox", icon: MessageSquareText },
  { href: "/dashboard/settings", label: "Settings", icon: Cog },
]

export default function FloatingDock() {
  const pathname = usePathname()
  const locale = useLocale()

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-2xl border border-white/[0.08] bg-[#0A0A14]/80 px-2 py-2 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        {items.map((item) => {
          const fullPath = `/${locale}${item.href}`
          const isActive = pathname === fullPath || pathname.startsWith(fullPath + "/")
          const Icon = item.icon
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center gap-2.5 rounded-xl px-4 py-2.5 transition-colors"
              >
                {isActive && (
                  <motion.div
                    layoutId="dock-active"
                    className="absolute inset-0 rounded-xl bg-white/[0.06]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <div className="relative z-10 flex items-center gap-2.5">
                  <Icon
                    size={16}
                    strokeWidth={1.5}
                    className={isActive ? "text-cyan-400" : "text-white/35"}
                  />
                  <span
                    className={`relative text-sm font-medium tracking-tight ${
                      isActive ? "text-white/90" : "text-white/40"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="dock-dot"
                    className="absolute -top-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          )
        })}
      </div>
    </motion.div>
  )
}
