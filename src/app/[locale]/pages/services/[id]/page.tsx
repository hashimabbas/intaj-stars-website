"use client"
import Image from "next/image"
import Link from "next/link"
import { useLocale } from "next-intl"
import { useParams } from "next/navigation"
import { servicesData } from "@/lib/services-data"
import { ArrowLeft, ArrowRight, Home } from "lucide-react"

export default function ServiceDetailPage() {
  const locale = useLocale()
  const isRtl = locale === "ar"
  const params = useParams()
  const id = params?.id as string

  const service = servicesData.find((s) => s.id === id)
  const BackIcon = isRtl ? ArrowRight : ArrowLeft

  if (!service) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {isRtl ? "الخدمة غير موجودة" : "Service Not Found"}
          </h1>
          <Link
            href={`/${locale}/pages/services`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Home className="w-5 h-5" />
            {isRtl ? "العودة إلى الخدمات" : "Back to Services"}
          </Link>
        </div>
      </div>
    )
  }

  const displayTitle = isRtl ? service.ar_title : service.title
  const displayDescription = isRtl ? service.ar_description : service.description

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={service.imageSrc}
          alt={displayTitle}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link
            href={`/${locale}/pages/services`}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <BackIcon className="w-4 h-4" />
            {isRtl ? "العودة إلى الخدمات" : "Back to Services"}
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {displayTitle}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl">
            {displayDescription}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {isRtl ? "حول هذه الخدمة" : "About This Service"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-8">
              {displayDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:-translate-y-1"
              >
                {isRtl ? "تواصل معنا" : "Contact Us"}
                <BackIcon className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/pages/services`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                {isRtl ? "جميع الخدمات" : "All Services"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
