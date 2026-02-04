# Career Application Form - Google Sheets Fields

## Complete Field List

### Google Sheets Column Headers (Row 1)

```
positionTitle | department | name | email | phone | city | state | currentCTC | expectedCTC | joinDate | resumeUrl | skillSet | timestamp
```

---

## Field Details

| Column Name | Field Type | Description | Required |
|------------|------------|-------------|----------|
| **positionTitle** | Text | Job position title (e.g., "Client Servicing", "Social Media Manager") | Yes |
| **department** | Text | Selected department from dropdown | Yes |
| **name** | Text | Applicant's full name | Yes |
| **email** | Email | Applicant's email address | Yes |
| **phone** | Text | Applicant's phone number | Yes |
| **city** | Text | Applicant's city | Yes |
| **state** | Text | Applicant's state | Yes |
| **currentCTC** | Text | Current Cost to Company (salary) | No |
| **expectedCTC** | Text | Expected Cost to Company (salary) | No |
| **joinDate** | Text | How soon the applicant can join | No |
| **resumeUrl** | URL | Google Drive URL of the uploaded resume file | Yes |
| **skillSet** | Text | Applicant's skills (multi-line text) | No |
| **timestamp** | DateTime | Automatic timestamp when form is submitted | Auto |

---

## Field Mapping from Form

| Form Field | Google Sheets Column | Notes |
|------------|---------------------|-------|
| Position Title (from selected position) | `positionTitle` | Auto-filled from selected job |
| Department (dropdown) | `department` | User selected |
| Name (input) | `name` | Text input |
| Email (input) | `email` | Email validation |
| Phone (input) | `phone` | Text input |
| City (input) | `city` | Text input |
| State (input) | `state` | Text input |
| Current CTC (input) | `currentCTC` | Optional |
| Expected CTC (input) | `expectedCTC` | Optional |
| How soon you can join (input) | `joinDate` | Optional |
| Resume (file upload) | `resumeUrl` | File uploaded to Google Drive, URL saved |
| Skill Set (textarea) | `skillSet` | Multi-line text |
| - | `timestamp` | Auto-generated timestamp |

---

## Resume File Upload Details

- **Supported Formats**: PDF, DOC, DOCX
- **Storage**: Google Drive
- **File Permissions**: "Anyone with the link can view" (automatically set)
- **Column Value**: Full Google Drive URL (e.g., `https://drive.google.com/file/d/FILE_ID/view`)
- **File Size Limit**: 4MB (enforced in form validation)

---

## Example Row Data

```
Client Servicing | Social Media Marketing | John Doe | john@example.com | +1234567890 | New York | NY | $50,000 | $60,000 | 2 weeks | https://drive.google.com/file/d/abc123/view | React, Node.js, TypeScript | 2024-01-15 10:30:00
```

---

## Setup Checklist

- [ ] Create Google Sheet with column headers in Row 1
- [ ] Set up Google Apps Script (copy from CAREER_FORM_GOOGLE_SHEETS.md)
- [ ] Create Google Drive folder for resumes (optional)
- [ ] Update `CAREER_SHEETS_URL` in open-positions.tsx with your Apps Script URL
- [ ] Test form submission with a sample resume
- [ ] Verify data appears in Google Sheet
- [ ] Verify resume file is uploaded and accessible via URL

