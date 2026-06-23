"use client"
import Image from "next/image"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { servicesData } from "@/lib/services-data"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const locale = useLocale()
  const isRtl = locale === "ar"
  const t = useTranslations("ourServices")
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {isRtl ? "خدماتنا" : "Our Services"}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {isRtl
              ? "حلول رقمية شاملة مصممة لتحويل أعمالك ودفع عجلة النمو"
              : "Comprehensive digital solutions designed to transform your business and drive growth"}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {servicesData.map((service) => {
              const displayTitle = isRtl ? service.ar_title : service.title
              const displayDescription = isRtl ? service.ar_description : service.description
              const isComingSoon = service.href === "#"

              const CardContent = (
                <div className="group relative flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.imageSrc}
                      alt={displayTitle}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {isComingSoon && (
                      <span className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400 text-amber-900 shadow-md">
                        {isRtl ? "قريباً" : "Coming Soon"}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {displayTitle}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-5 flex-1">
                      {displayDescription}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
                      {t("moreButton")}
                      <ArrowIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </span>
                  </div>
                </div>
              )

              if (isComingSoon) {
                return <div key={service.id}>{CardContent}</div>
              }

              return (
                <Link key={service.id} href={`/${locale}${service.href}`}>
                  {CardContent}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
