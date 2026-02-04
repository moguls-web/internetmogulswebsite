import {CareersHero} from "@/components/CareerNew/careers-hero"
import { CultureSection } from "@/components/CareerNew/culture-section"
import { TeamVideos } from "@/components/CareerNew/team-videos"
import { EventsGallery } from "@/components/CareerNew/events-gallery"
import { PerksSection } from "@/components/CareerNew/perks-section"
import { OpenPositions } from "@/components/CareerNew/open-positions"
import { CareersFooter } from "@/components/CareerNew/careers-footer"

export const metadata = {
  title: "Careers | Internet Moguls - Join Our Team",
  description:
    "Join the team that's transforming hotel digital marketing. Explore exciting career opportunities at Internet Moguls.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <CareersHero/>
      <CultureSection />
      <TeamVideos />
      <EventsGallery />
      <PerksSection />
      <OpenPositions />
      <CareersFooter />
    </main>
  )
}
