import React from 'react'
import PageBanner from '@/components/PageBanner'
import AboutWelcome from '@/components/AboutPage/AboutWelcome' 
import WhoWeAre from '@/components/AboutPage/WhoWeAre' 
import { TrustBadges } from "@/components/testimonials/trust-badges"
import AboutStats from '@/components/AboutPage/AboutStats'
import ClientLogo from '@/components/ClientLogo'
import AboutGetInTouch from '@/components/AboutPage/AboutGetInTouch'  
import { AboutBuiltBy } from '@/components/AboutPage/AboutBuiltBy'
export const metadata = {
  title: "Hotel Digital Marketing | Internet Moguls - Hospitality Digital Marketing Company in Delhi, India",
  description: "Internet Moguls - an award winning hotel digital marketing agency for the hospitality industry. Helping Travel & Hotel Brands Succeed in the Digital World. Get a Free Consultation from one of the best hospitality digital marketing companies in Delhi, India. Inquire Now",
  alternates: {
    canonical: "https://internetmoguls.com/about/",
  },
};

const page = () => {
  return (
    <div className='about-page-container'>
      <PageBanner title='About Us' description='We are a team of hospitality-focused digital experts dedicated to helping hotels grow revenue, build powerful brands, and convert more guests online.' image='/luxury-hotel-lobby-interior-with-dramatic-lighting.jpg' />
      <AboutBuiltBy />
      <AboutWelcome />
      <WhoWeAre /> 
      <TrustBadges />
      <AboutStats /> 
      <ClientLogo />
      <AboutGetInTouch /> 
    </div>
  )
}

export default page