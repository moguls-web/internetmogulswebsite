"use client"

import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'
import { X } from 'lucide-react'

const OfflineCreativesGallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)

  // Sample data - replace with actual images
  const allCreatives = [
    {
      id: 1,
      category: 'wedding',
      image: '/1-1-1.webp',
      title: '360VENUE - Wedding Service',
    },
    {
      id: 2,
      category: 'emailer',
      image: '/baga-beach.webp',
      title: 'LEISURE HOTELS - Spiritual Retreat',
    },
    {
      id: 3,
      category: 'hoardings',
      image: '/1-1.webp',
      title: 'HOTEL HOME IN - Hotel Promotion',
    },
    {
      id: 4,
      category: 'standees',
      image: '/1-2.webp',
      title: 'BAGA - Vacation Promotion',
    },
    {
      id: 5,
      category: 'f&b',
      image: '/1.webp',
      title: 'TAJ MAHAL NEW DELHI - Food Promotion',
    },  
  ]

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'emailer', label: 'Emailer' },
    { value: 'f&b', label: 'F&B Promotions' },
    { value: 'hoardings', label: 'Hoardings' },
    { value: 'standees', label: 'Standees' },
    { value: 'wedding', label: 'Wedding' },
  ]

  const getFilteredCreatives = (category: string) => {
    if (category === 'all') {
      return allCreatives
    }
    return allCreatives.filter((creative) => creative.category === category)
  }

  return (
    <div className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="all" className="w-full">
          {/* Tabs Navigation */}
          <TabsList className="bg-transparent border-b border-gray-700 rounded-none h-auto p-0 mb-8 w-2/3 mx-auto ">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="text-lg bg-transparent border-0 rounded-none px-4 py-3 text-white data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-red-500"
                  style={{
                    borderBottomColor: '#f24045',
                  }}
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>

          {/* Tab Content */}
          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredCreatives(category.value).map((creative) => (
                  <div
                    key={creative.id}
                    className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-800 aspect-[4/3]"
                    onClick={() => setSelectedImage({ src: creative.image, title: creative.title })}
                  >
                    <img
                      src={creative.image}
                      alt={creative.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-0 shadow-none" showCloseButton={false}>
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors z-10"
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default OfflineCreativesGallery

