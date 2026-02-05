import { ArrowUpRight } from "lucide-react"
 
export function ServicesSection({services, isHomePage = false}: {services: any, isHomePage?: boolean}) {
  
  console.log(services);
  return (
    <section id="services" className="py-5 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Our Services</p>
            <h2 className="font-serif text-3xl lg:text-5xl leading-tight">15 solutions. One <em>revenue</em> goal.</h2>
          </div>
          {/* <p className="text-muted-foreground lg:max-w-md text-lg">
            Comprehensive hospitality marketing services designed to drive measurable revenue growth.
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: any) => (
            <article key={service.number} className="group cursor-pointer mb-10">
              <div className="relative min-h-80 md:min-h-100 overflow-hidden ">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full md:h-100 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <span className="text-xs text-muted-foreground tracking-widest">{service.number}</span>
              <h3 className="font-serif text-xl lg:text-2xl mt-2 mb-2 group-hover:underline">{service.title}</h3>
              {!isHomePage && service.subheading && (
                <p className="text-muted-foreground text-1xl font-medium mb-2 font-bold">{service.subheading}</p>
              )}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {isHomePage ? service.homedesc : service.description}
              </p>
            </article>
          ))}
        </div>
        
        
      </div>
    </section>
  )
}
