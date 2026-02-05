import Image from "next/image"

const industryLeaders = [
  {
    name: "Mr. Vikramjit Singh",
    title: "Lemon Tree Hotels",
    image: "/VikramjitSingh.jpg",
  },
  {
    name: "Mr. Mansur Mehta",
    title: "Suba Hotels",
    image: "/MansurMehta.jpg",
  }, 
   
  {
    name: "Mr. Raja Babu",
    title: "Santiam Estates, Vizag",
    image: "/Raja-Babu.jpg",
  }, 
   
  {
    name: "Mr. Sanjeev Patra",
    title: "Hotel Sandy's Tower",
    image: "/Sanjeev-Patra.jpg",
  }, 
  {
    name: "Mr. Danish Din",
    title: "The Grand Dragon Ladakh",
    image: "/DanishDin.jpg",
  }, 
  {
    name: "Mr. Arun Arora",
    title: "The Corinthians Pune Hotel",
    image: "/ArunArora.jpg",
  }, 
   
  {
    name: "Mrs. Divya Agha",
    title: "Fortune Hotels",
    image: "/Divya-Agha.jpg",
  },
   
  {
    name: "Mr. Sameer MC",
    title: "Fortune Hotels",
    image: "/Sameer-MC.jpg",
  },
  {
    name: "Mr. Lakshman",
    title: "Maharishi Ayurveda, Rishikesh",
    image: "/Lakshman.jpg",
  },
  {
    name: "Mr. Rameshvar Shah",
    title: "Royal Tulip, Chitwan",
    image: "/Rameshvar-Shah.jpg",
  },
]

export function WordsOfTrust() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4 text-black">Trusted By Industry Leaders</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-foreground">Words of Trust</h2>
        </div>

        {/* Black & White Photo Collage - Asymmetric Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {industryLeaders.map((leader, index) => (
            <div key={index} className="relative group overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-serif text-xs md:text-sm lg:text-base text-primary-foreground text-center leading-tight">
                    {leader.name}
                  </p>
                  <p className="text-[10px] md:text-xs text-primary-foreground/70 text-center mt-1 hidden md:block">
                    {leader.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
