"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Play, Mic, Users, Globe, ArrowRight } from "lucide-react"

const meetings = [
  {
    image: "/ritesh-avi.jpg",
    name: "Ritesh Agarwal",
    title: "Founder & CEO, OYO Rooms",
    context: "Strategic Partnership Discussion",
    location: "Gurgaon, India",
  },
  {
    image: "/balji-avi.jpg",
    name: "Mr. Baljee,",
    title: "Chairman Royal Orchid hotels",
    context: "Digital Transformation Discussion",
    location: "New Delhi, India",
  }, 
  {
    image: "/avi-vjs.jpg",
    name: "Vikramjit Singh",
    title: "President, Lemon Tree Hotels",
    context: "Quarterly Review Meeting",
    location: "New Delhi, India",
  }, 
  {
    image: "/avi-ankush.jpg",
    name: "Ankush Nijhawan",
    title: "CEO, Travel Boutique Online",
    context: "Future of Hospitality Industry Discussion",
    location: "Delhi, India",
  },
  {
    image: "/gary-avi.jpg",
    name: "Gary Vee",
    title: "Founder, VaynerX",
    context: "Courtesy Visit",
    location: "New York, USA",
  }
]

const podcasts = [
  {
    id: 1,
    image: "/CxdhhlrM6AA-HD-podcast-1.jpg",
    show: "It a Game-Changer",
    topic: "Raj Shamani Loved The Concept of Money Map! Watch Now",
    duration: "9 min",
    platform: "YouTube",
    videoUrl: "https://www.youtube.com/embed/CxdhhlrM6AA?si=8NZP6T83ipXmU3zS", // Add video URL here
    videoType: "youtube" as "youtube" | "video" | "iframe",
  },
  {
    id: 2,
    image: "/484-RGj7PYM-HD.jpg",
    show: "RealTalk Clips",
    topic: "अमीर Banna Hai To Ye देखो | Best Podcast For Youngster's | RealTalk Clips Ft.@aviarya",
    duration: "49 min",
    platform: "YouTube",
    videoUrl: "https://www.youtube.com/embed/484-RGj7PYM?si=OavYq6bIzdkYl2Mq", // Add video URL here
    videoType: "youtube" as "youtube" | "video" | "iframe",
  },
  {
    id: 3,
    image: "/M5S51lgg2xY-HD.jpg",
    show: "TEDx Talk",
    topic: "Avi Arya's TEDx Talk at SGGSCC",
    duration: "52 min",
    platform: "YouTube",
    videoUrl: "https://www.youtube.com/embed/M5S51lgg2xY?si=fq44qwpkniAsmxaf", // Add video URL here
    videoType: "youtube" as "youtube" | "video" | "iframe",
  },
]

const internationalEvents = [
  {
    image: "/speaker-at-international-digital-marketing-confere.jpg",
    event: "HITEC Dubai 2024",
    role: "Keynote Speaker",
  },
  {
    image: "/panel-discussion-at-hospitality-technology-summit.jpg",
    event: "ITB Berlin",
    role: "Panel Moderator",
  },
  {
    image: "/networking-event-with-global-hospitality-professio.jpg",
    event: "FITUR Madrid",
    role: "Industry Expert",
  },
  {
    image: "/business-conference-presentation-on-hotel-marketin.jpg",
    event: "WTM London",
    role: "Featured Speaker",
  },
]

