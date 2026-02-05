import React from 'react'
import PageBanner from '@/components/PageBanner'
import CareersAwards from '@/components/CareersPage/CareersAwards'
import BeAMogul from '@/components/CareersPage/BeAMogul'
import WorkWithUs from '@/components/CareersPage/WorkWithUs'
import ApplyDifferentPosition from '@/components/CareersPage/ApplyDifferentPosition'

const page = () => {
  return (
    <div className='careers-page-container'>
      <PageBanner title='Careers' description='Careers' image='/luxury-hotel-lobby-interior-with-dramatic-lighting.jpg' />
      <CareersAwards />
      <BeAMogul />
      <WorkWithUs />
      <ApplyDifferentPosition />
    </div>
  )
}

export default page