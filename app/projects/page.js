'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, ArrowLeft } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsPage() {
  const [language, setLanguage] = useState("en")
  const [visibleSections, setVisibleSections] = useState([])

  const translations = {
    en: {
      title: "Our Projects",
      subtitle: "Explore our onsite cooling solutions",
      infrastructure: "Infrastructure",
      coolingRooms: "Cooling Rooms",
      acInstallation: "AC Installation",
      backToHome: "Back to Home",
      switchToArabic: "العربية",
    },
    ar: {
      title: "مشاريعنا",
      subtitle: "استكشف حلول التبريد الخاصة بنا في الموقع",
      infrastructure: "البنية التحتية",
      coolingRooms: "غرف التبريد",
      acInstallation: "تركيب المكيفات",
      backToHome: "العودة إلى الصفحة الرئيسية",
      switchToEnglish: "English",
    },
  }

  const t = translations[language]

  const projects = [
    {
      category: "infrastructure",
      title: t.infrastructure,
      images: Array.from({ length: 10 }, (_, i) => `/img/projects/Infrastructure/Infrastructure${i + 1}.jpeg`),
    },
    {
      category: "coolingRooms",
      title: t.coolingRooms,
      images: Array.from({ length: 7 }, (_, i) => `/img/projects/coolingRoom/coolingRoom${i + 1}.jpeg`),
    },
    {
      category: "acInstallation",
      title: t.acInstallation,
      images: Array.from({ length: 19 }, (_, i) => `/img/projects/ac/ac${i + 1}.jpeg`),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, entry.target.id])])
          }
        })
      },
      { threshold: 0.1 }
    )

    projects.forEach((project) => {
      const element = document.getElementById(project.category)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [projects])

  return (
    <div className={`min-h-screen bg-background text-foreground ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-10">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
        >
          <Globe className="mr-2 h-4 w-4" />
          {language === "en" ? t.switchToArabic : t.switchToEnglish}
        </Button>
      </div>

      {/* Back to Home Button */}
      <div className="fixed top-4 left-4 z-10">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.backToHome}
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-2">{t.title}</h1>
        <p className="text-xl text-center text-muted-foreground mb-12">{t.subtitle}</p>

        {projects.map((project) => (
          <section
            key={project.category}
            id={project.category}
            className={`mb-24 transition-opacity duration-1000 ${
              visibleSections.includes(project.category) ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.images.map((image, index) => (
                    <div key={index} className="relative h-64 overflow-hidden rounded-lg">
                      <Image
                        src={image}
                        alt={`${project.title} ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        ))}
      </div>
    </div>
  )
}