function Counter({ end, suffix = "", prefix = "", duration = 2 }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export function CEOShowcase() {
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null)

  return (
    <section className="py-14 bg-foreground text-background overflow-hidden">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end"
        >
          <div>
            <span className="text-sm tracking-[0.3em] uppercase text-background/50 mb-6 block">Leadership</span>
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
              Avijit
              <br />
              <span className="italic">Arya</span>
            </h2>
          </div>
          <div className="lg:pb-4">
            <p className="text-xl md:text-2xl leading-relaxed text-background/70 max-w-xl">
              Founder & CEO of Internet Moguls, connecting with India's most influential hoteliers and global digital
              marketing leaders to shape the future of hospitality.
            </p>
          </div>
        </motion.div>
      </div>

      {/* CEO Portrait + Stats */}
      <div className="max-w-[1400px] mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image src="/professional-indian-businessman-founder-portrait-i.jpg" alt="Avijit Arya - CEO" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-3xl italic text-background/90">
                  "Every hotel has a story. We make the world listen."
                </p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-8">
              {[
                { number: "500+", label: "Industry Leaders Met", icon: Users, amount: 500 },
                { number: "25+", label: "Countries Visited", icon: Globe, amount: 25 },
                { number: "50+", label: "Podcast Appearances", icon: Mic, amount: 50 },
                { number: "100+", label: "Speaking Engagements", icon: Play, amount: 100 },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-t border-background/20 pt-8"
                >
                  <stat.icon className="w-6 h-6 text-accent mb-4" />
                  <p className="font-serif text-5xl md:text-6xl mb-2">
                    <Counter end={stat.amount} suffix="+" />
                  </p>
                  <p className="text-background/50 text-sm tracking-wide uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Meetings with Hoteliers */}
      <div className="mb-32">
        <div className="max-w-[1400px] mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-end justify-between"
          >
            <div>
              <span className="text-sm tracking-[0.3em] uppercase text-background/50 mb-4 block">Connections</span>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl">
                Meetings with <span className="italic">Industry Leaders</span>
              </h3>
            </div> 
          </motion.div>
        </div>

        <div className="flex gap-6 overflow-x-auto px-6 pb-8 snap-x snap-mandatory scrollbar-hide">
          {meetings.map((meeting, index) => (
            <motion.div
              key={meeting.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[350px] md:w-[400px] snap-start group cursor-pointer"
            >
              <div className="aspect-[5/6] relative overflow-hidden mb-6">
                <Image
                  src={meeting.image || "/placeholder.svg"}
                  alt={`Meeting with ${meeting.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-background/60 mb-2">{meeting.location}</p>
                  <p className="text-sm text-accent mb-1">{meeting.context}</p>
                </div>
              </div>
              <h4 className="font-serif text-2xl mb-1 group-hover:text-accent transition-colors">{meeting.name}</h4>
              <p className="text-background/50 text-sm">{meeting.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Podcasts Section */}
      <div className="max-w-[1400px] mx-auto px-6 mb-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-background/50 mb-4 block">Featured In</span>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Podcast <span className="italic">Appearances</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {podcasts.map((podcast, index) => (
            <motion.div
              key={podcast.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group mb-8 md:mb-0"
            >
              <div className="aspect-video relative overflow-hidden mb-6 bg-black">
                {playingVideoId === podcast.id && podcast.videoUrl ? (
                  <>
                    {podcast.videoType === "youtube" && podcast.videoUrl ? (
                      <iframe
                        src={`${podcast.videoUrl}${podcast.videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                        title={podcast.show}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                      />
                    ) : podcast.videoType === "iframe" && podcast.videoUrl ? (
                      <iframe
                        src={podcast.videoUrl}
                        title={podcast.show}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                      />
                    ) : podcast.videoType === "video" && podcast.videoUrl ? (
                      <video
                        src={podcast.videoUrl}
                        controls
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                  </>
                ) : (
                  <>
                    <Image
                      src={podcast.image || "/placeholder.svg"}
                      alt={podcast.show}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/20 transition-colors" />
                    
                    {/* Play button */}
                    {podcast.videoUrl && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          if (podcast.videoUrl) {
                            setPlayingVideoId(podcast.id)
                          }
                        }}
                      >
                        <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center transform group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-[#e9383d] fill-current ml-1" />
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 bg-background text-foreground text-xs tracking-wide uppercase">
                        {podcast.platform}
                      </span>
                    </div>
                    <div className="absolute bottom-6 right-6">
                      <span className="text-sm text-background/80">{podcast.duration}</span>
                    </div>
                  </>
                )}
              </div>
              <p className="text-accent text-sm tracking-wide uppercase mb-2">{podcast.show}</p>
              <h4 className="font-serif text-1xl md:text-1xl lg:text-2xl leading-tight group-hover:text-accent transition-colors">
                {podcast.topic}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* International Events Grid */}
      {/* <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-background/50 mb-4 block">Global Presence</span>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            International <span className="italic">Speaking Engagements</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {internationalEvents.map((event, index) => (
            <motion.div
              key={event.event}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/2] relative overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.event}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs tracking-[0.2em] uppercase text-accent mb-1">{event.role}</p>
                  <h4 className="font-serif text-xl text-background">{event.event}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  )
}
