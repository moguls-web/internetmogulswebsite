import Link from "next/link"
import { User, Phone, Mail } from "lucide-react"

export function Footer() { 

  return (
    <footer className="bg-white text-background">
      <section className="relative py-4 lg:py-8 bg-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl text-background mb-0">
             All We Do Revolves Around Our ❤️ For Hotels          </h2> 
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="bg-foreground max-w-8xl px-6 lg:px-8 pt-14 lg:pt-18 pb-8 lg:pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-medium tracking-tight">
                
              <img src="/white-logonew-im.png" alt="Internet Moguls" className="w-60" />
            </Link>
            <p className="text-background/60 mt-4 max-w-md">
            We help hospitality brands turn digital marketing into measurable business outcomes.
Growing hotel businesses since 2009.

            </p>
            <div className="mt-8 max-w-md">
              {[
                { name: "Avi Arya", role: "Founder", phone: "9810153312", email: "avijit@internetmoguls.com" },
                { name: "Rajesh", role: "Director and Senior Partner", phone: "8826104440", email: "rajesh@internetmoguls.com" },
              ].map((person, index) => (
                <div key={person.email} className={index > 0 ? "pt-5 mt-5 border-t border-dashed border-background/40" : ""}>
                  <div className="flex flex-col gap-1.5 text-white text-sm">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 shrink-0 text-red-500" aria-hidden />
                      <span className="font-semibold text-base text-white">{person.name}</span> - 
                      <span className="text-white/90">{person.role}</span>
                    </div>
                    <a href={`tel:+91${person.phone}`} className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                      <Phone className="h-4 w-4 shrink-0 text-red-500" aria-hidden />
                      <span>{person.phone}</span>
                    </a>
                    <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                      <Mail className="h-4 w-4 shrink-0 text-red-500" aria-hidden />
                      <span>{person.email}</span> 
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div>
            <h4 className="text-sm font-medium tracking-[0.2em] uppercase mb-6 text-background/50">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/overview" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Blog", href: "https://blog.internetmoguls.com/" },
                { name: "Careers", href: "/workwithus" },
                { name: "Contact Us", href: "/Reach_Us" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-background/70 hover:text-background transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium tracking-[0.2em] uppercase mb-6 text-background/50">Services</h4>
            <ul className="space-y-4">
              {[
                { name: "Websites", href: "/work/#websites" }, 
                { name: "Social Media", href: "/work/#social" }, 
                { name: "Offline Creatives", href: "/work/#offline" }, 
                { name: "Video Content", href: "/work/#reels" }, 
              ].map(
                (item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-background/70 hover:text-background transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-16 pt-8 border-t border-background/10 gap-6">
          <p className="text-sm text-background/50">© 2026 Internet Moguls. All rights reserved.</p>
          <div className="flex items-center gap-8">
            {[
               
              { name: "Instagram", href: "https://www.instagram.com/internetmoguls" },
              { name: "Facebook", href: "https://www.facebook.com/internetmoguls" },
              { name: "YouTube", href: "https://www.youtube.com/channel/UCehJuLh1A0C_SCfiYx2qy6A" },
            ].map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target={social.href !== "#" ? "_blank" : undefined}
                rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                className="text-sm text-background/50 hover:text-background transition-colors"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=918826104440&text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20the%20team%20and%20enquire%20more.&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
      
    </footer>
  )
}
