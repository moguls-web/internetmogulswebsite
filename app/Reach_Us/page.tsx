import React from 'react'
import PageBanner from '@/components/PageBanner'
import ContactForm from '@/components/ContactUsPage/ContactForm'
import { LocationsSection } from '@/components/locations-section'
import { GoogleMapSection } from '@/components/ContactUsPage/GoogleMapSection'

export const metadata: Metadata = {
  title: "Official Contact Information - Internet Moguls",
  description: "To contact us, Call +91 8826104440 or email us at rajesh@internetmoguls.com, Mailing address- 14, Second Floor, Local Shopping Complex, Pushpa Bhavan, New Delhi - 110062",
    generator: 'v0.app'
}

const page = () => {
  return (
    <div className='contact-us-page-container'>
      <PageBanner title='Contact Us' description='' image='/luxury-hotel-lobby-interior-with-dramatic-lighting.jpg' />
      <ContactForm />
      <GoogleMapSection />
      <LocationsSection />
    </div>
  )
}

export default page