"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { MapPin, Clock, ChevronRight, Briefcase, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const departments = ["All", "Client Servicing", "Social Media Manager", "Revenue OTA Manager", "PPC Intern", "Social Media Associate", "PR Trainee", "INTERNSHIP"]

const positions = [
  {
    id: 1,
    title: "Client Servicing",
    department: "Client Servicing",
    location: "Delhi",
    type: "Full Time",
    experience: "2-4 years",
    description: "Excellent Communications, Strong Digital Marketing Knowledge",
    fullDescription: "Manage the daily operations of existing as well as newly acquired accounts. Successfully increasing client website visibility & traffic through Organic searches & SMO activities. Working closely with clients + internal team to plan and implement all online marketing campaigns including digital campaign collaterals. Track, analyse and summarise campaign results and progress. • Knowledge sharing with the internal team on the various innovations and campaigns that are being done across the industry",
    industry: "Digital Marketing Agency",
    skills: "Excellent Communication",
    email: "careers@internetmoguls.com",
    daysToAdvertise: 28,
  },
  {
    id: 2,
    title: "Social Media Manager",
    department: "Social Media Manager",
    location: "Delhi",
    type: "Full Time",
    experience: "2-4 years",
    description: "Good comprehension skills. Capacity to conduct independent research from a variety of sources",
    fullDescription: "Ideate creative ideas for social media channels like Facebook, Instagram, Twitter, LinkedIn, Google+ and Pinterest. Work according to brand guidelines and make strategies for online promotions of respective brands. Generate, edit and publish daily content on respective brand pages.",
    industry: "Digital Marketing Agency",
    skills: "Team Leader, Experience with team handling",
    email: "careers@internetmoguls.com",
    daysToAdvertise: 28,
  },
  {
    id: 3,
    title: "Revenue OTA Manager",
    department: "Revenue OTA Manager",
    location: "Delhi",
    type: "Full Time",
    experience: "3-5 years",
    description: "Excellent Communications, Strong Knowledge of OTA (Online Travel Agency) platforms.",
    fullDescription: "Develop and implement strategies to maximize visibility, conversion rates, and revenue through OTA channels. Monitor OTA performance metrics, analyze data, and identify opportunities for improvement. Oversee rate and inventory management on OTA platforms, ensuring pricing competitiveness and optimal allocation of room inventory. Utilize dynamic pricing strategies and promotional campaigns to drive bookings and revenue growth. Conduct regular audits of OTA presence and performance for clients, providing insights and recommendations for improvement.",
    industry: "Digital Marketing Agency",
    skills: "Bachelor's degree in Marketing, Business Administration, Hospitality Management, or related field. Proven experience in revenue management, digital marketing, or related roles within the hospitality industry. Proficiency in digital marketing tools and platforms such as Google Analytics, AdWords, social media management tools, and email marketing software. Excellent communication and interpersonal skills, with the ability to build rapport with clients and collaborate effectively with internal teams. Results-oriented mindset with a focus on driving revenue growth, maximizing ROI, and exceeding client expectations.",
    email: "careers@internetmoguls.com",
    daysToAdvertise: 28,
  },
  {
    id: 4,
    title: "PPC Intern",
    department: "PPC Intern",
    location: "Delhi",
    type: "Internship",
    experience: "0-1 years",
    description: "Strong interest in digital marketing, basic knowledge of PPC platforms (Google Ads, Meta Ads), and analytical mindset.",
    fullDescription: "Assist in the creation, management, and optimization of PPC campaigns on platforms like Google Ads and Meta Ads. Conduct keyword research, competitor analysis, and help in monitoring ad performance. Support the team in A/B testing of ad copy and landing pages. Analyze performance metrics, prepare reports, and provide insights for optimization. Assist in managing daily campaign budgets and tracking key performance indicators (KPIs).",
    industry: "Digital Marketing Agency",
    skills: "Good Communication, Market Research, Hotel OTA Platforms, Content Management",
    email: "careers@internetmoguls.com",
    daysToAdvertise: 28,
  },
  {
    id: 5,
    title: "Social Media Associate",
    department: "Social Media Associate",
    location: "Delhi",
    type: "Full Time",
    experience: "1-2 years",
    description: "Good comprehension skills. Capacity to conduct independent research from a variety of sources",
    fullDescription: "Ideate creative ideas for social media channels like Facebook, Instagram, Twitter, LinkedIn, Google+ and Pinterest. Work according to brand guidelines and make strategies for online promotions of respective brands. Generate, edit and publish daily content on respective brand pages.",
    industry: "Digital Marketing Agency",
    skills: "Posting on Various Social Media Platforms",
    email: "careers@internetmoguls.com",
    daysToAdvertise: 28,
  },
  {
    id: 6,
    title: "PR Trainee",
    department: "PR Trainee",
    location: "Delhi",
    type: "Full Time",
    experience: "0-1 years",
    description: "Good contacts in blogger community pan India. Should be familiar with excel, word and PowerPoint",
    fullDescription: "Contact in Hospitality and General Media pan India (Delhi should be focus). Strong communication and writing skills",
    industry: "Public Relations",
    skills: "Excellent Communication",
    email: "careers@internetmoguls.com",
    daysToAdvertise: 28,
  },
  {
    id: 7,
    title: "INTERNSHIP",
    department: "INTERNSHIP",
    location: "Delhi",
    type: "Internship",
    experience: "0-1 years",
    description: "Various internship opportunities available across different departments.",
    fullDescription: "We offer internship opportunities for students and fresh graduates looking to gain experience in digital marketing, hospitality marketing, and related fields.",
    industry: "Digital Marketing Agency",
    skills: "Willingness to learn, Good communication skills",
    email: "careers@internetmoguls.com",
    daysToAdvertise: 28,
  },
]

const departmentColors: Record<string, string> = {
  "Client Servicing": "bg-[#00C9A7]",
  "Social Media Manager": "bg-[#A855F7]",
  "Revenue OTA Manager": "bg-[#4D9FFF]",
  "PPC Intern": "bg-[#FFB800]",
  "Social Media Associate": "bg-[#FF6B6B]",
  "PR Trainee": "bg-[#00C9A7]",
  "INTERNSHIP": "bg-[#A855F7]",
}

// Google Sheets URL for career applications
const CAREER_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbygAasKhlifho1i9Rplahmy2he9I3VAQeKBHfhcMATug-5BLa5xUcXTfNDI9OGhmofclg/exec'

// File upload API endpoint
const UPLOAD_RESUME_API = '/api/upload-resume'

// File validation constants
const MAX_FILE_SIZE = 4 * 1024 * 1024 // 4MB in bytes
const ALLOWED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
const ALLOWED_FILE_EXTENSIONS = ['.pdf', '.doc', '.docx']

export function OpenPositions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeDepartment, setActiveDepartment] = useState("All")
  const [selectedPosition, setSelectedPosition] = useState<typeof positions[0] | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })
  const [fileError, setFileError] = useState<string>('')
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    currentCTC: "",
    expectedCTC: "",
    joinDate: "",
    resume: null as File | null,
    skillSet: "",
  })

  // Validate file
  const validateFile = (file: File): string | null => {
    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return `File size exceeds 4MB. Your file is ${(file.size / 1024 / 1024).toFixed(2)}MB.`
    }

    // Check file type
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
    if (!ALLOWED_FILE_TYPES.includes(file.type) && !ALLOWED_FILE_EXTENSIONS.includes(fileExtension)) {
      return 'Only PDF and DOC/DOCX files are allowed.'
    }

    return null
  }

  // Handle file change with validation
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      setFormData({ ...formData, resume: null })
      setFileError('')
      return
    }

    const error = validateFile(file)
    if (error) {
      setFileError(error)
      setFormData({ ...formData, resume: null })
      e.target.value = '' // Clear the input
    } else {
      setFileError('')
      setFormData({ ...formData, resume: file })
    }
  }

  // Upload file to server and get public URL
  const uploadResumeFile = async (file: File): Promise<string> => {
    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch(UPLOAD_RESUME_API, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to upload file')
    }

    const data = await response.json()
    // Return full URL (assuming the site is accessible)
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
    return `${baseUrl}${data.url}`
  }

  const filteredPositions =
    activeDepartment === "All" ? positions : positions.filter((p) => p.department === activeDepartment)

  return (
    <section id="openings" className="py-24 md:py-32 bg-[#FAFAFA]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#00C9A7] text-sm font-bold uppercase tracking-widest">Join Us</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 text-[#1a1a1a]">Open Positions</h2>
          <p className="text-[#1a1a1a]/60 text-lg max-w-2xl mx-auto">
            Find your next opportunity. We're always looking for talented people to join our growing team.
          </p>
        </motion.div>

        {/* Department filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDepartment(dept)}
              className={`w-full md:w-auto px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeDepartment === dept
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-white text-[#1a1a1a]/60 hover:bg-[#1a1a1a]/5 hover:text-[#1a1a1a] border border-[#1a1a1a]/10"
              }`}
            >
              {dept}
            </button>
          ))}
        </motion.div>

        {/* Positions list */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {filteredPositions.map((position, i) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group relative p-6 bg-white border border-[#1a1a1a]/5 rounded-2xl hover:shadow-lg hover:border-[#00C9A7]/30 transition-all cursor-pointer"
                onClick={() => {
                  setSelectedPosition(position)
                  setFormData({
                    department: position.department,
                    name: "",
                    email: "",
                    phone: "",
                    city: "",
                    state: "",
                    currentCTC: "",
                    expectedCTC: "",
                    joinDate: "",
                    resume: null,
                    skillSet: "",
                  })
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-3 py-1 ${departmentColors[position.department]} text-white text-xs font-bold rounded-full`}
                      >
                        {position.department}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#1a1a1a] group-hover:text-[#00C9A7] transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-[#1a1a1a]/50 text-sm mb-4 md:mb-0">{position.description}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    <div className="flex items-center gap-2 text-[#1a1a1a]/50 text-sm">
                      <MapPin size={16} />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2 text-[#1a1a1a]/50 text-sm">
                      <Clock size={16} />
                      {position.type}
                    </div>
                    <div className="flex items-center gap-2 text-[#1a1a1a]/50 text-sm">
                      <Briefcase size={16} />
                      {position.experience}
                    </div>
                    <ChevronRight
                      size={24}
                      className="text-[#1a1a1a]/20 group-hover:text-[#00C9A7] group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPositions.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#1a1a1a]/40 text-lg">No open positions in this department right now.</p>
          </div>
        )}

        {/* Don't see your role CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 md:p-12 bg-gradient-to-r from-[#00C9A7]/10 via-[#4D9FFF]/10 to-[#FFB800]/10 border border-[#00C9A7]/20 rounded-3xl text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1a1a1a]">Don't See Your Role?</h3>
          <p className="text-[#1a1a1a]/60 mb-6 max-w-xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and tell us why you'd be a great fit.
          </p>
          <a
            href="mailto:careers@internetmoguls.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white font-bold rounded-full hover:bg-[#00C9A7] transition-all"
          >
            Send Open Application
            <ChevronRight size={20} />
          </a>
        </motion.div>
      </div>

      {/* Job Details & Application Modal */}
      <Dialog 
        open={!!selectedPosition} 
        onOpenChange={(open) => {
          if (!open) {
            setSelectedPosition(null)
            setFormData({
              department: "",
              name: "",
              email: "",
              phone: "",
              city: "",
              state: "",
              currentCTC: "",
              expectedCTC: "",
              joinDate: "",
              resume: null,
              skillSet: "",
            })
          }
        }}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedPosition && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#1a1a1a]">
                  {selectedPosition.title}
                </DialogTitle>
                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-[#1a1a1a]/60">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {selectedPosition.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {selectedPosition.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} />
                    {selectedPosition.experience}
                  </div>
                </div>
              </DialogHeader>

              {/* Job Details */}
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#1a1a1a]">Short Description</h3>
                  <p className="text-[#1a1a1a]/70">{selectedPosition.description}</p>
                </div>
                
                {selectedPosition.fullDescription && (
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a1a1a]">Description</h3>
                    <p className="text-[#1a1a1a]/70 whitespace-pre-line">{selectedPosition.fullDescription}</p>
                  </div>
                )}

                {selectedPosition.skills && (
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#1a1a1a]">Skills</h3>
                    <p className="text-[#1a1a1a]/70">{selectedPosition.skills}</p>
                  </div>
                )}

                {/* Application Form */}
                <div className="border-t pt-6 mt-6">
                  <h3 className="font-semibold text-xl mb-6 text-[#1a1a1a]">Apply for this Position</h3>
                  
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault()
                      
                      // Validate file before submission
                      if (!formData.resume) {
                        setFileError('Please upload your resume')
                        return
                      }

                      const fileValidationError = validateFile(formData.resume)
                      if (fileValidationError) {
                        setFileError(fileValidationError)
                        return
                      }

                      setIsSubmitting(true)
                      setSubmitStatus({ type: null, message: '' })
                      setFileError('')

                      try {
                        // Upload resume file first to get public URL
                        let resumeUrl = ''
                        if (formData.resume) {
                          try {
                            resumeUrl = await uploadResumeFile(formData.resume)
                          } catch (fileError) {
                            console.error('Error uploading file:', fileError)
                            setFileError(fileError instanceof Error ? fileError.message : 'Failed to upload resume file')
                            setIsSubmitting(false)
                            return
                          }
                        }

                        // Prepare form data for Google Sheets
                        const submissionData: Record<string, string> = {
                          positionTitle: selectedPosition?.title || '',
                          department: formData.department,
                          name: formData.name,
                          email: formData.email,
                          phone: formData.phone,
                          city: formData.city,
                          state: formData.state,
                          currentCTC: formData.currentCTC,
                          expectedCTC: formData.expectedCTC,
                          joinDate: formData.joinDate,
                          resumeUrl: resumeUrl,
                          skillSet: formData.skillSet,
                        }

                        // Create form data for submission
                        // Encode the data properly for URLSearchParams
                        const formDataToSend = new URLSearchParams()
                        Object.keys(submissionData).forEach((key) => {
                          // Ensure base64 strings are properly encoded
                          const value = submissionData[key]
                          if (value) {
                            formDataToSend.append(key, value)
                          }
                        })

                        // Submit to Google Sheets
                        const response = await fetch(CAREER_SHEETS_URL, {
                          method: 'POST',
                          mode: 'no-cors',
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                          },
                          body: formDataToSend.toString(),
                        })

                        setSubmitStatus({ 
                          type: 'success', 
                          message: 'Application submitted successfully! We will get back to you soon.' 
                        })

                        // Reset form
                        setFormData({
                          department: "",
                          name: "",
                          email: "",
                          phone: "",
                          city: "",
                          state: "",
                          currentCTC: "",
                          expectedCTC: "",
                          joinDate: "",
                          resume: null,
                          skillSet: "",
                        })

                        // Close modal after 2 seconds
                        setTimeout(() => {
                          setSelectedPosition(null)
                          setSubmitStatus({ type: null, message: '' })
                        }, 2000)

                      } catch (error) {
                        console.error('Error submitting form:', error)
                        setSubmitStatus({ 
                          type: 'error', 
                          message: 'Failed to submit application. Please try again later.' 
                        })
                      } finally {
                        setIsSubmitting(false)
                      }
                    }}
                    className="space-y-6"
                  >
                    {/* Department Select */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">
                        Select your department
                      </label>
                      <Select
                        value={formData.department}
                        onValueChange={(value) => setFormData({ ...formData, department: value })}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your department" />
                        </SelectTrigger>
                        <SelectContent>
                          
                          <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
                          <SelectItem value="Content Writer">Content Writer</SelectItem>
                          <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                          <SelectItem value="Cinematography">Cinematography</SelectItem>
                          <SelectItem value="SEO & PPC">SEO & PPC</SelectItem>
                          <SelectItem value="Development-.net">Development-.net</SelectItem>
                          <SelectItem value="Development- HTML">Development- HTML</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">
                          Name
                        </label>
                        <Input
                          type="text"
                          placeholder="Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    {/* Phone and City */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">
                          Phone
                        </label>
                        <Input
                          type="tel"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">
                          City
                        </label>
                        <Input
                          type="text"
                          placeholder="City"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    {/* State */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">
                        State
                      </label>
                      <Input
                        type="text"
                        placeholder="State"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        required
                      />
                    </div>

                    {/* Current CTC and Join Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">
                          Current CTC
                        </label>
                        <Input
                          type="text"
                          placeholder="Current CTC"
                          value={formData.currentCTC}
                          onChange={(e) => setFormData({ ...formData, currentCTC: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">
                          How soon you can join
                        </label>
                        <Input
                          type="text"
                          placeholder="How soon you can join"
                          value={formData.joinDate}
                          onChange={(e) => setFormData({ ...formData, joinDate: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Expected CTC */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">
                        Expected CTC
                      </label>
                      <Input
                        type="text"
                        placeholder="Expected CTC"
                        value={formData.expectedCTC}
                        onChange={(e) => setFormData({ ...formData, expectedCTC: e.target.value })}
                      />
                    </div>

                    {/* Resume Upload */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">
                        Resume <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="cursor-pointer"
                        required
                      />
                      {fileError && (
                        <p className="text-sm text-red-600 mt-2">{fileError}</p>
                      )}
                      {formData.resume && !fileError && (
                        <p className="text-sm text-green-600 mt-2">
                          ✓ Selected: {formData.resume.name} ({(formData.resume.size / 1024 / 1024).toFixed(2)} MB)
                        </p>
                      )}
                      <p className="text-xs text-[#1a1a1a]/50 mt-1">
                        Accepted formats: PDF, DOC, DOCX (Max size: 4MB)
                      </p>
                    </div>

                    {/* Skill Set */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#1a1a1a]">
                        Skill Set
                      </label>
                      <Textarea
                        placeholder="Enter your skills"
                        value={formData.skillSet}
                        onChange={(e) => setFormData({ ...formData, skillSet: e.target.value })}
                        rows={4}
                        className="resize-y"
                      />
                    </div>

                    {/* Status Message */}
                    {submitStatus.type && (
                      <div
                        className={`p-4 rounded-md ${
                          submitStatus.type === 'success'
                            ? 'bg-green-50 text-green-800 border border-green-200'
                            : 'bg-red-50 text-red-800 border border-red-200'
                        }`}
                      >
                        <p className="text-sm font-medium">{submitStatus.message}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-8 py-4 bg-[#1a1a1a] text-white font-bold rounded-lg transition-all ${
                        isSubmitting
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:bg-[#00C9A7]'
                      }`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </form>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
