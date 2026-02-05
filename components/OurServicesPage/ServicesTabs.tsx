"use client"

import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { services } from "@/data/serviceData"
import {
  TrendingUp,
  Compass,
  Monitor,
  Globe,
  ArrowDown,
  Building2,
  MessageSquare,
  Users,
  Crown,
  Camera,
  Calendar,
  PenTool
} from 'lucide-react'
import { ServicesSection } from '@/components/services-section'
const ServicesTabs = () => {

  return (
    <div className='service-page-data'>
      <div className='max-w-7xl mx-auto px-0 lg:px-8'>
        <ServicesSection  services={services}/>
      </div>
    </div>
  )
}

export default ServicesTabs

