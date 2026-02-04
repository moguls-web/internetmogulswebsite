"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Menu,
  X,
  ArrowRight,
  Play,
  Globe,
  Share2,
  Bot,
  MessageSquare,
  LineChart,
  Target,
  Zap,
  Users,
  Award,
  MapPin,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const heroImages = [
  "/modern-corporate-office-team-meeting-with-digital-.jpg",
  "/ecommerce-business-team-working-on-laptop-with-ana.jpg",
  "/startup-office-with-creative-team-brainstorming.jpg",
  "/luxury-retail-store-interior-with-customers.jpg",
  "/healthcare-clinic-modern-reception-area.jpg",
  "/restaurant-interior-with-happy-customers-dining.jpg",
  "/real-estate-office-with-agents-and-clients.jpg",
  "/education-institution-campus-with-students.jpg",
]

const navItems = [
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "#industries" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

const challenges = [
  {
    number: "01",
    title: "Low Online Visibility",
    description:
      "Your competitors rank higher. Your brand gets lost in the noise. Potential customers can't find you when they search.",
  },
  {
    number: "02",
    title: "Poor Conversion Rates",
    description:
      "Traffic comes. Sales don't. Your website looks good—but doesn't convert visitors into paying customers.",
  },
  {
    number: "03",
    title: "Wasted Ad Spend",
    description: "Money goes out, results don't come in. Campaigns run, budgets burn—but ROI remains a mystery.",
  },
  {
    number: "04",
    title: "Lead Leakage",
    description: "Leads arrive… then disappear. Follow-ups fail. Your sales pipeline has more holes than a sieve.",
  },
  {
    number: "05",
    title: "Agency Fatigue",
    description: "New agency, new promises, same results. Months pass, dashboards grow—but business doesn't.",
  },
  {
    number: "06",
    title: "No Brand Differentiation",
    description: "Customers scroll past your brand like every other one. Nothing sticks. Nothing differentiates.",
  },
]

const services = [
  {
    number: "01",
    title: "Conversion-Focused Websites",
    description: "Websites that don't just look premium—but behave like your best salesperson 24×7.",
    image: "/modern-website-design-on-laptop-sleek-professional.jpg",
  },
  {
    number: "02",
    title: "Visual Storytelling",
    description: "Customers buy what they feel. Our visuals create that feeling before they ever engage.",
    image: "/professional-photography-team-shooting-product.jpg",
  },
  {
    number: "03",
    title: "Search Visibility (SEO)",
    description: "We don't chase vanity traffic. We rank you for keywords that actually convert into revenue.",
    image: "/google-search-results-on-screen-showing-top-rankin.jpg",
  },
  {
    number: "04",
    title: "ROI-Driven Ad Campaigns",
    description: "Data-backed campaigns planned for maximum impact. The end result? Measurable growth and sales.",
    image: "/digital-marketing-dashboard-analytics-graphs-11.jpg",
  },
  {
    number: "05",
    title: "Social & Influencer Marketing",
    description: "Strategic content and influencer partnerships that actually drive engagement and conversions.",
    image: "/influencer-creating-content-for-brand-social-media.jpg",
  },
  {
    number: "06",
    title: "Performance Analytics",
    description: "Complete marketing ROI visibility in one place—sleep-well therapy for business owners.",
    image: "/business-analytics-dashboard-performance-metrics.jpg",
  },
]

const aiFeatures = [
  {
    icon: Bot,
    title: "AI-Powered Optimization",
    description:
      "Our proprietary algorithms analyze market trends, competitor strategies, and demand patterns to maximize your ROI in real-time.",
  },
  {
    icon: MessageSquare,
    title: "Intelligent Chatbots",
    description:
      "24/7 AI assistants that handle customer inquiries, lead qualification, and personalized recommendations—reducing workload while improving satisfaction.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description:
      "Forecast demand, identify patterns, and anticipate market shifts before they happen with machine learning-driven insights.",
  },
  {
    icon: Target,
    title: "Automated Campaign Management",
    description:
      "AI-driven ad optimization that automatically adjusts bids, targeting, and creative elements to maximize ROI across all channels.",
  },
  {
    icon: Zap,
    title: "Dynamic Pricing Engine",
    description:
      "Real-time price adjustments based on demand, competition, and market analysis to ensure optimal pricing at every moment.",
  },
  {
    icon: Users,
    title: "Customer Personalization",
    description:
      "Deliver hyper-personalized experiences using AI that learns customer preferences, behavior, and history to drive loyalty.",
  },
]

const industries = [
  { name: "E-Commerce", icon: "🛒", description: "Online stores & D2C brands" },
  { name: "Healthcare", icon: "🏥", description: "Clinics & medical practices" },
  { name: "Real Estate", icon: "🏠", description: "Developers & brokers" },
  { name: "Education", icon: "🎓", description: "Schools & edtech" },
  { name: "Restaurants", icon: "🍽️", description: "F&B & cloud kitchens" },
  { name: "Retail", icon: "🏪", description: "Stores & franchises" },
  { name: "Finance", icon: "💰", description: "Banks & fintech" },
  { name: "Travel", icon: "✈️", description: "Agencies & operators" },
]

const caseStudies = [
  {
    title: "E-Commerce Brand",
    type: "D2C Fashion Brand",
    result: "+180% Revenue",
    challenges:
      "Revenue growth through paid campaigns, SEO-driven organic traffic surge, Conversion rate optimization, Cart abandonment reduction",
    image: "/fashion-ecommerce-website-on-devices-with-shopping.jpg",
  },
  {
    title: "Healthcare Clinic Chain",
    type: "Multi-Location Medical Practice",
    result: "+250% Leads",
    challenges:
      "Local SEO dominance across locations, Patient acquisition cost reduction, Appointment booking automation, Brand trust building",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Real Estate Developer",
    type: "Premium Residential Projects",
    result: "3x Site Visits",
    challenges:
      "High-intent lead generation, Digital launch campaigns, Virtual tour integration, Cost per lead optimization",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "EdTech Platform",
    type: "Online Learning Startup",
    result: "+400% Sign-ups",
    challenges: "User acquisition at scale, Content marketing strategy, Paid media optimization, Retention improvement",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Restaurant Chain",
    type: "QSR & Fine Dining Portfolio",
    result: "2x Footfall",
    challenges: "Location-based marketing, Social media engagement, Food delivery optimization, Brand differentiation",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Retail Franchise",
    type: "Multi-Brand Retail Network",
    result: "+150% Sales",
    challenges:
      "Omnichannel marketing, Foot traffic to online conversion, Loyalty program activation, Seasonal campaign management",
    image: "/placeholder.svg?height=600&width=800",
  },
]

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO, TechStart India",
    company: "E-Commerce",
    quote:
      "Internet Moguls transformed our digital presence. Our online revenue grew 180% in just 6 months. They understand business, not just marketing.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Priya Mehta",
    role: "Director, HealthFirst Clinics",
    company: "Healthcare",
    quote:
      "Patient inquiries increased 250% after partnering with IM. Their local SEO strategy put us on the map—literally. Best investment we made.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Amit Kapoor",
    role: "MD, Prestige Developers",
    company: "Real Estate",
    quote:
      "From digital launches to lead generation—they delivered on every promise. Site visits tripled. Our sales team couldn't keep up.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const offices = [
  {
    city: "New Delhi",
    country: "India",
    type: "Headquarters",
    address:
      "20, First Floor, Local Shopping Complex, Near Pushp Vihar, Madangir Village, Madangir, New Delhi, Delhi 110062",
    image: "/placeholder.svg?height=500&width=700",
  },
  {
    city: "Goa",
    country: "India",
    type: "Creative Hub",
    address: "Panjim, Goa 403001",
    image: "/placeholder.svg?height=500&width=700",
  },
  {
    city: "Vancouver",
    country: "Canada",
    type: "North American Operations",
    address: "Downtown Vancouver, BC V6C 3E8",
    image: "/placeholder.svg?height=500&width=700",
  },
]

