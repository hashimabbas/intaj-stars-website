"use client"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { useLocale } from "next-intl"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const locale = useLocale()
  const callbackUrl = searchParams.get("callbackUrl") || `/${locale}/dashboard`
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    const result = await signIn("credentials", { email, password, redirect: false })
    if (result?.error) {
      setError("Invalid email or password")
      setLoading(false)
    } else {
      router.push(callbackUrl)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-6">
          {locale === "ar" ? "تسجيل الدخول" : "Login"}
        </h1>
        {error && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md text-center text-sm">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {locale === "ar" ? "البريد الإلكتروني" : "Email"}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {locale === "ar" ? "كلمة المرور" : "Password"}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50"
          >
            {loading
              ? (locale === "ar" ? "جاري تسجيل الدخول..." : "Signing in...")
              : (locale === "ar" ? "تسجيل الدخول" : "Sign In")}
          </button>
        </form>
        <div className="mt-6 text-center">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            {locale === "ar" ? "أو" : "Or"}
          </div>
          <button
            onClick={() => signIn("google", { callbackUrl })}
            className="w-full bg-white border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold py-2 px-4 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {locale === "ar" ? "تسجيل الدخول بـ Google" : "Sign in with Google"}
          </button>
        </div>
      </div>
    </div>
  )
}
