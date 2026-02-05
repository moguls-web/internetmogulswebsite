"use client"

export function GoogleMapSection() {
  // New Delhi Headquarters address
  const address = "20, First Floor, Local Shopping Complex, Near Pushp Vihar, Madangir Village, Madangir, New Delhi, Delhi 110062"
  const encodedAddress = encodeURIComponent(address)
  // Using Google Maps embed URL (works without API key for basic embeds)
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7011.042587430827!2d77.226267!3d28.524047!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1842e897089%3A0xcb954d0aef116e6f!2sInternet%20Moguls!5e0!3m2!1sen!2sus!4v1766408780494!5m2!1sen!2sus`

  return (
    <section className="py-18 md:py-24 bg-[#ebebeb]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">Find Us</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6">
            Visit Our <em className="font-normal">Headquarter</em>
          </h2>
          <p className="text-lg text-muted-foreground">
            Located in the heart of New Delhi, our Headquarter welcomes you to discuss how we can help transform your hotel's digital presence.
          </p>
        </div>

        <div className="relative w-full h-[350px] md:h-[350px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Address:</strong> {address}
          </p>
        </div>
      </div>
    </section>
  )
}

