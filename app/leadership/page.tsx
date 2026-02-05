import { CEOShowcase } from "@/components/LeaderShip/ceo-showcase"

export const metadata = {
  title: "Leadership - Avijit Arya | Internet Moguls",
  description:
    "Meet Avijit Arya, Founder & CEO of Internet Moguls - connecting with India's most influential hoteliers and global digital marketing leaders.",
}

export default function LeadershipPage() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-background blur-[100px]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 py-32 text-center relative z-10">
          <span className="text-sm tracking-[0.4em] uppercase text-background/50 mb-8 block">
            The Vision Behind Internet Moguls
          </span>
          <h1 className="font-serif text-7xl md:text-8xl lg:text-[8rem] leading-[0.85] tracking-tight mb-8">
            Meet Our
            <br />
            <span className="italic">Leader</span>
          </h1>
          <p className="text-xl md:text-2xl text-background/60 max-w-2xl mx-auto leading-relaxed">
            A visionary shaping the future of hotel digital marketing across the globe
          </p>
        </div>
      </section>

      {/* CEO Showcase Section */}
      <CEOShowcase />

      {/* Contact CTA */}
      <section className="py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <span className="text-sm tracking-[0.3em] uppercase text-foreground/50 mb-6 block">Connect With Us</span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8">
            Let's Shape the <span className="italic">Future</span>
            <br />
            Together
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto mb-12">
            Interested in partnering with Internet Moguls or inviting Avijit Arya as a speaker? We'd love to hear from
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Reach_Us"
              className="inline-flex items-center justify-center px-10 py-5 bg-foreground text-background font-medium tracking-wide uppercase text-sm hover:bg-accent transition-colors hover:text-black"
            >
              Get in Touch
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center px-10 py-5 border border-foreground text-foreground font-medium tracking-wide uppercase text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
