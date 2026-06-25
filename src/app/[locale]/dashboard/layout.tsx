"use client"
import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { motion } from "motion/react"
import FloatingDock from "./components/FloatingDock"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const locale = useLocale()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(`/${locale}/login?callbackUrl=/${locale}/dashboard`)
    }
  }, [status, router, locale])

  if (status === "loading") {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-[#05050A]">
        <motion.div
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-xs font-medium tracking-[0.25em] uppercase text-white/15"
        >
          Loading
        </motion.div>
      </div>
    )
  }

  if (!session) return null

  return (
    <div className="relative min-h-screen bg-[#05050A] selection:bg-cyan-400/20">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/5 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute left-1/3 top-0 h-[300px] w-[300px] rounded-full bg-blue-500/4 blur-[80px]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-8 pb-28 pt-16">
        {children}
      </div>
      <FloatingDock />
    </div>
  )
}
