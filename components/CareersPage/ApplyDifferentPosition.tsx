import React from 'react'

const ApplyDifferentPosition = () => {
  return (
    <div className="relative w-full py-20 lg:py-32 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Diagonal Red Banner */}
        <div 
          className="relative py-12 lg:py-16 px-8 lg:px-12 transform -skew-y-1"
          style={{ backgroundColor: '#f24045' }}
        >
          <div className="transform skew-y-1 text-center">
            {/* Main Text */}
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
              Want to apply for a different Position?
            </h2>
            
            {/* Email Addresses */}
            <p className="text-gray-300 text-sm lg:text-base">
              Mail Us: <a href="mailto:Careers@internetmoguls.com" className="hover:underline">Careers@internetmoguls.com</a>, <a href="mailto:Heart@internetmoguls.com" className="hover:underline">Heart@internetmoguls.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyDifferentPosition

