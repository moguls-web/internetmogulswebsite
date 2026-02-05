# Google Sheets Field Names - Business Type Wise

This document lists all form field names organized by business type for Google Sheets integration.

## Common Fields (All Business Types)
These fields are present in all forms regardless of business type:

1. **firstName** - First Name
2. **lastName** - Last Name
3. **email** - Email Address
4. **phone** - Phone Number
5. **website** - Website URL
6. **businessType** - Type Of Business (education, hotel, others, real-estate, travel)

---

## 1. EDUCATION Category Fields

### Common Fields (6 fields)
- firstName
- lastName
- email
- phone
- website
- businessType

### Education-Specific Fields (10 fields)
- **collegeName** - Name of the College/School
- **majorFocus** - Major Focus (array - can have multiple values: Social Media Marketing, Search Engine Marketing, Pay Per Click, Website Development, Others)
- **monthlyMarketingBudget** - What is your Monthly Marketing Budget
- **paidMarketingBudget** - Paid Marketing Budget
- **turnover** - What is your current Turnover (Annually)?
- **expectation** - What is your expectation from digital marketing agency
- **currentDigitalMarketing** - Who is handling your current Digital Marketing?
- **challenges** - Do share the challenges you faced in last 1 year?
- **firstCompetitor** - Your First Competitor
- **secondCompetitor** - Your Second Competitor

### Total Fields for Education: 16 fields

---

## 2. HOTEL Category Fields

### Common Fields (6 fields)
- firstName
- lastName
- email
- phone
- website
- businessType

### Hotel-Specific Fields (4 fields)
- **hotelName** - Your Hotel
- **numberOfRooms** - No. Of Rooms
- **averageRoomRate** - Average Room Rate
- **painArea** - Pain Area (array - can have multiple values: Direct Business, New Website, FNB Sale, Launch New Hotel, Banquet Sale, Social Media Not Performing, OTAs are not performing, All of the above)

### Total Fields for Hotel: 10 fields

---

## 3. OTHERS Category Fields

### Common Fields (6 fields)
- firstName
- lastName
- email
- phone
- website
- businessType

### Others-Specific Fields (10 fields)
- **industry** - Please specify your industry
- **businessName** - Name of the Business
- **majorFocus** - Major Focus (array - can have multiple values: Social Media Marketing, Search Engine Marketing, Pay Per Click, Website Development, Others)
- **monthlyMarketingBudget** - What is your Monthly Marketing Budget
- **paidMarketingBudget** - Paid Marketing Budget
- **turnover** - What is your current Turnover (Annually)?
- **expectation** - What is your expectation from digital marketing agency
- **currentDigitalMarketing** - Who is handling your current Digital Marketing?
- **challenges** - Do share the challenges you faced in last 1 year?
- **firstCompetitor** - Your First Competitor
- **secondCompetitor** - Your Second Competitor

### Total Fields for Others: 16 fields

---

## 4. REAL ESTATE Category Fields

### Common Fields (6 fields)
- firstName
- lastName
- email
- phone
- website
- businessType

### Real Estate-Specific Fields (10 fields)
- **company** - Company
- **majorFocus** - Major Focus (array - can have multiple values: Social Media Marketing, Search Engine Marketing, Pay Per Click, Website Development, Others)
- **monthlyMarketingBudget** - What is your Monthly Marketing Budget
- **paidMarketingBudget** - Paid Marketing Budget
- **turnover** - What is your current Turnover (Annually)?
- **expectation** - What is your expectation from digital marketing agency
- **currentDigitalMarketing** - Who is handling your current Digital Marketing?
- **challenges** - Do share the challenges you faced in last 1 year?
- **firstCompetitor** - Your First Competitor
- **secondCompetitor** - Your Second Competitor

### Total Fields for Real Estate: 16 fields

---

## 5. TRAVEL Category Fields

### Common Fields (6 fields)
- firstName
- lastName
- email
- phone
- website
- businessType

### Travel-Specific Fields (8 fields)
- **businessName** - Name of the Business
- **majorFocusTravel** - Major Focus (Domestic, Inbound, Outbound)
- **painArea** - Pain Area (array - can have multiple values: Branding, Lead Generation, Others)
- **monthlyMarketingBudget** - What is your Monthly Marketing Budget
- **paidMarketingBudget** - Paid Marketing Budget
- **willingToSpend** - How much you are willing to spend on Digital Marketing on a monthly basis?
- **expectedROI** - What Return on Investment you are expecting from Digital Marketing?
- **currentDigitalMarketing** - Who is handling your current Digital Marketing?
- **challenges** - Do share the challenges you faced in last 1 year?

### Total Fields for Travel: 14 fields

---

## Google Sheets Column Headers Setup

### Recommended Column Order for Each Sheet:

#### Education Sheet Columns:
```
firstName | lastName | email | phone | website | businessType | collegeName | majorFocus | monthlyMarketingBudget | paidMarketingBudget | turnover | expectation | currentDigitalMarketing | challenges | firstCompetitor | secondCompetitor | timestamp
```

#### Hotel Sheet Columns:
```
firstName | lastName | email | phone | website | businessType | hotelName | numberOfRooms | averageRoomRate | painArea | timestamp
```

#### Others Sheet Columns:
```
firstName | lastName | email | phone | website | businessType | industry | businessName | majorFocus | monthlyMarketingBudget | paidMarketingBudget | turnover | expectation | currentDigitalMarketing | challenges | firstCompetitor | secondCompetitor | timestamp
```

#### Real Estate Sheet Columns:
```
firstName | lastName | email | phone | website | businessType | company | majorFocus | monthlyMarketingBudget | paidMarketingBudget | turnover | expectation | currentDigitalMarketing | challenges | firstCompetitor | secondCompetitor | timestamp
```

#### Travel Sheet Columns:
```
firstName | lastName | email | phone | website | businessType | businessName | majorFocusTravel | painArea | monthlyMarketingBudget | paidMarketingBudget | willingToSpend | expectedROI | currentDigitalMarketing | challenges | timestamp
```

---

## Notes for Google Sheets Integration:

1. **Array Fields**: Fields like `majorFocus` and `painArea` are arrays. You can either:
   - Store them as comma-separated strings (e.g., "Social Media Marketing, Pay Per Click")
   - Store them in separate columns
   - Use JSON format

2. **Timestamp**: Add a timestamp column to track when the form was submitted

3. **Data Types**:
   - All text fields are strings
   - Array fields should be converted to strings (comma-separated or JSON)
   - businessType values: "education", "hotel", "others", "real-estate", "travel"

4. **Field Value Mappings**:
   - **majorFocus**: "Social Media Marketing", "Search Engine Marketing", "Pay Per Click", "Website Development", "Others"
   - **painArea (Hotel)**: "Direct Business", "New Website", "FNB Sale", "Launch New Hotel", "Banquet Sale", "Social Media Not Performing", "OTAs are not performing", "All of the above"
   - **painArea (Travel)**: "Branding", "Lead Generation", "Others"
   - **majorFocusTravel**: "Domestic", "Inbound", "Outbound"

