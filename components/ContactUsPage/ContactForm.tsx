"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

// Country codes list
const countryCodes = [
  { code: '+1', country: 'United States/Canada', flag: '🇺🇸' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+32', country: 'Belgium', flag: '🇧🇪' },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
  { code: '+43', country: 'Austria', flag: '🇦🇹' },
  { code: '+45', country: 'Denmark', flag: '🇩🇰' },
  { code: '+46', country: 'Sweden', flag: '🇸🇪' },
  { code: '+47', country: 'Norway', flag: '🇳🇴' },
  { code: '+48', country: 'Poland', flag: '🇵🇱' },
  { code: '+351', country: 'Portugal', flag: '🇵🇹' },
  { code: '+353', country: 'Ireland', flag: '🇮🇪' },
  { code: '+358', country: 'Finland', flag: '🇫🇮' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+974', country: 'Qatar', flag: '🇶🇦' },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
  { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
  { code: '+968', country: 'Oman', flag: '🇴🇲' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+66', country: 'Thailand', flag: '🇹🇭' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+63', country: 'Philippines', flag: '🇵🇭' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' },
  { code: '+852', country: 'Hong Kong', flag: '🇭🇰' },
  { code: '+886', country: 'Taiwan', flag: '🇹🇼' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+57', country: 'Colombia', flag: '🇨🇴' },
  { code: '+51', country: 'Peru', flag: '🇵🇪' },
  { code: '+7', country: 'Russia/Kazakhstan', flag: '🇷🇺' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+212', country: 'Morocco', flag: '🇲🇦' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+977', country: 'Nepal', flag: '🇳🇵' },
]

// Contact form schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  countryCode: z.string().min(1, 'Country code is required'),
  mobile: z.string().min(1, 'Mobile is required'),
  website: z.string().optional(),
  company: z.string().min(1, 'Hotel Name is required'),
  city: z.string().min(1, 'City is required'),
  numberOfRooms: z.string().min(1, 'No. of Rooms is required'),
  averageRoomRate: z.string().min(1, 'Average Room Rate is required'),
  revenueImpactAreas: z.string().min(1, 'This field is required'),
  bookingSource: z.string().min(1, 'This field is required'),
  banquetEnquiries: z.string().min(1, 'This field is required'),
  restaurantDiscoverable: z.string().min(1, 'This field is required'),
  otherChallenges: z.string().optional(),
})

// Base schema for common fields
const baseSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  phone: z.string().min(1, 'Phone is required').regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Please enter a valid phone number'),
  website: z.string().min(1, 'Website is required').url('Please enter a valid website URL'),
  businessType: z.string().min(1, 'Type Of Business is required'),
})

// Education schema
const educationSchema = baseSchema.extend({
  collegeName: z.string().min(1, 'Name of the College/School is required'),
  majorFocus: z.array(z.string()).min(1, 'Please select at least one Major Focus option'),
  currentDigitalMarketing: z.string().min(1, 'This field is required'),
  challenges: z.string().min(1, 'This field is required'),
  firstCompetitor: z.string().min(1, 'Your First Competitor is required'),
  secondCompetitor: z.string().min(1, 'Your Second Competitor is required'),
})

// Hotel schema
const hotelSchema = baseSchema.extend({
  hotelName: z.string().min(1, 'Your Hotel is required'),
  numberOfRooms: z.string().min(1, 'No. Of Rooms is required'),
  averageRoomRate: z.string().min(1, 'Average Room Rate is required'),
  painArea: z.array(z.string()).min(1, 'Please select at least one Pain Area'),
}).refine((data) => {
  if (data.businessType === 'hotel') {
    return data.hotelName && data.numberOfRooms && data.averageRoomRate && data.painArea && data.painArea.length > 0
  }
  return true
})

// Others schema
const othersSchema = baseSchema.extend({
  industry: z.string().min(1, 'Please specify your industry is required'),
  businessName: z.string().min(1, 'Name of the Business is required'),
  currentDigitalMarketing: z.string().min(1, 'This field is required'),
  challenges: z.string().min(1, 'This field is required'),
  firstCompetitor: z.string().min(1, 'Your First Competitor is required'),
  secondCompetitor: z.string().min(1, 'Your Second Competitor is required'),
})

// Real Estate schema
const realEstateSchema = baseSchema.extend({
  company: z.string().min(1, 'ComHotel Name is required'),
  majorFocus: z.array(z.string()).min(1, 'Please select at least one Major Focus option'),
  currentDigitalMarketing: z.string().min(1, 'This field is required'),
  challenges: z.string().min(1, 'This field is required'),
  firstCompetitor: z.string().min(1, 'Your First Competitor is required'),
  secondCompetitor: z.string().min(1, 'Your Second Competitor is required'),
})

// Travel schema
const travelSchema = baseSchema.extend({
  businessName: z.string().min(1, 'Name of the Business is required'),
  monthlyMarketingBudget: z.string().min(1, 'Monthly Marketing Budget is required'),
  paidMarketingBudget: z.string().min(1, 'Paid Marketing Budget is required'),
  painArea: z.array(z.string()).min(1, 'Please select at least one Pain Area'),
  currentDigitalMarketing: z.string().min(1, 'This field is required'),
  challenges: z.string().min(1, 'This field is required'),
}).refine((data) => {
  if (data.businessType === 'travel') {
    return data.businessName && data.monthlyMarketingBudget && data.paidMarketingBudget && data.painArea && data.painArea.length > 0 && data.currentDigitalMarketing && data.challenges
  }
  return true
})

  // Union type for all schemas
type FormData = z.infer<typeof baseSchema> & {
  // Education fields
  collegeName?: string
  majorFocus?: string[]
  currentDigitalMarketing?: string
  challenges?: string
  firstCompetitor?: string
  secondCompetitor?: string
  monthlyMarketingBudget?: string
  paidMarketingBudget?: string
  turnover?: string
  expectation?: string
  // Hotel fields
  hotelName?: string
  numberOfRooms?: string
  averageRoomRate?: string
  painArea?: string[]
  // Others fields
  industry?: string
  businessName?: string
  // Real Estate fields
  company?: string
  // Travel fields
  majorFocusTravel?: string
  willingToSpend?: string
  expectedROI?: string
}

// Make all fields optional in the base type for conditional validation
const formSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  phone: z.string().min(1, 'Phone is required').regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Please enter a valid phone number'),
  website: z.string().min(1, 'Website is required').url('Please enter a valid website URL'),
  businessType: z.string().min(1, 'Type Of Business is required'),
  // Optional fields - will be validated conditionally
  collegeName: z.string().optional(),
  majorFocus: z.array(z.string()).optional(),
  currentDigitalMarketing: z.string().optional(),
  challenges: z.string().optional(),
  firstCompetitor: z.string().optional(),
  secondCompetitor: z.string().optional(),
  hotelName: z.string().optional(),
  numberOfRooms: z.string().optional(),
  averageRoomRate: z.string().optional(),
  painArea: z.array(z.string()).optional(),
  industry: z.string().optional(),
  businessName: z.string().optional(),
  company: z.string().optional(),
  monthlyMarketingBudget: z.string().optional(),
  paidMarketingBudget: z.string().optional(),
  turnover: z.string().optional(),
  expectation: z.string().optional(),
  majorFocusTravel: z.string().optional(),
  willingToSpend: z.string().optional(),
  expectedROI: z.string().optional(),
}).superRefine((data, ctx) => {
  // Conditional validation based on business type
  if (data.businessType === 'education') {
    if (!data.collegeName || data.collegeName.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Name of the College/School is required',
        path: ['collegeName'],
      })
    }
    if (!data.majorFocus || data.majorFocus.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please select at least one Major Focus option',
        path: ['majorFocus'],
      })
    }
    if (!data.currentDigitalMarketing || data.currentDigitalMarketing.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'This field is required',
        path: ['currentDigitalMarketing'],
      })
    }
    if (!data.challenges || data.challenges.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'This field is required',
        path: ['challenges'],
      })
    }
    if (!data.firstCompetitor || data.firstCompetitor.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Your First Competitor is required',
        path: ['firstCompetitor'],
      })
    }
    if (!data.secondCompetitor || data.secondCompetitor.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Your Second Competitor is required',
        path: ['secondCompetitor'],
      })
    }
    if (!data.monthlyMarketingBudget || data.monthlyMarketingBudget.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Monthly Marketing Budget is required',
        path: ['monthlyMarketingBudget'],
      })
    }
    if (!data.paidMarketingBudget || data.paidMarketingBudget.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Paid Marketing Budget is required',
        path: ['paidMarketingBudget'],
      })
    }
    if (!data.turnover || data.turnover.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Turnover is required',
        path: ['turnover'],
      })
    }
    if (!data.expectation || data.expectation.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Expectation from digital marketing agency is required',
        path: ['expectation'],
      })
    }
  } else if (data.businessType === 'hotel') {
    if (!data.hotelName || data.hotelName.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Your Hotel is required',
        path: ['hotelName'],
      })
    }
    if (!data.numberOfRooms || data.numberOfRooms.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'No. Of Rooms is required',
        path: ['numberOfRooms'],
      })
    }
    if (!data.averageRoomRate || data.averageRoomRate.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Average Room Rate is required',
        path: ['averageRoomRate'],
      })
    }
    if (!data.painArea || data.painArea.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please select at least one Pain Area',
        path: ['painArea'],
      })
    }
  } else if (data.businessType === 'others') {
    if (!data.industry || data.industry.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please specify your industry is required',
        path: ['industry'],
      })
    }
    if (!data.businessName || data.businessName.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Name of the Business is required',
        path: ['businessName'],
      })
    }
    if (!data.currentDigitalMarketing || data.currentDigitalMarketing.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'This field is required',
        path: ['currentDigitalMarketing'],
      })
    }
    if (!data.challenges || data.challenges.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'This field is required',
        path: ['challenges'],
      })
    }
    if (!data.firstCompetitor || data.firstCompetitor.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Your First Competitor is required',
        path: ['firstCompetitor'],
      })
    }
    if (!data.secondCompetitor || data.secondCompetitor.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Your Second Competitor is required',
        path: ['secondCompetitor'],
      })
    }
    if (!data.majorFocus || data.majorFocus.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please select at least one Major Focus option',
        path: ['majorFocus'],
      })
    }
    if (!data.monthlyMarketingBudget || data.monthlyMarketingBudget.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Monthly Marketing Budget is required',
        path: ['monthlyMarketingBudget'],
      })
    }
    if (!data.paidMarketingBudget || data.paidMarketingBudget.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Paid Marketing Budget is required',
        path: ['paidMarketingBudget'],
      })
    }
    if (!data.turnover || data.turnover.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Turnover is required',
        path: ['turnover'],
      })
    }
    if (!data.expectation || data.expectation.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Expectation from digital marketing agency is required',
        path: ['expectation'],
      })
    }
  } else if (data.businessType === 'real-estate') {
    if (!data.company || data.company.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Hotel Name is required',
        path: ['company'],
      })
    }
    if (!data.majorFocus || data.majorFocus.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please select at least one Major Focus option',
        path: ['majorFocus'],
      })
    }
    if (!data.currentDigitalMarketing || data.currentDigitalMarketing.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'This field is required',
        path: ['currentDigitalMarketing'],
      })
    }
    if (!data.challenges || data.challenges.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'This field is required',
        path: ['challenges'],
      })
    }
    if (!data.firstCompetitor || data.firstCompetitor.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Your First Competitor is required',
        path: ['firstCompetitor'],
      })
    }
    if (!data.secondCompetitor || data.secondCompetitor.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Your Second Competitor is required',
        path: ['secondCompetitor'],
      })
    }
    if (!data.monthlyMarketingBudget || data.monthlyMarketingBudget.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Monthly Marketing Budget is required',
        path: ['monthlyMarketingBudget'],
      })
    }
    if (!data.paidMarketingBudget || data.paidMarketingBudget.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Paid Marketing Budget is required',
        path: ['paidMarketingBudget'],
      })
    }
    if (!data.turnover || data.turnover.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Turnover is required',
        path: ['turnover'],
      })
    }
    if (!data.expectation || data.expectation.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Expectation from digital marketing agency is required',
        path: ['expectation'],
      })
    }
  } else if (data.businessType === 'travel') {
    if (!data.businessName || data.businessName.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Name of the Business is required',
        path: ['businessName'],
      })
    }
    if (!data.monthlyMarketingBudget || data.monthlyMarketingBudget.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Monthly Marketing Budget is required',
        path: ['monthlyMarketingBudget'],
      })
    }
    if (!data.paidMarketingBudget || data.paidMarketingBudget.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Paid Marketing Budget is required',
        path: ['paidMarketingBudget'],
      })
    }
    if (!data.painArea || data.painArea.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please select at least one Pain Area',
        path: ['painArea'],
      })
    }
    if (!data.currentDigitalMarketing || data.currentDigitalMarketing.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'This field is required',
        path: ['currentDigitalMarketing'],
      })
    }
    if (!data.challenges || data.challenges.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'This field is required',
        path: ['challenges'],
      })
    }
    if (!data.majorFocusTravel || data.majorFocusTravel.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Major Focus is required',
        path: ['majorFocusTravel'],
      })
    }
    if (!data.willingToSpend || data.willingToSpend.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'How much you are willing to spend is required',
        path: ['willingToSpend'],
      })
    }
    if (!data.expectedROI || data.expectedROI.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Expected ROI is required',
        path: ['expectedROI'],
      })
    }
  }
})

