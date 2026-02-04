export function PaidGuestTrackerSection() {
  return (
    <section className="py-24 lg:py-32 paid-guest bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative overflow-hidden pb-[75%]">
            <img
              src="/PaidGuestTracker.jpg?height=800&width=1920"
              alt="Paid Guest Tracker"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <p className="text-sm tracking-widest uppercase text-muted-foreground">
              COMING SOON: IM Guest Tracker            </p>
            <h2 className="font-serif text-3xl lg:text-5xl leading-tight text-balance">
              Your <em>website will soon follow up</em> like your smartest front-desk executive
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                If a guest leaves without booking — we call, email & chat them back.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your website will soon behave like your smartest front-desk executive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaidGuestTrackerSection