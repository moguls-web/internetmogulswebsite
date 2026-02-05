import React from 'react'
import PageBanner from '@/components/PageBanner'
import ClientsGrid from '@/components/OurClientsPage/ClientsGrid'

const page = () => {
  return (
    <div className='our-clients-page-container'>        
        <PageBanner title='Our Clients' description='Our clients' image='/luxury-hotel-lobby-interior-with-dramatic-lighting.jpg' />
        <ClientsGrid />
    </div>
  )
}

export default page