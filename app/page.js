'use client'

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Snowflake, Phone, Star, Globe, MapPin, ArrowRight, StarIcon } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [language, setLanguage] = useState("en")
  const carouselRef = useRef(null)

  const translations = {
    en: {
      title: "LUXURIOUS LEVEL",
      tagline: "Elevating Comfort to New Heights",
      cta: "Experience Luxury",
      clientsTitle: "Our Esteemed Clients",
      testimonialsTitle: "Client Testimonials",
      whyChooseUsTitle: "Why Choose Luxurious Level",
      contactTitle: "Connect with Luxury",
      footer: "Luxurious Level - Setting New Standards in Comfort",
      cuttingEdgeTech: "Cutting-Edge Technology",
      cuttingEdgeDesc: "We employ the latest in HVAC technology to ensure optimal performance and energy efficiency.",
      expertTeam: "Expert Team",
      expertTeamDesc: "Our team of certified professionals brings years of experience in handling complex cooling projects.",
      tailoredSolutions: "Tailored Solutions",
      tailoredSolutionsDesc: "We design custom cooling solutions to meet the unique needs of each client and industry.",
      scheduleConsultation: "Schedule a Consultation",
      requestQuote: "Request a Custom Quote",
      copyright: "© 2024 Luxurious Level. All rights reserved.",
      switchToArabic: "العربية",
      contactInfo: "Contact Information",
      location: "Location",
      phoneNumbers: "Phone Numbers",
      viewProjects: "View Our Projects",
      exploreProjects: "Explore Our Luxurious Solutions",
    },
    ar: {
      title: "المستوى الفاخر",
      tagline: "رفع مستوى الراحة إلى آفاق جديدة",
      cta: "اختبر الفخامة",
      clientsTitle: "عملاؤنا المميزون",
      testimonialsTitle: "آراء العملاء",
      whyChooseUsTitle: "لماذا تختار المستوى الفاخر",
      contactTitle: "تواصل مع الفخامة",
      footer: "المستوى الفاخر - وضع معايير جديدة في الراحة",
      cuttingEdgeTech: "تكنولوجيا متطورة",
      cuttingEdgeDesc: "نستخدم أحدث تقنيات التدفئة والتهوية وتكييف الهواء لضمان الأداء الأمثل وكفاءة الطاقة.",
      expertTeam: "فريق خبراء",
      expertTeamDesc: "يجلب فريقنا من المهنيين المعتمدين سنوات من الخبرة في التعامل مع مشاريع التبريد المعقدة.",
      tailoredSolutions: "حلول مخصصة",
      tailoredSolutionsDesc: "نصمم حلول تبريد مخصصة لتلبية الاحتياجات الفريدة لكل عميل وصناعة.",
      scheduleConsultation: "جدولة استشارة",
      requestQuote: "طلب عرض سعر مخصص",
      copyright: "© 2024 المستوى الفاخر. جميع الحقوق محفوظة.",
      switchToEnglish: "English",
      contactInfo: "معلومات الاتصال",
      location: "الموقع",
      phoneNumbers: "أرقام الهاتف",
      viewProjects: "عرض مشاريعنا",
      exploreProjects: "استكشف حلولنا الفاخرة",
    },
  }

  const t = translations[language]

  const clients = [
    { name: "Food Gate Market", industry: "Food Industry", project: "Market air conditioning and refrigeration system", logo: "/img/companys/foodgate.png" },
    { name: "The Cake Shop", industry: "Food Industry", project: "Bakery air conditioning and cooling solution", logo: "/img/companys/cakeshop.png" },
    { name: "Red Bull", industry: "Food Industry", project: "Energy drink warehouse cooling and ventilation", logo: "/img/companys/redbull.png" },
    { name: "Secrets Cakes", industry: "Food Industry", project: "Cake storage air conditioning and refrigeration", logo: "/img/companys/secretscakes.png" },
    { name: "Centro Stores", industry: "Food Industry", project: "Retail store cooling and climate control", logo: "/img/companys/centro.png" },
    { name: "Go Mashawi", industry: "Food Industry", project: "Restaurant air conditioning and kitchen ventilation", logo: "/img/companys/gomashawi.png" },
    { name: "Reem Shawerma", industry: "Food Industry", project: "Shawerma restaurant air conditioning system", logo: "/img/companys/reemshawerma.png" },
    { name: "Ward", industry: "Food Industry", project: "Restaurant cooling and ventilation solution", logo: "/img/companys/ward.png" },
    { name: "ArabiaWeather", industry: "Weather", project: "Weather station HVAC and climate control", logo: "/img/companys/arabiaweather.png" },
    { name: "Fitness Park Gym", industry: "Fitness", project: "Gym air conditioning and ventilation system", logo: "/img/companys/fitnesspark.png" },
    { name: "Goethe Institute", industry: "Education", project: "Language center air conditioning solution", logo: "/img/companys/goethe.png" },
    { name: "Gerard Ice Cream", industry: "Food Industry", project: "Ice cream shop air conditioning and refrigeration", logo: "/img/companys/gerardicecream.png" },
    { name: "Emad Sahouri's Garden Furniture", industry: "Furniture", project: "Furniture showroom air conditioning system", logo: "/img/companys/sahourifurniture.png" },
    { name: "Weedo app", industry: "Service Platform", project: "Supermarket air conditioning and refrigeration solution", logo: "/img/companys/weedo.png" },
    { name: "Humanity & Inclusion", industry: "Non-Profit Organization", project: "NGO facility air conditioning and climate control", logo: "/img/companys/handicap.png" },
    { name: "Al Zanbaka Est Import & Export", industry: "Import & Export", project: "Commercial warehouse air conditioning and climate control", logo: "/img/companys/alzanbaka.png" },
    { name: "Point Comfort", industry: "Medical Products", project: "Luxury medical sleep products air conditioning", logo: "/img/companys/point.png" },
  ];

  useEffect(() => {
    const carousel = carouselRef.current
    let animationId

    const scroll = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0
      } else {
        carousel.scrollLeft += 2
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    const stopScroll = () => cancelAnimationFrame(animationId)
    const startScroll = () => {
      stopScroll()
      animationId = requestAnimationFrame(scroll)
    }

    carousel.addEventListener('mouseenter', stopScroll)
    carousel.addEventListener('mouseleave', startScroll)

    return () => {
      stopScroll()
      carousel.removeEventListener('mouseenter', stopScroll)
      carousel.removeEventListener('mouseleave', startScroll)
    }
  }, [])

  return (
    <div className={`min-h-screen bg-background text-foreground ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Language Toggle */}
      <div className="absolute top-4 right-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
        >
          <Globe className="mr-2 h-4 w-4" />
          {language === "en" ? t.switchToArabic : t.switchToEnglish}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/img/logo.png"
            alt="Luxurious Level Logo"
            width={300}
            height={100}
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl mb-8">{t.tagline}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                {t.cta}
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                {t.viewProjects}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Showcase Section */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">{t.clientsTitle}</h2>
        <div 
          ref={carouselRef}
          className="flex overflow-x-hidden space-x-8 pb-8"
          style={{ scrollBehavior: 'auto' }}
        >
          {clients.map((client) => (
            <Card key={client.name} className="flex-shrink-0 w-64 bg-white">
              <CardHeader className="flex items-center justify-center h-40">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={200}
                  height={100}
                  className="max-w-full max-h-full object-contain"
                />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-lg mb-2">{client.name}</CardTitle>
                <Badge variant="secondary" className="mb-2">{client.industry}</Badge>
                <p className="text-sm text-muted-foreground">{client.project}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">{t.testimonialsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <StarIcon className="text-yellow-400 w-5 h-5 fill-current" />
                <StarIcon className="text-yellow-400 w-5 h-5 fill-current" />
                <StarIcon className="text-yellow-400 w-5 h-5 fill-current" />
                <StarIcon className="text-yellow-400 w-5 h-5 fill-current" />
                <StarIcon className="text-yellow-400 w-5 h-5 fill-current" />
              </div>
              <p className="italic mb-4">
                Luxurious Level transformed our hotel&apos;s climate control. The attention to detail and quality of service was impeccable.
              </p>
              <p className="font-semibold">
                - Sarah Johnson, General Manager at Grand Luxe Hotel
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <StarIcon className="text-yellow-400 w-5 h-5 fill-current" />
                <StarIcon className="text-yellow-400 w-5 h-5 fill-current" />
                <StarIcon className="text-yellow-400 w-5 h-5 fill-current" />
                <StarIcon className="text-yellow-400 w-5 h-5 fill-current" />
                <StarIcon className="text-yellow-400 w-5 h-5 fill-current" />
              </div>
              <p className="italic mb-4">
                The energy efficiency and comfort levels in our office tower have significantly improved thanks to Luxurious Level&apos;s innovative solutions.
              </p>
              <p className="font-semibold">
                - Michael Chen, Facilities Director at Prestige Tower
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">{t.whyChooseUsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <Snowflake className="w-12 h-12 mb-4 text-blue-500" />
              <CardTitle>{t.cuttingEdgeTech}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t.cuttingEdgeDesc}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="w-12 h-12 mb-4 text-green-500" />
              <CardTitle>{t.expertTeam}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t.expertTeamDesc}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Building2 className="w-12 h-12 mb-4 text-purple-500" />
              <CardTitle>{t.tailoredSolutions}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t.tailoredSolutionsDesc}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-black text-white">
        <h2 className="text-3xl font-bold text-center mb-8">{t.exploreProjects}</h2>
        <p className="text-center text-lg mb-8">Discover our innovative luxury cooling solutions across various industries.</p>
        <div className="flex justify-center">
          <Link href="/projects">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              {t.viewProjects}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">{t.contactTitle}</h2>
        <div className="flex flex-col items-center gap-4  mb-8">
          <Link href="/contact">
            <Button variant="default" size="lg" className="w-full max-w-md">
              <Phone className="mr-2 h-4 w-4" /> {t.scheduleConsultation}
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="w-full max-w-md">
              <Users className="mr-2 h-4 w-4" /> {t.requestQuote}
            </Button>
          </Link>
        </div>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>{t.contactInfo}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 shrink-0" />
              <p>{t.location}: شارع الصخرة المشرفة، المقابلين، عمان، الأردن</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 shrink-0" />
              <div>
                <p>{t.phoneNumbers}:</p>
                <p>(962) 781717617</p>
                <p>(962) 790445976</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-white text-center">
        <p>{t.copyright}</p>
        <div className="flex justify-center items-center mt-4">
          <Snowflake className="mr-2 h-6 w-6" />
          <span className="text-lg font-semibold">{t.footer}</span>
        </div>
      </footer>
    </div>
  )
}