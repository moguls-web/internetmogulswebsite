export function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Audit",
      subtitle: "Find Missed Revenue",
      description:
        "We uncover revenue leaks across website, ads, SEO, OTA mix & funnels.",
    },
    {
      step: "02",
      title: "Activate",
      subtitle: "Fix Your Digital Ecosystem",
      description:
        "We optimize your website, SEO, ads, and social channels for conversions.",
    },
    {
      step: "03",
      title: "Accelerate",
      subtitle: "Scale What Works",
      description: "Once success is visible, we scale to maximize ROI and long-term growth.",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-muted/30 text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Our Process</p>
          <h2 className="text-black font-serif text-3xl lg:text-5xl leading-tight">The 3-step <em>hotel growth</em> path</h2>
          <p className="text-black text-lg mt-6">
            Our proven three-step process to transform your hotel's digital presence and revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-background/20">
          {steps.map((item) => (
            <div key={item.step} className="bg-foreground p-8 lg:p-12">
              <span className="text-6xl lg:text-8xl font-serif text-background/20">{item.step}</span>
              <h3 className="font-serif text-2xl lg:text-3xl mt-6 mb-2">{item.title}</h3>
              <p className="text-background/60 text-sm uppercase tracking-widest mb-4">{item.subtitle}</p>
              <p className="text-background/80 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
