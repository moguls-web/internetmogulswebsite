"use client"

import Link from "next/link"
import { Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function CareersFooter() {
  return (
    <div id="contact" className="bg-white border-t border-[#1a1a1a]/10">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#1a1a1a]">
          Ready to Make
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] via-[#4D9FFF] to-[#FF6B6B]">
            Your Mark?
          </span>
        </h2>
        <p className="text-[#1a1a1a]/60 text-lg max-w-xl mx-auto mb-8">
          Join 50+ marketing experts transforming hospitality digital presence worldwide.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#openings"
            className="px-8 py-4 bg-[#1a1a1a] text-white font-bold rounded-full hover:bg-[#00C9A7] transition-colors"
          >
            Browse Open Roles
          </Link>
          <Link
            href="mailto:careers@internetmoguls.com"
            className="px-8 py-4 border-2 border-[#1a1a1a]/20 text-[#1a1a1a] font-semibold rounded-full hover:border-[#00C9A7] hover:text-[#00C9A7] transition-colors"
          >
            Contact HR
          </Link>
        </div>
      </div>
 
    </div>
  )
}
