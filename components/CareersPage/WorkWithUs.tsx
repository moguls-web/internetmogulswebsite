"use client"

import React from 'react'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const WorkWithUs = () => {
  const jobListings = [
    {
      id: 1,
      title: 'Client Servicing',
      experience: '05 - 10 years experience',
      skills: 'Excellent Communications, Strong Digital Marketing Knowledge',
      description: [
        'Manage the daily operations of existing as well as newly acquired accounts.',
        'Successfully increasing client website visibility & traffic through Organic searches & SMO activities.',
        'Working closely with clients + internal team to plan and implement all online marketing campaigns including digital campaign collaterals.',
        'Track, analyse and summarise campaign results and progress.',
        'Knowledge sharing with the internal team on the various innovations and campaigns that are being done across the industry.'
      ],
      type: 'Permanent',
      location: 'Delhi',
      industry: 'Digital Marketing Agency',
      skillsDisplay: 'Excellent Communication',
      email: 'careers@internetmoguls.com',
      daysToAdvertise: 28
    },
    {
        id: 2,
        title: 'Social Media Manager',
        experience: '05 - 10 years experience',
        skills: 'Good comprehension skills. Capacity to conduct independent research from a variety of sources',
        description: [
          'Ideate creative ideas for social media channels like Facebook, Instagram, Twitter, LinkedIn, Google+ and Pinterest.',
          'Work according to brand guidelines and make strategies for online promotions of respective brands.',
          'Generate, edit and publish daily content on respective brand pages.' 
        ],
        type: 'Permanent',
        location: 'Delhi',
        skillsDisplay: 'Team Leader, Experience with team handling',
        industry: 'Digital Marketing Agency',
        email: 'careers@internetmoguls.com',
        daysToAdvertise: 28
      },
        {
            id: 3,
            title: 'Revenue OTA Manager',
            experience: '05 - 10 years experience',
            skills: 'Excellent Communications, Strong Knowledge of OTA (Online Travel Agency) platforms.',
            description: [
            'Develop and implement strategies to maximize visibility, conversion rates, and revenue through OTA channels.',
            'Monitor OTA performance metrics, analyze data, and identify opportunities for improvement.',
            'Oversee rate and inventory management on OTA platforms, ensuring pricing competitiveness and optimal allocation of room inventory.',
            'Utilize dynamic pricing strategies and promotional campaigns to drive bookings and revenue growth.',
            'Conduct regular audits of OTA presence and performance for clients, providing insights and recommendations for improvement.'
            ],
            type: 'Permanent',
            location: 'Delhi',
            skillsDisplay: 'Bachelors degree in Marketing, Business Administration, Hospitality Management, or related field. Proven experience in revenue management, digital marketing, or related roles within the hospitality industry. Proficiency in digital marketing tools and platforms such as Google Analytics, AdWords, social media management tools, and email marketing software. Excellent communication and interpersonal skills, with the ability to build rapport with clients and collaborate effectively with internal teams. Results-oriented mindset with a focus on driving revenue growth, maximizing ROI, and exceeding client expectations.',
            industry: 'Digital Marketing Agency',
            email: 'careers@internetmoguls.com',
            daysToAdvertise: 28
        },
        {
            id: 4,
            title: 'PPC Intern',
            experience: '05 - 10 years experience',
            skills: 'Strong interest in digital marketing, basic knowledge of PPC platforms (Google Ads, Meta Ads), and analytical mindset.',
            description: [
            'Assist in the creation, management, and optimization of PPC campaigns on platforms like Google Ads and Meta Ads.',
            'Conduct keyword research, competitor analysis, and help in monitoring ad performance.',
            'Support the team in A/B testing of ad copy and landing pages. ', 
            'Analyze performance metrics, prepare reports, and provide insights for optimization.',
            'Assist in managing daily campaign budgets and tracking key performance indicators (KPIs).'
            ],
            type: 'Internship',
            location: 'Delhi',
            skillsDisplay: 'Good Communication, Market Research, Hotel OTA Platforms, Content Management.',
            industry: 'Digital Marketing Agency',
            email: 'careers@internetmoguls.com',
            daysToAdvertise: 28
        },
        {
            id: 5,
            title: 'Social Media Associate',
            experience: '05 - 10 years experience',
            skills: 'Good comprehension skills. Capacity to conduct independent research from a variety of sources',
            description: [
            'Ideate creative ideas for social media channels like Facebook, Instagram, Twitter, LinkedIn, Google+ and Pinterest.',
            'Work according to brand guidelines and make strategies for online promotions of respective brands.',
            'Generate, edit and publish daily content on respective brand pages.'
            ],
            type: 'Internship',
            location: 'Delhi',
            skillsDisplay: 'Posting on Various Social Media Platforms.',
            industry: 'Digital Marketing Agency',
            email: 'careers@internetmoguls.com',
            daysToAdvertise: 28
        },
        {
            id: 6,
            title: 'PR Trainee',
            experience: '05 - 10 years experience',
            skills: 'Good contacts in blogger community pan India. Should be familiar with excel, word and PowerPoint',
            description: [
            'Contact in Hospitality and General Media pan India (Delhi should be focus )Strong communication and writing skills.' 
            ],
            type: 'Internship',
            location: 'Delhi',
            skillsDisplay: 'Excellent Communication.',
            industry: 'Public Relations',
            email: 'careers@internetmoguls.com',
            daysToAdvertise: 28
        },
        {
            id: 7,
            title: 'Internship',
            experience: 'Demo 05 - 10 years experience',
            skills: 'Demo',
            description: [
            '1 demo',
            '2 demo' 
            ],
            type: 'Internship',
            location: 'Delhi',
            skillsDisplay: 'Excellent Communication.',
            industry: 'Public Relations',
            email: 'careers@internetmoguls.com',
            daysToAdvertise: 28
        },
      
  ]

  return (
    <div className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-black">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm tracking-widest uppercase mb-4 text-white">
            // Come, be a part of the Moguls family.
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            Work with us!
          </h2>
        </div>

        {/* Job Listings Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {jobListings.map((job) => (
            <AccordionItem
              key={job.id}
              value={`job-${job.id}`}
              className="bg-gray-900 rounded-lg overflow-hidden border-none"
            >
              <AccordionTrigger className="p-6 hover:no-underline [&>svg]:hidden group">
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">
                    {job.experience}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {job.skills}
                  </p>
                </div>
                <div className="shrink-0 w-8 h-8 rounded flex items-center justify-center transition-all duration-300 bg-white/20 group-data-[state=open]:bg-white ml-4">
                  <Plus className="w-5 h-5 text-white transition-all duration-300 group-data-[state=open]:hidden" />
                  <Minus 
                    className="w-5 h-5 transition-all duration-300 hidden group-data-[state=open]:block" 
                    style={{ color: '#f24045' }} 
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  {/* Job Description */}
                  {Array.isArray(job.description) ? (
                    <div>
                      <h4 className="text-white font-semibold mb-3">Job Description:</h4>
                      <ul className="space-y-2">
                        {job.description.map((item, idx) => (
                          <li key={idx} className="text-gray-300 leading-relaxed flex items-start">
                            <span className="text-white mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-gray-300 leading-relaxed">
                      {job.description}
                    </p>
                  )}

                  {/* Job Details Grid */}
                  {(job.type || job.location || job.industry || job.email || job.daysToAdvertise) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                      {job.type && (
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Type</p>
                          <p className="text-white font-medium">{job.type}</p>
                        </div>
                      )}
                      {job.location && (
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Location</p>
                          <p className="text-white font-medium">{job.location}</p>
                        </div>
                      )}
                      {job.skillsDisplay && (
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Skills</p>
                          <p className="text-white font-medium">{job.skillsDisplay}</p>
                        </div>
                      )}
                      {job.industry && (
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Industry</p>
                          <p className="text-white font-medium">{job.industry}</p>
                        </div>
                      )}
                      {job.email && (
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Email</p>
                          <a href={`mailto:${job.email}`} className="text-white font-medium hover:underline" style={{ color: '#f24045' }}>
                            {job.email}
                          </a>
                        </div>
                      )}
                      {job.daysToAdvertise && (
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Days To Advertise</p>
                          <p className="text-white font-medium">{job.daysToAdvertise}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Application Form */}
                  <div className="pt-6 border-t border-gray-700">
                    <h4 className="text-white font-semibold text-xl mb-6">Apply for the Position</h4>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <div>
                            <label className="block text-white text-sm mb-2">First Name</label>
                            <Input
                              type="text"
                              placeholder="First Name"
                              className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder:text-gray-500 focus-visible:border-gray-400 focus-visible:ring-0"
                            />
                          </div>
                          <div>
                            <label className="block text-white text-sm mb-2">Email Address</label>
                            <Input
                              type="email"
                              placeholder="Email Address"
                              className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder:text-gray-500 focus-visible:border-gray-400 focus-visible:ring-0"
                            />
                          </div>
                          <div>
                            <label className="block text-white text-sm mb-2">City</label>
                            <Input
                              type="text"
                              placeholder="City"
                              className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder:text-gray-500 focus-visible:border-gray-400 focus-visible:ring-0"
                            />
                          </div>
                          <div>
                            <label className="block text-white text-sm mb-2">Current CTC</label>
                            <Input
                              type="text"
                              placeholder="Current CTC"
                              className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder:text-gray-500 focus-visible:border-gray-400 focus-visible:ring-0"
                            />
                          </div>
                          <div>
                            <label className="block text-white text-sm mb-2">Select your department</label>
                            <Select>
                              <SelectTrigger className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white w-full justify-between focus-visible:border-gray-400 focus-visible:ring-0">
                                <SelectValue placeholder="Select your department" />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-900 border-gray-700 text-white">
                                <SelectItem value="cinematography">Cinematography</SelectItem>
                                <SelectItem value="client-servicing">Client Servicing</SelectItem>
                                <SelectItem value="content-writer">Content Writer</SelectItem>
                                <SelectItem value="dot-net-developer">Dot Net Developer</SelectItem>
                                <SelectItem value="graphic-design">Graphic Design</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div> 
                              <label className="block text-white text-sm mb-2">How soon you can join</label>
                              <Input
                                type="text"
                                placeholder="How soon you can join"
                                className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder:text-gray-500 focus-visible:border-gray-400 focus-visible:ring-0 w-full"
                              /> 
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          <div>
                            <label className="block text-white text-sm mb-2">Last Name</label>
                            <Input
                              type="text"
                              placeholder="Last Name"
                              className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder:text-gray-500 focus-visible:border-gray-400 focus-visible:ring-0"
                            />
                          </div>
                          <div>
                            <label className="block text-white text-sm mb-2">Phone</label>
                            <Input
                              type="tel"
                              placeholder="Phone"
                              className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder:text-gray-500 focus-visible:border-gray-400 focus-visible:ring-0"
                            />
                          </div>
                          <div>
                            <label className="block text-white text-sm mb-2">State</label>
                            <Input
                              type="text"
                              placeholder="State"
                              className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder:text-gray-500 focus-visible:border-gray-400 focus-visible:ring-0"
                            />
                          </div>
                          <div>
                            <label className="block text-white text-sm mb-2">Expected CTC</label>
                            <Input
                              type="text"
                              placeholder="Expected CTC"
                              className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder:text-gray-500 focus-visible:border-gray-400 focus-visible:ring-0"
                            />
                          </div>
                          <div>
                            <label className="block text-white text-sm mb-2">
                              Attach resume<span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center gap-3">
                              <label className="px-4 py-2 bg-white text-black rounded cursor-pointer hover:bg-gray-100 transition-colors">
                                Choose File
                                <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                              </label>
                              <span className="text-gray-400 text-sm">No file chosen</span>
                            </div>
                          </div>
                          <div>
                            <label className="block text-white text-sm mb-2">Skill Set</label>
                            <Input
                              type="text"
                              placeholder="Skill Set"
                              className="bg-transparent border-0 border-b border-gray-600 rounded-none text-white placeholder:text-gray-500 focus-visible:border-gray-400 focus-visible:ring-0 w-full"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-6">
                        <button
                          type="submit"
                          className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-semibold uppercase tracking-wide hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                          style={{ backgroundColor: '#f24045' }}
                        >
                          APPLY FOR THE JOB
                          <ArrowRight className="w-5 h-5" />
                        </button>
                        <div className="mt-2 h-0.5" style={{ backgroundColor: '#f24045' }}></div>
                      </div>
                    </form>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default WorkWithUs