// Google Sheets URLs for each business type
const GOOGLE_SHEETS_URLS = {
  education: 'https://script.google.com/macros/s/AKfycbzj_tN7O8Es-DtpFXJ5JXalg0aUhdVyxu56fNPryXUANgEC-ipaMW2AX-Pr__wpr-mGVQ/exec',
  hotel: 'https://script.google.com/macros/s/AKfycbwXXOpVEle8C8-iOMRhN2VnG8L-vz60pLt9D8dI-6BWYHq1p6qALGD5q_FOtAN87F3rig/exec',
  'real-estate': 'https://script.google.com/macros/s/AKfycbx_NU-b6Io1yvX23pA1czrt0-U1tEXLjX0sdD3_hvdYnU4huirYd6vzr1jEif0lvKNQCA/exec',
  travel: 'https://script.google.com/macros/s/AKfycbwZ_Jzdg-HIMZ7mkhMf49_88dq6eITJUU1W6TkJAG_Z5ivFQeqBKrKBkztwYch9fEYRNw/exec',
  others: 'https://script.google.com/macros/s/AKfycbz3J4V8z6jlUDzcQ4GjALYLG3cE0CMOYq_08NcejLkz58-SZ1qjHyN4jKWCHzRsQDS-Lg/exec',
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

  // Contact form
  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      countryCode: '+91', // Default to India
      mobile: '',
      website: 'https://',
      company: '',
      city: '',
      numberOfRooms: '',
      averageRoomRate: '',
      revenueImpactAreas: '',
      bookingSource: '',
      banquetEnquiries: '',
      restaurantDiscoverable: '',
      otherChallenges: '',
    },
  })

  const onContactFormSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const formData = new URLSearchParams()
      
      // Append all form values to FormData
      Object.keys(values).forEach((key) => {
        const value = values[key as keyof typeof values]
        if (value !== undefined && value !== null) {
          // Combine country code and mobile for the mobile field
          if (key === 'mobile') {
            const fullMobile = `${values.countryCode}${value}`
            formData.append('mobile', fullMobile)
          } else if (key !== 'countryCode') {
            formData.append(key, value)
          }
        }
      })

      // Add querydate
      formData.append('querydate', new Date().toLocaleString())

      await fetch('https://script.google.com/macros/s/AKfycbxyI7nnv-_LLoATEARfaH60saFHHBpYi7koyXcTftVqD4UrUsWKE6GFYorYDFDt1zs3GA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      })

      setSubmitStatus({ type: 'success', message: 'Thank you! Your form has been submitted successfully.' })
      
      // Reset form to default values
      contactForm.reset({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+91',
        mobile: '',
        website: 'https://',
        company: '',
        city: '',
        numberOfRooms: '',
        averageRoomRate: '',
        revenueImpactAreas: '',
        bookingSource: '',
        banquetEnquiries: '',
        restaurantDiscoverable: '',
        otherChallenges: '',
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' })
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Initialize Zoho form functions
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).addAriaSelected1833590000044323165 = function() {
        var optionElem = (event as any).target;
        var previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
        if (previousSelectedOption) {
          previousSelectedOption.removeAttribute('aria-selected');
        }
        optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
      };
      
      (window as any).validateEmail1833590000044323165 = function() {
        var form = document.forms.namedItem('WebToLeads1833590000044323165') as HTMLFormElement | null;
        if (!form) return true;
        var emailFld = form.querySelectorAll('[data-ftype=email]');
        var i;
        for (i = 0; i < emailFld.length; i++) {
          var emailVal = (emailFld[i] as HTMLInputElement).value;
          if ((emailVal.replace(/^\s+|\s+$/g, '')).length != 0) {
            var atpos = emailVal.indexOf('@');
            var dotpos = emailVal.lastIndexOf('.');
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
              alert('Please enter a valid email address. ');
              (emailFld[i] as HTMLInputElement).focus();
              return false;
            }
          }
        }
        return true;
      };
      
      (window as any).checkMandatory1833590000044323165 = function() {
        var mndFileds = new Array('Company', 'First Name', 'Last Name', 'Email', 'Mobile', 'City', 'LEADCF7', 'LEADCF8', 'LEADCF22', 'LEADCF24', 'LEADCF25', 'LEADCF26', 'LEADCF28');
        var fldLangVal = new Array('Company', 'First Name', 'Last Name', 'Email', 'Mobile', 'City', 'Average Room Rate', 'No. of Rooms', 'Any other challenges', 'Do you receive banquet / wedding enquiries online?', 'Most of your room bookings come from', 'Is your restaurant discoverable online?', 'Which areas are impacting your revenue today?');
        for (var i = 0; i < mndFileds.length; i++) {
          var formElement = document.forms.namedItem('WebToLeads1833590000044323165') as HTMLFormElement | null;
          if (!formElement) continue;
          var fieldObj = formElement.elements.namedItem(mndFileds[i]) as HTMLInputElement | HTMLSelectElement | null;
          if (fieldObj) {
            if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
              if (fieldObj.type == 'file') {
                alert('Please select a file to upload.');
                fieldObj.focus();
                return false;
              }
              alert(fldLangVal[i] + ' cannot be empty.');
              fieldObj.focus();
              return false;
            }
            else if (fieldObj.nodeName == 'SELECT') {
              var selectField = fieldObj as HTMLSelectElement;
              if (selectField.options[selectField.selectedIndex].value == '-None-') {
                alert(fldLangVal[i] + ' cannot be none.');
                fieldObj.focus();
                return false;
              }
            }
            else if (fieldObj.type == 'checkbox') {
              if (fieldObj.checked == false) {
                alert('Please accept  ' + fldLangVal[i]);
                fieldObj.focus();
                return false;
              }
            }
            try {
              if (fieldObj.name == 'Last Name') {
                var name = fieldObj.value;
              }
            }
            catch (e) { }
          }
        }
        if (!(window as any).validateEmail1833590000044323165()) {
          return false;
        }
        var urlparams = new URLSearchParams(window.location.search);
        if (urlparams.has('service') && (urlparams.get('service') === 'smarturl')) {
          var webform = document.getElementById('webform1833590000044323165');
          var service = urlparams.get('service');
          var smarturlfield = document.createElement('input');
          smarturlfield.setAttribute('type', 'hidden');
          smarturlfield.setAttribute('value', service || '');
          smarturlfield.setAttribute('name', 'service');
          webform?.appendChild(smarturlfield);
        }
        var submitBtn = document.querySelector('.crmWebToEntityForm .formsubmit');
        if (submitBtn) {
          (submitBtn as HTMLInputElement).setAttribute('disabled', 'true');
        }
        return true;
      };
    }
  }, [])

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      website: '',
      businessType: '',
      majorFocus: [],
      painArea: [],
    },
    mode: 'onBlur',
  })

  const businessType = form.watch('businessType')

  // Clear errors when business type changes
  React.useEffect(() => {
    if (businessType) {
      // Clear business-specific field errors when switching types
      const businessSpecificFields = [
        'collegeName', 'majorFocus', 'currentDigitalMarketing', 'challenges', 'firstCompetitor', 'secondCompetitor',
        'monthlyMarketingBudget', 'paidMarketingBudget', 'turnover', 'expectation',
        'hotelName', 'numberOfRooms', 'averageRoomRate', 'painArea',
        'industry', 'businessName',
        'company',
        'majorFocusTravel', 'willingToSpend', 'expectedROI'
      ]
      businessSpecificFields.forEach((field: string) => {
        form.clearErrors(field as keyof FormData)
      })
    }
  }, [businessType, form])

  // Helper function to convert array fields to comma-separated strings
  const formatFormData = (data: FormData): Record<string, string> => {
    const formatted: Record<string, string> = {}
    
    // Add querydate (current date)
    formatted.querydate = new Date().toISOString()
    
    // Process all fields
    Object.keys(data).forEach((key) => {
      const value = data[key as keyof FormData]
      
      if (Array.isArray(value)) {
        // Convert array to comma-separated string
        formatted[key] = value.join(', ')
      } else if (value !== undefined && value !== null) {
        // Convert to string
        formatted[key] = String(value)
      } else {
        // Empty string for undefined/null values
        formatted[key] = ''
      }
    })
    
    return formatted
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Get the appropriate Google Sheets URL based on business type
      const sheetsUrl = GOOGLE_SHEETS_URLS[data.businessType as keyof typeof GOOGLE_SHEETS_URLS]
      
      if (!sheetsUrl) {
        throw new Error('Invalid business type')
      }

      // Format the data for Google Sheets
      const formattedData = formatFormData(data)

      // Create form data for submission
      const formData = new URLSearchParams()
      Object.keys(formattedData).forEach((key) => {
        formData.append(key, formattedData[key])
      })

      // Submit to Google Sheets
      const response = await fetch(sheetsUrl, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requires no-cors
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      })

      // Since we're using no-cors, we can't read the response
      // But we'll assume success if no error is thrown
      setSubmitStatus({ 
        type: 'success', 
        message: 'Form submitted successfully! We will get back to you soon.' 
      })
      
      // Reset form after successful submission
      form.reset()
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' })
      }, 5000)

    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to submit form. Please try again later.' 
      })
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' })
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-white" id="form-section">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column - Form (2/3 width) */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <p className="text-sm tracking-widest uppercase mb-4" style={{ color: '#f24045' }}>
                // CONTACT
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4">
              Every Hotel Has Hidden <em>Revenue Gaps</em> — Let’s Find Yours
              </h2>
              <p className="text-black text-lg">
                Fill in the blanks and support will be on it's way.
              </p>
            </div>
            
            {/* Contact Form */}
            <Form {...contactForm}>
              <form onSubmit={contactForm.handleSubmit(onContactFormSubmit)} className="space-y-6">
                {/* First Name and Last Name */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={contactForm.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={contactForm.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email and Mobile */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={contactForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="space-y-2">
                    <FormLabel>Mobile <span className="text-red-500">*</span></FormLabel>
                    <div className="flex gap-2">
                      <FormField
                        control={contactForm.control}
                        name="countryCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Code" />
                                </SelectTrigger>
                                <SelectContent className="max-h-[300px]">
                                  {countryCodes.map((country) => (
                                    <SelectItem key={country.code} value={country.code}>
                                      <span className="flex items-center gap-2">
                                        <span>{country.flag}</span>
                                        <span>{country.code}</span>
                                      </span>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={contactForm.control}
                        name="mobile"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input type="tel" placeholder="Mobile Number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                {/* Website */}
                <FormField
                  control={contactForm.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input type="url" placeholder="Website" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Company and City */}
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={contactForm.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hotel Name <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Hotel Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={contactForm.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* No. of Rooms and Average Room Rate */}
                <div className="grid md:grid-cols-2 gap-6 cs-btn-w-full">
                  <FormField
                    control={contactForm.control}
                    name="numberOfRooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>No. of Rooms <span className="text-red-500">*</span></FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select No. of Rooms" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="None">None</SelectItem>
                            <SelectItem value="1-30 Rooms">1-30 Rooms</SelectItem>
                            <SelectItem value="31-75 Rooms">31-75 Rooms</SelectItem>
                            <SelectItem value="More than 75 Rooms">More than 75 Rooms</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={contactForm.control}
                    name="averageRoomRate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Average Room Rate <span className="text-red-500">*</span></FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Average Room Rate" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="None">None</SelectItem>
                            <SelectItem value="Below 3000">Below 3000</SelectItem>
                            <SelectItem value="3000-5000">3000-5000</SelectItem>
                            <SelectItem value="5000 Above">5000 Above</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Revenue Impact Areas and Booking Source */}
                <div className="grid md:grid-cols-2 gap-6 cs-btn-w-full">
                  {/* Which areas are impacting your revenue today? */}
                  <FormField
                    control={contactForm.control}
                    name="revenueImpactAreas"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Which areas are impacting your revenue today? <span className="text-red-500">*</span></FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Rooms not filling at desired rates">Rooms not filling at desired rates</SelectItem>
                            <SelectItem value="Too much dependency on OTAs">Too much dependency on OTAs</SelectItem>
                            <SelectItem value="Banquet/wedding enquiries not converting">Banquet/wedding enquiries not converting</SelectItem>
                            <SelectItem value="Very few online banquet enquiries">Very few online banquet enquiries</SelectItem>
                            <SelectItem value="F&B not visible beyond in-house guests">F&B not visible beyond in-house guests</SelectItem>
                            <SelectItem value="Spa/experiences not selling online">Spa/experiences not selling online</SelectItem>
                            <SelectItem value="Website traffic but low bookings">Website traffic but low bookings</SelectItem>
                            <SelectItem value="Social media looks good but no business">Social media looks good but no business</SelectItem>
                            <SelectItem value="Launching/re-launching hotel">Launching/re-launching hotel</SelectItem>
                            <SelectItem value="No proper follow-up system">No proper follow-up system</SelectItem>
                            <SelectItem value="All of the above">All of the above</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Most of your room bookings come from */}
                  <FormField
                    control={contactForm.control}
                    name="bookingSource"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Most of your room bookings come from <span className="text-red-500">*</span></FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="-None-">-None-</SelectItem>
                            <SelectItem value="Mostly OTAs">Mostly OTAs</SelectItem>
                            <SelectItem value="Balanced OTA + Direct">Balanced OTA + Direct</SelectItem>
                            <SelectItem value="Mostly Direct">Mostly Direct</SelectItem>
                            <SelectItem value="Not sure">Not sure</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Banquet Enquiries and Restaurant Discoverability */}
                <div className="grid md:grid-cols-2 gap-6 cs-btn-w-full">
                  {/* Do you receive banquet / wedding enquiries online? */}
                  <FormField
                    control={contactForm.control}
                    name="banquetEnquiries"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Do you receive banquet / wedding enquiries online? <span className="text-red-500">*</span></FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="-None-">-None-</SelectItem>
                            <SelectItem value="Yes, regularly">Yes, regularly</SelectItem>
                            <SelectItem value="Occasionally">Occasionally</SelectItem>
                            <SelectItem value="Rarely/Not at all">Rarely/Not at all</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Is your restaurant discoverable online? */}
                  <FormField
                    control={contactForm.control}
                    name="restaurantDiscoverable"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Is your restaurant discoverable online? <span className="text-red-500">*</span></FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="-None-">-None-</SelectItem>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="Somewhat">Somewhat</SelectItem>
                            <SelectItem value="No/Not sure">No/Not sure</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Any other challenges */}
                <FormField
                  control={contactForm.control}
                  name="otherChallenges"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Any other challenges</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Any other challenges" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit and Reset Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-[#f24045] text-white font-bold hover:bg-[#d6363a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                  <button
                    type="button"
                    onClick={() => contactForm.reset()}
                    className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-colors"
                  >
                    Reset
                  </button>
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div className={`p-4 rounded ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </Form>
            
          </div>

          {/* Right Column - Image (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="relative h-full min-h-[500px]">
              <img
                src="/professional-indian-businessman-founder-portrait-i.jpg"
                alt="Contact Support"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm 
