import { WorkHero } from "@/components/work/work-hero"
import { WorkCategories } from "@/components/work/work-categories"
import { FeaturedProjects } from "@/components/work/featured-projects"
import { WebsiteShowcase } from "@/components/work/website-showcase"
import { SocialCreatives } from "@/components/work/social-creatives"
import { OfflineCreatives } from "@/components/work/offline-creatives"
import { ReelsShowcase } from "@/components/work/reels-showcase"
import ClientLogo from "@/components/ClientLogo"
import { WorkCTA } from "@/components/work/work-cta"
import { Header } from "@/components/header" 

export const metadata = {
  title: "Our Work | Internet Moguls - Hotel Marketing Portfolio",
  description:
    "Explore our award-winning portfolio of hotel website designs, social media campaigns, offline creatives, and video content for luxury hospitality brands worldwide.",
}

export default function WorkPage() {
  return ( 
    <main className="min-h-screen bg-background">
      <Header />
      <WorkHero />
      <WorkCategories />
      <FeaturedProjects />
      <WebsiteShowcase />
      <SocialCreatives />
      <OfflineCreatives />
      <ReelsShowcase />      
      <ClientLogo />
      <WorkCTA /> 
    </main>
  )
}
