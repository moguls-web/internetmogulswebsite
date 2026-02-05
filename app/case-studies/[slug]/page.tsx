import { CaseStudyDetail } from "@/components/CaseStudiesPage/case-study-detail"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const caseStudiesData: Record<string, any> = {
  "moksha-himalaya-spa-resort": {
    title: "Moksha Himalaya Spa Resort, Parwanoo",
    subtitle: "Wedding Destination · Performance Marketing",
    category: "Performance Marketing",
    heroImage: "/56ythgnb.webp",
    logo: "/grt-hotels-logo-white-text.jpg",
    headline: "Transforming an offbeat luxury resort into a high-demand wedding destination through experience-led storytelling and high-intent performance campaigns.",
    story: `Moksha Himalaya Spa Resort is a luxury mountain retreat located in Parwanoo, perched 5,000 feet above sea level. Despite its premium positioning, the destination had **low search demand**, minimal digital visibility, and no structured website presence—right as wedding season approached.


The challenge was to **create demand where none existed**, attract high-value wedding enquiries, and drive revenue without discounting the product..
`,
    objectives: [
      "Position Moksha as a destination wedding resort",
      "Generate high-quality wedding & MICE leads",
      "Increase direct website bookings",
      "Improve visibility beyond destination-based searches",
      "Maximize revenue during peak wedding season",
      "Build sustained digital demand for an offbeat location",
    ],
    challenges: [
      "Low destination search volume for Parwanoo",
      "No existing website at project start",
      "Premium pricing with no discount flexibility",
      "Limited social media presence",
      "High urgency due to upcoming wedding season",
      "Need to educate audiences about the destination itself",
    ],
    results: [
      { value: "+438%", label: "Increase in Revenue" },
      { value: "+309%", label: "Increase in Website Bookings" },
      { value: "+253%", label: "Increase in Room Nights" },
      { value: "+190%", label: "Increase in Inbound Calls" },
    ],
    services: ["Website Design & Development", "Wedding Landing Pages", "SEO & GMB Optimization", "Social Media Strategy", "Influencer Collaborations", "Performance Marketing (Search, Call & Lead Ads)"],
    gallery: [
      "/86t7frytgyui.webp", 
      "/tysdo.webp", 
      "/t7tfygyhu.webp", 
      "/65rtfgy78tg.webp", 
    ],
  },
  "leisure-hotels": {
    title: "Leisure Hotels",
    subtitle: "Brand Positioning + Content-Led Social Strategy",
    category: "SEO & Influencer",
    heroImage: "/002f6f9f.jpg",
    logo: "/leisure-hotels-logo-elegant.jpg",
    headline: "Transforming Leisure Hotels into a high-visibility heritage hospitality brand through strategic storytelling and targeted social engagement.",
    story: `Leisure Hotels is one of North India’s leading boutique hospitality brands with resorts across Uttarakhand and neighbouring destinations. While the properties were individually popular, the **brand itself lacked recall and digital visibility**, resulting in low engagement and limited traction for offers and campaigns.

The challenge was to **consolidate all properties under one strong brand voice**, improve awareness, and build meaningful social engagement that converts into interest and inquiries.`,
    objectives: [
      "Build strong brand identity across all properties",
      "Improve awareness and visibility across social platforms",
      "Increase engagement & interaction with potential travellers",
      "Communicate destination-led storytelling",
      "Support launch campaigns for new properties",
      "Create structured communication under one umbrella brand",
    ],
    challenges: [
      "Low social engagement & visibility",
      "Brand recall weaker than individual hotels",
      "25+ properties on a single social identity",
      "Multiple offers promoted monthly",
      "Launching new properties in competitive markets",
      "Refining targeting for the right audience",
    ],
    results: [
      { value: "+133%", label: "Increase in Page Likes" },
      { value: "+3653%", label: "Increase in Social Media Reach" },
      { value: "+1,026%", label: "Increase in Post Engagement" },
      { value: "+2037%", label: "Increase in Social Media Impressions" },
    ],
    services: ["Brand Positioning", "Social Media Strategy", "Content Marketing", "Campaign Planning", "Paid Social Advertising"],
    gallery: [
      "/675eee5c.jpg?height=800&width=1200", 
      "/c13c79f0.jpg?height=800&width=1200", 
      "/9e4ec715.jpg?height=800&width=1200", 
      "/f7ec351b.jpg?height=800&width=1200", 
    ],
  },
  "grand-dragon-ladakh": {
    title: "The Grand Dragon Ladakh",
    subtitle: "Luxury Hotel · Social Media Revamp",
    category: "Social Media Revamp",
    heroImage: "/gdl-banner-case.webp",
    logo: "/placeholder.svg?height=200&width=400",
    headline: "Revitalizing a legacy luxury hotel’s digital presence through consistent storytelling and culturally rich content.",
    story: `Grand Dragon Ladakh is one of Leh’s most iconic luxury hotels. Despite its reputation offline, the brand’s social media presence suffered from **stagnant growth, inconsistent content, and limited engagement**.

The objective was to transform social media into a **discovery and inspiration channel** that reflected the hotel’s heritage and luxury positioning.
`,
    objectives: [
      "Increase reach and follower growth",
      "Improve engagement and content interaction",
      "Build a cohesive luxury-led feed",
      "Highlight Ladakh’s culture and experiences",
      "Drive traffic from social platforms", 
    ],
    challenges: [
      "Stalled follower growth",
      "Limited reach & impressions",
      "Inconsistent visual storytelling",
      "Underutilization of Stories & UGC", 
    ],
    results: [
      { value: "80,000+", label: "Monthly Reach" },
      { value: "100,000+", label: "Monthly Impressions" },
      { value: "1,000+", label: "New Followers per Month" },
    ],
    services: ["Content Strategy & Feed Repositioning", "Instagram & Facebook Stories", "User-Generated Content Campaigns", "Visual Consistency & Brand Storytelling"],
    gallery: [
      "/img-979823d.webp?height=800&width=1200", 
      "/img-9876.webp?height=800&width=1200",
      "/675656.webp?height=800&width=1200",
      "/7867yguh.webp?height=800&width=1200",
    ],
  },

  "noor-mahal-palace-karnal": {
    title: "Noor Mahal, Karnal",
    subtitle: "Destination Wedding · SEO Strategy",
    category: "SEO Strategy",
    heroImage: "/NM2020248847-1705403836088523863206.jpg",
    logo: "/placeholder.svg?height=200&width=400",
    headline: "Driving high-intent wedding enquiries by breaking aggregator dominance through focused SEO and UX optimization.",
    story: `Noor Mahal is a palace-style luxury hotel in Karnal, positioned for destination weddings. However, **wedding aggregators dominated search visibility**, limiting direct enquiries from the brand website.

The challenge was to **own wedding search intent organically** and improve lead quality.
`,
    objectives: [
      "Increase wedding-related organic traffic",
      "Generate high-quality direct enquiries",
      "Improve lead-to-conversion ratio",
      "Reduce dependency on aggregators", 
    ],
    challenges: [
      "High competition on wedding keywords",
      "Aggregator dominance on SERPs",
      "Need for conversion-focused UX", 
    ],
    results: [
      { value: "+21.32%", label: "Increase in Wedding Enquiries" },
      { value: "+17.24%", label: "Increase in Calls" },
      { value: "+11.23%", label: "Increase in Organic Traffic" },
    ],
    services: ["Wedding Landing Page Optimization", "SEO & Keyword Strategy", "Heatmap & UX Analysis", "Conversion Optimization"],
    gallery: [
      "/NM3020249561-1704283261196462955939.webp",  
      "/5ertgf.webp",  
      "/0oiioijo.webp",  
      "/rtyoad.webp",  
    ],
  },
  "taj-mahal-new-delhi": {
    title: "Taj Mahal, New Delhi",
    subtitle: "Luxury Hotel · Social Media Revamp",
    category: "Social Media Revamp",
    heroImage: "/464303942.jpg",
    logo: "/placeholder.svg?height=200&width=400",
    headline: "Transforming an iconic luxury landmark’s social presence through human-centric storytelling and experience-led content.",
    story: `Taj Mahal, New Delhi is a recently renovated 5-star luxury hotel and one of the city’s most iconic landmarks. While the brand carried immense legacy, its social media presence lacked **dynamic content, experiential storytelling, and emotional connect** with modern audiences.

The challenge was to balance **heritage with relevance**, moving away from overly corporate communication to a more human, engaging narrative.
`,
    objectives: [
      "Increase reach and follower growth",
      "Improve engagement and content interaction",
      "Build a cohesive luxury-led feed",
      "Highlight Ladakh’s culture and experiences",
      "Drive traffic from social platforms", 
    ],
    challenges: [
      "Lack of dynamic content formats",
      "Underrepresented hotel experiences",
      "Limited PR-led storytelling",
      "Overly promotional communication style", 
    ],
    results: [
      { value: "+267%", label: "Increase in Instagram Reach" },
      { value: "+143%", label: "Increase in Content Reach" },
      { value: "100%", label: "Organic Reach (No Paid Boosts)" },
    ],
    services: ["Social Media Strategy", "Content & Visual Storytelling", "Experience-Led Campaigns", "PR-Ready Content Creation"],
    gallery: [
      "/455629343.jpg",
      "/369808058.jpg",
      "/369810612.jpg",
      "/457365999.jpg",
    ],
  },
  "lemon-tree-hotels": {
    title: "Lemon Tree Hotels",
    subtitle: "Chain Hotel · Website, SEO & Direct Booking Growth",
    category: "Website, SEO & Direct Booking Growth",
    heroImage: "/423c3db5.webp",
    logo: "/placeholder.svg?height=200&width=400",
    headline: "Scaling direct bookings and brand-led demand across a national hotel chain through performance-driven digital transformation.",
    story: `Lemon Tree Hotels is one of India’s largest hotel chains, operating across 50+ destinations. Despite strong offline presence, the brand faced **high OTA dependency**, weak website conversions, and limited keyword visibility.

The objective was to **turn the brand website into a primary revenue channel** while strengthening search visibility at scale.
`,
    objectives: [
      "Increase direct bookings across properties",
      "Improve website conversion rates",
      "Reduce OTA dependency",
      "Strengthen brand-led search visibility",
      "Create a scalable digital framework for a large chain", 
    ],
    challenges: [
      "Low keyword rankings for brand & generic searches",
      "Weak website UX and selling propositions",
      "Heavy reliance on OTAs",
      "Inconsistent mobile experience", 
    ],
    results: [
      { value: "+150%", label: "Increase in Bookings" },
      { value: "+36%", label: "Increase in Total Traffic" },
      { value: "+30%", label: "Increase in Organic Traffic" },
      { value: "+70%", label: "Improvement in Conversion Rate" },
    ],
    services: ["Award-Winning Website Redesign", "SEO & Content Strategy", "Conversion Rate Optimization", "Mobile Experience Enhancement", "Direct Booking Incentives"],
    gallery: [
      "/08_Dec_2023_11_41_15Pool- Day.jpg", 
      "/29_Jun_2023_04_36_41Duplex-Suite,-Bedroom.webp", 
      "/29_Jun_2023_04_39_311000x1000-all-img.webp", 
      "/29_Jun_2023_04_41_54Citrus-Cafe,-shot-1.webp", 
    ],
  },
  "niranta-airport-transit-hotel-mumbai": {
    title: "Niranta Airport Transit Hotel, Mumbai",
    subtitle: "City Hotel · Revenue & OTA Strategy",
    category: "Revenue & OTA Strategy",
    heroImage: "/6756rdtugi.webp",
    logo: "/placeholder.svg?height=200&width=400",
    headline: "Driving revenue recovery and pricing efficiency for an airport hotel during peak COVID disruption.",
    story: `Niranta is India’s first airport transit hotel, located inside Mumbai’s international terminal. During COVID, international travel restrictions and flat pricing models significantly impacted visibility, occupancy, and revenue.

The challenge was to **optimize pricing, improve OTA performance, and increase ARR** in one of the most affected markets.
`,
    objectives: [
      "Increase overall revenue during restricted travel period",
      "Improve ARR without heavy discounting",
      "Optimize OTA productivity",
      "Balance occupancy with profitability",
      "Drive traffic from social platforms", 
    ],
    challenges: [
      "Severe travel restrictions",
      "Limited international footfall",
      "Flat pricing across all days",
      "Low participation in OTA offers", 
      "High ARR benchmark to maintain", 
    ],
    results: [
      { value: "+175%", label: "Increase in Revenue" },
      { value: "+119%", label: "Increase in Room Nights" },
      { value: "+25%", label: "Increase in ARR" },
    ],
    services: ["Dynamic Pricing Strategy", "OTA Revenue Optimization", "Demand Forecasting", "Channel Performance Monitoring", "Strategic Promotions & Offers"],
    gallery: [
      "/niranta-airport-transit.webp", 
      "/niranta-airport-transit-copy.webp", 
      "/niranta-airport-transit-20.webp", 
      "/niranta-airport-transit-3.webp", 
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = caseStudiesData[slug]

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Internet Moguls",
      description: "Case study not found",
    }
  }

  // Generate meta title and description based on case study data
  const title = `${caseStudy.title} Case Study - ${caseStudy.subtitle} | Internet Moguls`
  const description = caseStudy.headline 
    ? `${caseStudy.headline}. ${caseStudy.story.substring(0, 120)}...`
    : `Discover how Internet Moguls helped ${caseStudy.title} achieve remarkable results through ${caseStudy.category.toLowerCase()}.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: caseStudy.heroImage ? [caseStudy.heroImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: caseStudy.heroImage ? [caseStudy.heroImage] : [],
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = caseStudiesData[slug]

  if (!caseStudy) {
    notFound()
  }

  return <CaseStudyDetail caseStudy={caseStudy} />
}
