import React from 'react'
import PageBanner from '@/components/PageBanner'
import ServicesTabs from '@/components/OurServicesPage/ServicesTabs'
import AboutGetInTouch from '@/components/AboutPage/AboutGetInTouch'

export const metadata: Metadata = {
  title: "Services - Internet Moguls",
  description: "A digital marketing agency with presence in over three countries, specialized in creating successful online experiences. Here is our story so far.",
    generator: 'v0.app'
}



const page = () => {
  return (
    <div className='our-services-page-container'>
      <PageBanner title='Our Solutions' description='' image='/luxury-hotel-lobby-interior-with-dramatic-lighting.jpg' />
      <ServicesTabs />
      <AboutGetInTouch  />
    </div>
  )
}

export default page