const clientLogos = [
  "Tech Startup",
  "Healthcare Brand",
  "Real Estate Co",
  "EdTech Platform",
  "Restaurant Chain",
  "Retail Brand",
  "Finance Corp",
  "Travel Agency",
  "Fashion Brand",
  "Auto Dealer",
  "Fitness Chain",
  "SaaS Company",
]

export function DigitalMarketingContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentHeroImage, setCurrentHeroImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif text-xl lg:text-2xl font-bold tracking-tight">Internet Moguls</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-bold tracking-wide text-muted-foreground hover:text-foreground transition-colors uppercase"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+918826104440"
                className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 88261 04440
              </a>
              <Button className="bg-foreground text-background hover:bg-foreground/90 px-6 font-bold">
                Book Free Audit
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
            <nav className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-muted-foreground hover:text-foreground transition-colors uppercase"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-foreground text-background hover:bg-foreground/90 mt-4 font-bold">
                Book Free Audit
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHeroImage ? "opacity-30" : "opacity-0"
              }`}
            >
              <Image
                src={img || "/placeholder.svg"}
                alt="Business imagery"
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <p className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6">
            Digital Marketing Agency
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1] mb-8">
            Businesses <span className="font-serif italic font-normal">call us</span>
            <br />
            when their existing agency lets them down
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10 font-medium">
            We drive more revenue, generate more qualified leads, increase conversions—and yes, build brands that
            customers remember.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-bold"
            >
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-base font-bold group bg-transparent">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 lg:gap-16">
            <div>
              <p className="text-4xl lg:text-5xl font-bold">16+</p>
              <p className="text-sm font-bold text-muted-foreground tracking-wide">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold">1900+</p>
              <p className="text-sm font-bold text-muted-foreground tracking-wide">Clients Served</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold">90</p>
              <p className="text-sm font-bold text-muted-foreground tracking-wide">Days to Results</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Story Section */}
      <section id="about" className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4">
                Born on 15th August, 2009
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-8">
                Since 2009, we've helped <span className="font-serif italic font-normal">businesses grow</span>.
              </h2>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-foreground rounded-full" />
                  <span className="font-bold">1900+ Business Owners</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-foreground rounded-full" />
                  <span className="font-bold">Countless Marketing Heads</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-foreground rounded-full" />
                  <span className="font-bold">CEOs, Founders & Growth Leaders</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-foreground rounded-full" />
                  <span className="font-bold text-muted-foreground">
                    — who love us for helping them achieve their targets
                  </span>
                </li>
              </ul>

              <p className="text-muted-foreground text-lg mb-8">
                We've been voted the Best Digital Marketing Agency multiple years in a row—because we focus on results,
                not vanity metrics.
              </p>

              <div className="space-y-4">
                <p className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase">Our Recognitions</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-background px-4 py-2 border border-border">
                    <Award className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-bold">Best Digital Agency – 2023</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background px-4 py-2 border border-border">
                    <Award className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-bold">E4M Maverick Gold – 2023</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background px-4 py-2 border border-border">
                    <Award className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-bold">Agency of the Year</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/placeholder.svg?height=800&width=640"
                  alt="Internet Moguls team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/placeholder.svg?height=800&width=640"
                  alt="Avijit Arya - Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4">
                Meet Our Founder
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-8">
                Built by a <span className="font-serif italic font-normal">practitioner</span>,<br />
                for practitioners
              </h2>

              <p className="text-muted-foreground text-lg mb-6">
                My father is a hotelier. We built two of India's most loved boutique hotels. In 2009, I searched for an
                agency that truly understood business—not just marketing jargon. I found none.
              </p>

              <p className="text-muted-foreground text-lg mb-6">
                So I built Internet Moguls—starting with just 4 people. Today, we're a 100+ member team working with
                1900+ businesses across industries.
              </p>

              <p className="text-foreground text-lg font-medium mb-8">
                Every business has a unique story. We help you tell it in a way that resonates with customers and drives
                measurable results.
              </p>

              <div className="border-l-4 border-foreground pl-6">
                <p className="font-bold text-lg">Avijit Arya</p>
                <p className="text-muted-foreground">Founder, Internet Moguls</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span>Father of 2 Girls</span>
                <span>•</span>
                <span>6 Dogs</span>
                <span>•</span>
                <span>Husband to a Super Woman</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.3em] text-background/60 uppercase mb-4">Common Challenges</p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
              If this feels <span className="font-serif italic font-normal">familiar</span>,<br />
              you're not alone
            </h2>
            <p className="text-background/70 text-lg max-w-2xl mx-auto">
              These are the exact challenges 1900+ businesses came to us with:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge) => (
              <div
                key={challenge.number}
                className="group p-8 border border-background/20 hover:border-background/40 transition-colors"
              >
                <span className="text-4xl font-bold text-background/30 group-hover:text-background/50 transition-colors">
                  {challenge.number}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3">{challenge.title}</h3>
                <p className="text-background/70">{challenge.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-background/70 mt-12 text-lg font-medium">
            We fix this—with business intelligence, not guesswork.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4">Our Services</p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              15 solutions. One <span className="font-serif italic font-normal">revenue</span> goal.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.number} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-background text-4xl font-bold opacity-50">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:underline underline-offset-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline" className="font-bold bg-transparent">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Guest Tracker Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Guest Tracker"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[0.3em] text-amber-500 uppercase mb-4">
              Coming Soon: IM Lead Tracker
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
              Your <span className="font-serif italic font-normal">website will soon follow up</span> like your smartest
              salesperson
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              If a visitor leaves without converting—we call, email & chat them back. Your website will soon behave like
              your smartest sales executive.
            </p>
            <Button className="bg-foreground text-background hover:bg-foreground/90 font-bold">
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Artificial Intelligence
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              The future of <span className="font-serif italic font-normal">digital marketing</span> runs 24×7
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-background border border-border hover:border-foreground/30 transition-colors"
              >
                <feature.icon className="h-10 w-10 mb-6" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold">40%</p>
              <p className="text-sm font-bold text-muted-foreground">Avg Revenue Increase</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold">60%</p>
              <p className="text-sm font-bold text-muted-foreground">Reduction in Manual Tasks</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold">24/7</p>
              <p className="text-sm font-bold text-muted-foreground">Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4">Our Process</p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              The 3-step <span className="font-serif italic font-normal">business growth</span> path
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Our proven three-step process to transform your digital presence and revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Audit",
                subtitle: "Find Missed Revenue",
                description: "We uncover revenue leaks across website, ads, SEO, and marketing funnels.",
              },
              {
                step: "02",
                title: "Activate",
                subtitle: "Fix Your Digital Ecosystem",
                description: "We optimize your website, SEO, ads, and social channels for conversions.",
              },
              {
                step: "03",
                title: "Accelerate",
                subtitle: "Scale What Works",
                description: "Once success is visible, we scale to maximize ROI and long-term growth.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="text-center p-8 border border-border hover:border-foreground/30 transition-colors"
              >
                <span className="text-6xl font-bold text-muted-foreground/30">{item.step}</span>
                <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
                <p className="text-lg font-medium text-foreground mt-2">{item.subtitle}</p>
                <p className="text-muted-foreground mt-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.3em] text-background/60 uppercase mb-4">Real Results</p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              <span className="font-serif italic font-normal">Performance</span> that reflects on your balance sheet.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { value: "+35%", label: "Average Revenue Growth" },
              { value: "3x", label: "Lead Generation" },
              { value: "2x", label: "Conversion Rate" },
              { value: "-40%", label: "Cost Per Acquisition" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 border border-background/20">
                <p className="text-4xl lg:text-5xl font-bold">{stat.value}</p>
                <p className="text-background/70 mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="relative aspect-[21/9] max-w-4xl mx-auto">
            <Image src="/placeholder.svg?height=600&width=1400" alt="Business success" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Industries We Serve
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              Expertise across <span className="font-serif italic font-normal">every sector</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-8 border border-border hover:border-foreground/30 hover:bg-muted/30 transition-all text-center group cursor-pointer"
              >
                <span className="text-4xl mb-4 block">{industry.icon}</span>
                <h3 className="font-bold text-lg">{industry.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4">Growth Stories</p>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
                What real <span className="font-serif italic font-normal">businesses achieved</span>
              </h2>
            </div>
            <Link href="#" className="hidden lg:flex items-center gap-2 font-bold hover:underline underline-offset-4">
              View All Case Studies
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-background border border-border hover:border-foreground/30 transition-colors overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-background px-3 py-1">
                    <span className="font-bold text-sm">{study.result}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground font-medium">{study.type}</p>
                  <h3 className="text-xl font-bold mt-1 mb-3">{study.title}</h3>
                  <p className="text-sm text-muted-foreground">{study.challenges}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 lg:hidden">
            <Link href="#">
              <Button variant="outline" className="font-bold bg-transparent">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Why leading brands trust us
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              <span className="font-serif italic font-normal">Trust</span> stories
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="flex items-center gap-8 lg:gap-16">
                <button
                  onClick={prevTestimonial}
                  className="p-3 border border-border hover:border-foreground/30 transition-colors shrink-0"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="flex-1 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-4">
                    {testimonials[currentTestimonial].company}
                  </p>
                  <blockquote className="text-xl lg:text-2xl font-medium mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <p className="font-bold">{testimonials[currentTestimonial].name}</p>
                  <p className="text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-3 border border-border hover:border-foreground/30 transition-colors shrink-0"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-foreground" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4">Global Presence</p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              Where <span className="font-serif italic font-normal">business</span> meets innovation
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              With offices across three continents, we bring local expertise and global perspectives to every business
              we partner with.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={office.image || "/placeholder.svg"}
                    alt={`${office.city} office`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm font-bold text-muted-foreground">{office.country}</p>
                <h3 className="text-xl font-bold mt-1">
                  {office.city} – {office.type}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Contact background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4">Let's Work Together</p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to scale your <span className="font-serif italic font-normal">revenue</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            This is a 45-minute revenue decoding session for decision-makers only.
          </p>
          <p className="text-sm font-bold text-muted-foreground mb-8">This is not a sales call.</p>

          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 px-10 py-6 text-base font-bold"
          >
            Book Your Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 mt-16">
            <div className="text-center">
              <p className="text-3xl lg:text-4xl font-bold">16+</p>
              <p className="text-sm font-bold text-muted-foreground">Years</p>
            </div>
            <div className="text-center">
              <p className="text-3xl lg:text-4xl font-bold">1900+</p>
              <p className="text-sm font-bold text-muted-foreground">Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl lg:text-4xl font-bold">90</p>
              <p className="text-sm font-bold text-muted-foreground">Days to Results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Trusted By 1900+ Businesses Worldwide
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              From startups to <span className="font-serif italic font-normal">enterprise</span> brands
            </h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="aspect-[3/2] bg-background border border-border flex items-center justify-center p-4 hover:border-foreground/30 transition-colors"
              >
                <span className="text-sm font-bold text-muted-foreground text-center">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 lg:py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">Internet Moguls</h3>
              <p className="text-background/70 mb-6">
                Data-driven digital marketing agency helping businesses grow since 2009.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 border border-background/20 hover:border-background/40 transition-colors">
                  <Globe className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 border border-background/20 hover:border-background/40 transition-colors">
                  <Share2 className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wide mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/solutions" className="text-background/70 hover:text-background transition-colors">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-background/70 hover:text-background transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-background/70 hover:text-background transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-background/70 hover:text-background transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wide mb-6">Industries</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-background/70 hover:text-background transition-colors">
                    E-Commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/70 hover:text-background transition-colors">
                    Healthcare
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/70 hover:text-background transition-colors">
                    Real Estate
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/70 hover:text-background transition-colors">
                    Education
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wide mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  <span className="text-background/70">New Delhi, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <a href="tel:+918826104440" className="text-background/70 hover:text-background transition-colors">
                    +91 88261 04440
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
                  <a
                    href="mailto:hello@internetmoguls.com"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    hello@internetmoguls.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} Internet Moguls. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/50 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/50 hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
