export function ChallengesSection() {
  const challenges = [
    {
      title: "OTA Dependency",
      description: "High commissions quietly eat into profits every single night. Most hotels don’t even realize how much they’re losing.",
    },
    {
      title: "Low Conversion",
      description: "Traffic comes. Bookings don’t. Your website looks good—but doesn’t sell rooms.",
    },
    {
      title: "Poor Social ROI",
      description: "Content is posted, likes may come—but bookings don’t move. Visibility without revenue is noise.",
    },
    {
      title: "Lead Drop-Off",
      description: "Wedding, banquet, and MICE leads arrive… then disappear. Follow-ups fail. Revenue leaks.",
    },
    {
      title: "Agency Fatigue",
      description: "New agency, new promises, same results. Months pass, dashboards grow—but business doesn’t.",
    },
    {
      title: "No Brand Recall",
      description: "Guests scroll past your hotel like every other one. Nothing sticks. Nothing differentiates.",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Common Challenges</p>
          <h2 className="font-serif text-3xl lg:text-5xl leading-tight text-balance">
            If this feels <em>familiar </em><br/> you’re not alone 
          </h2>
          <p className="text-muted-foreground text-lg mt-6">
          These are the exact challenges 800+ hoteliers came to us with:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-background p-8 lg:p-10 group hover:bg-muted/50 transition-colors">
              <span className="text-xs text-muted-foreground tracking-widest">0{index + 1}</span>
              <h3 className="font-serif text-xl lg:text-2xl mt-4 mb-3">{challenge.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{challenge.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-muted-foreground">
          We fix this — with hospitality intelligence, not guesswork.
        </p>
      </div>
    </section>
  )
}
