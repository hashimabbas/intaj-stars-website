"use client"
import { useSession, signOut } from "next-auth/react"
import { useTranslations, useLocale } from "next-intl"
import Link from "next/link"

export default function AuthButton() {
  const { data: session } = useSession()
  const t = useTranslations("navbar")
  const locale = useLocale()

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        {session.user.image && (
          <img
            src={session.user.image}
            alt={session.user.name || ""}
            className="w-7 h-7 rounded-full"
          />
        )}
        <span className="text-sm text-gray-700 dark:text-gray-300 hidden md:inline">
          {session.user.name}
        </span>
        <button
          onClick={() => signOut()}
          className="text-sm text-red-500 hover:text-red-700 font-semibold transition-colors duration-200"
        >
          {t("logout") || "Logout"}
        </button>
      </div>
    )
  }

  return (
    <Link
      href={`/${locale}/login`}
      className="text-sm text-blue-500 hover:text-blue-700 font-semibold transition-colors duration-200"
    >
      {t("login") || "Login"}
    </Link>
  )
}
