"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const socialPosts = [
  { id: 1, image: "/static-post/SnapInsta.to_508342659_1821710835142570_1006364111652208120_n.jpg", category: "Instagram" },
  { id: 2, image: "/static-post/SnapInsta.to_530239037_17850924033529276_6438364214491386971_n.jpg", category: "Instagram" },
  { id: 3, image: "/static-post/SnapInsta.to_550184739_17855680746529276_3727483804830520253_n.jpg", category: "Instagram" },
  { id: 4, image: "/static-post/SnapInsta.to_551287370_17914081365196129_7014068375094473672_n.jpg", category: "Instagram" },
  { id: 5, image: "/static-post/SnapInsta.to_553375726_18082942988503337_7407379793765847932_n.jpg", category: "Instagram" },
  { id: 6, image: "/static-post/SnapInsta.to_561962539_17857178529534558_3612192840070179744_n.jpg", category: "Instagram" },
  { id: 7, image: "/static-post/SnapInsta.to_570380698_18060703097626586_4168540266704796832_n.webp", category: "Instagram" },
  { id: 8, image: "/static-post/SnapInsta.to_572095106_122152508720825107_1765903458027368369_n.jpg", category: "Instagram" },
  { id: 9, image: "/static-post/SnapInsta.to_583702444_18406700707190820_4863139065110857232_n.jpg", category: "Instagram" },
  { id: 10, image: "/img-23894723.JPG", category: "Instagram" },
  { id: 11, image: "/static-post/SnapInsta.to_600959169_17903294049323535_1308449594619819165_n.jpg", category: "Instagram" },
  { id: 12, image: "/static-post/SnapInsta.to_603915717_18411589111184070_5237974491000097436_n.jpg", category: "Instagram" },
]

export function SocialCreatives() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="social" className="py-24 md:py-40 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">02 — Social Media</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-8xl leading-none">
              Scroll-
              <br />
              <span className="italic font-light">Stopping</span>
            </h2>
          </div>
          <div className="lg:flex lg:flex-col lg:justify-end">
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-lg">
              Content that captures attention and drives engagement. Every post tells your brand's story.
            </p>
            <div className="flex gap-8 mt-8">
              <div>
                <p className="font-serif text-4xl md:text-5xl">10K+</p>
                <p className="text-sm text-muted-foreground mt-1">Posts Created</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl">500M+</p>
                <p className="text-sm text-muted-foreground mt-1">Reach Generated</p>
              </div>
            </div>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {socialPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="break-inside-avoid mb-4 group cursor-pointer relative"
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={`Social media creative ${post.id}`}
                  className="w-full"
                  animate={{
                    scale: hoveredId === post.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-foreground/60 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === post.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-primary-foreground text-sm tracking-[0.2em] uppercase">{post.category}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
