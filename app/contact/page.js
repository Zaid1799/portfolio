'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Phone, Mail, MapPin, Clock, Calendar, ArrowLeft } from "lucide-react"
import Link from 'next/link'

export default function ContactPage() {
  const [language, setLanguage] = useState("en")

  const translations = {
    en: {
      title: "Get in Touch",
      subtitle: "We're here to help with your cooling needs",
      formTitle: "Send us a message",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      projectType: "Project Type",
      message: "Your Message",
      submit: "Send Message",
      officeTitle: "Visit Our Office",
      officeAddress: "Sharia As-Sakhra Al-Musharafa, Al-Muqabalein, Amman, Jordan",
      phoneTitle: "Call Us",
      phoneNumber1: "(962) 781717617",
      phoneNumber2: "(962) 790445976",
      emailTitle: "Email Us",
      emailAddress: "info@acexcellence.com",
      hoursTitle: "Business Hours",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM",
      appointmentTitle: "Schedule an Appointment",
      appointmentDesc: "Book a consultation with our cooling experts",
      residential: "Residential",
      commercial: "Commercial",
      industrial: "Industrial",
      other: "Other",
      contactTab: "Contact Form",
      appointmentTab: "Schedule Appointment",
      backToHome: "Back to Home",
      switchToArabic: "العربية",
    },
    ar: {
      title: "تواصل معنا",
      subtitle: "نحن هنا للمساعدة في احتياجات التبريد الخاصة بك",
      formTitle: "أرسل لنا رسالة",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      projectType: "نوع المشروع",
      message: "رسالتك",
      submit: "إرسال الرسالة",
      officeTitle: "زيارة مكتبنا",
      officeAddress: "شارع الصخرة المشرفة، المقابلين، عمان، الأردن",
      phoneTitle: "اتصل بنا",
      phoneNumber1: "(962) 781717617",
      phoneNumber2: "(962) 790445976",
      emailTitle: "راسلنا عبر البريد الإلكتروني",
      emailAddress: "info@acexcellence.com",
      hoursTitle: "ساعات العمل",
      hours: "الاثنين - الجمعة: ٩:٠٠ صباحًا - ٥:٠٠ مساءً",
      appointmentTitle: "جدولة موعد",
      appointmentDesc: "احجز استشارة مع خبراء التبريد لدينا",
      residential: "سكني",
      commercial: "تجاري",
      industrial: "صناعي",
      other: "آخر",
      contactTab: "نموذج الاتصال",
      appointmentTab: "جدولة موعد",
      backToHome: "العودة إلى الصفحة الرئيسية",
      switchToEnglish: "English",
    },
  }

  const t = translations[language]

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const formValues = Object.fromEntries(formData.entries())

    try {
      const emailResponse = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      })

      const smsResponse = await fetch('/api/send-sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      })

      if (emailResponse.ok && smsResponse.ok) {
        alert('Your message has been sent successfully!')
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('There was an error sending your message. Please try again later.')
    }
  }

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

      {/* Back to Home Button */}
      <div className="absolute top-4 left-4">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>{t.officeTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <p>{t.officeAddress}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 shrink-0" />
                <div>
                  <p>{t.phoneTitle}:</p>
                  <p>{t.phoneNumber1}</p>
                  <p>{t.phoneNumber2}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 shrink-0" />
                <p>{t.emailTitle}: {t.emailAddress}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 shrink-0" />
                <div>
                  <p className="font-semibold">{t.hoursTitle}</p>
                  <p>{t.hours}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form and Appointment Scheduling */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>{t.formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="contact">{t.contactTab}</TabsTrigger>
                  <TabsTrigger value="appointment">{t.appointmentTab}</TabsTrigger>
                </TabsList>
                <TabsContent value="contact">
                  <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.name}</Label>
                        <Input id="name" name="name" placeholder={t.name} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.email}</Label>
                        <Input id="email" name="email" type="email" placeholder={t.email} required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.phone}</Label>
                        <Input id="phone" name="phone" type="tel" placeholder={t.phone} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="project-type">{t.projectType}</Label>
                        <Select name="projectType" required>
                          <SelectTrigger id="project-type">
                            <SelectValue placeholder={t.projectType} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">{t.residential}</SelectItem>
                            <SelectItem value="commercial">{t.commercial}</SelectItem>
                            <SelectItem value="industrial">{t.industrial}</SelectItem>
                            <SelectItem value="other">{t.other}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{t.message}</Label>
                      <Textarea id="message" name="message" placeholder={t.message} rows={5} required />
                    </div>
                    <Button type="submit" className="w-full">{t.submit}</Button>
                  </form>
                </TabsContent>
                <TabsContent value="appointment">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.appointmentTitle}</CardTitle>
                      <CardDescription>{t.appointmentDesc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                          <Label htmlFor="appointment-name">{t.name}</Label>
                          <Input id="appointment-name" name="name" placeholder={t.name} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="appointment-email">{t.email}</Label>
                          <Input id="appointment-email" name="email" type="email" placeholder={t.email} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="appointment-date">Preferred Date</Label>
                          <Input id="appointment-date" name="appointmentDate" type="date" required />
                        </div>
                        <Button type="submit" className="w-full">Schedule Appointment</Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <Card className="mt-8">
          <CardContent className="p-0">
            <iframe
              title="AC Excellence Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.630821087298!2d35.91742661511701!3d31.938396981244425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca7e4aaaaaa01%3A0x8693a9183825010b!2sAl-Muqabalain%2C%20Amman%2C%20Jordan!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}