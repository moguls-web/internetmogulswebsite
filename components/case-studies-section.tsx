import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Hotel Growth Story #1", 
      brand: "Leisure Hotels",
      challengesSolved: "Brand visibility growth across multi-location portfolio, Social engagement improvement.",
      subtitle: "Luxury North India Hotel Chain",
      image: "/mountain-resort-hotel-exterior-beautiful-landscape.jpg", 
    },
    {
      title: "Hotel Growth Story #2",
      brand: "Taj Mahal, New Delhi",
      challengesSolved: "Social media reach growth, Engagement rate improvement, PR-led brand visibility surge, Content-driven audience growth, Human-centric luxury storytelling transformation",
      subtitle: "Iconic 5-Star Luxury City Hotel",
      image: "/Taj-Mahal-new-delhi.jpg", 
    },
    {
      title: "Hotel Growth Story #3",
      brand: "Moksha Himalaya Spa Resort, Parwanoo",
      challengesSolved: "438% Revenue growth, 309% Website booking rise, 253% Room night growth, 190% Call volume increase, 112% Conversion rate improvement, Wedding season demand domination",
      subtitle: "Luxury Wedding & MICE Resort",
      image: "/Moksha-Himalaya.jpg", 
    },
    {
      title: "Hotel Growth Story #4",
      brand: "Lemon Tree Hotels",
      challengesSolved: "150% Growth in bookings, 36% Increase in total website traffic, 30% Organic traffic improvement, 70% Conversion rate boost, Significant reduction in OTA dependency",
      subtitle: "Premium Business & Leisure Chain Hotel",
      image: "/lemon-tree-hotels.jpg", 
    },
    {
      title: "Hotel Growth Story #5",
      brand: "The Grand Dragon Ladakh",
      challengesSolved: "Social reach expansion, Engagement growth acceleration, Follower base surge, Website traffic growth from social, Luxury brand perception revival through digital storytelling",
      subtitle: "5-Star Luxury Mountain Hotel",
      image: "/himalayan-mountain-hotel-with-snow-peaks-stunning-.jpg", 
    },
    {
      title: "Hotel Growth Story #6",
      brand: "Noor Mahal Palace, Karnal",
      challengesSolved: "21.32% Enquiry growth, 17.24% Call growth, 11.23% Organic traffic rise, 8.44% Total website traffic increase, High-intent wedding lead generation through brand website",
      subtitle: "Luxury Heritage Wedding Destination",
      image: "/Noor-Mahal.jpg", 
    },
  ]

  return (
    <section id="work" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Hotel Growth Stories</p>
            <h2 className="font-serif text-3xl lg:text-5xl leading-tight">What real <em>hotels achieved</em><br/>with Internet Moguls</h2>
          </div>
          <Link
            href="/case-studies"
            className="text-sm tracking-wide underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            View All Case Studies
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <article key={index} className="group">
              <div className="relative aspect-5/6 overflow-hidden mb-4">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                 
                 
              </div>
              <h3 className="font-serif text-xl lg:text-2xl group-hover:underline">{study.title}</h3>
              <p className="text-muted-foreground text-sm mt-1"><span className="font-bold">Hotel Type:</span> {study.subtitle}</p>
              <p className="text-muted-foreground text-sm mt-1"><span className="font-bold">Brand:</span> {study.brand}</p>
              <p className="text-muted-foreground text-sm mt-1"><span className="font-bold">Challenges Solved:</span> {study.challengesSolved}</p>
              
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
