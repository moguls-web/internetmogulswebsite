import { Award, Building2, UserCheck, Megaphone, UtensilsCrossed,ArrowRight } from "lucide-react"


import Link from "next/link"
export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/professional-team-meeting-in-modern-office-with-ho.jpg"
              alt="Internet Moguls team"
              className="w-full aspect-square object-cover object-right"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
              <div className="flex items-center gap-4">
                {/* <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background" />
                  ))}
                </div> */}
                {/* <p className="text-background text-sm">1900+ Hotels Transformed</p> */}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Born on 15th August, 2009</p>
            <h2 className="font-serif text-3xl lg:text-5xl leading-tight mb-8 text-balance">
            Since 2009, we’ve helped <em>hotels grow</em>.
            </h2>
            <ul className="space-y-3 mb-5">
              <li className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>800+ Hotel Owners</span>
              </li>
              <li className="flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Countless General Managers</span>
              </li>
              <li className="flex items-start gap-3">
                <Megaphone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Marketing & Marcom Heads</span>
              </li>
              <li className="flex items-start gap-3">
                <UtensilsCrossed className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Banquet & Restaurant Managers — who love us for helping them achieve their targets</span>
              </li>
            </ul>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We’ve been voted the Best Hospitality Digital Agency multiple years in a row — because we do nothing else but hotels.

            </p>

            {/* Awards */}
            <div className="pt-2">
              <h4 className="text- font-medium mb-5">Our Recognitions</h4>
              {[
                "🏆 Best Digital Marketing Agency for Hospitality – 2023",
                "🏆 E4M Maverick Gold – Best Hotel Microsite – 2023",
                "🏆 Agency of the Year – North India Travel Awards",
              ].map((award) => (
                <div key={award} className="flex items-center gap-3">
                  {/* <Award className="w-4 h-4 text-muted-foreground" /> */}
                  <span className="text-md">{award}</span>
                </div>
              ))}

            </div>
              <div className="pt-3">  
                <Link
                href="/overview"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm tracking-wide"
                >
                View More
                <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
