"use client"
import Image from "next/image"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { servicesData } from "@/lib/services-data"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function OurServices() {
  const t = useTranslations("ourServices")
  const locale = useLocale()
  const isRtl = locale === "ar"
  const topServices = servicesData.slice(0, 4)
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight

  return (
    <section
      className="relative py-20 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 mb-4">
            {t("badge") || "Our Services"}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("heading")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("subtitle") || "Comprehensive digital solutions built for your success"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {topServices.map((service) => {
            const displayTitle = isRtl ? service.ar_title : service.title
            const displayDescription = isRtl ? service.ar_description : service.description
            const isComingSoon = service.href === "#"

            const card = (
              <div className="group relative flex flex-col bg-white dark:bg-gray-800/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-52 overflow-hidden">
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

                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {displayTitle}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4 flex-1">
                    {displayDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
                    {t("moreButton") || "Learn More"}
                    <ArrowIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </span>
                </div>
              </div>
            )

            if (isComingSoon) {
              return <div key={service.id}>{card}</div>
            }

            return (
              <Link key={service.id} href={`/${locale}${service.href}`}>
                {card}
              </Link>
            )
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href={`/${locale}/pages/services`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:-translate-y-1"
          >
            {t("viewAll") || "View All Services"}
            <ArrowIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
