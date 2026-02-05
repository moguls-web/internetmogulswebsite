# Career Form - Complete Setup Guide (Hosting Upload)

## Summary

Resume files are now uploaded to your **hosting server's public directory** (`public/resumes/`) instead of Google Drive. The public URL is then saved in Google Sheets.

## File Upload Flow

1. User fills form and uploads resume (PDF/DOC/DOCX, max 4MB)
2. File is validated (type and size)
3. File is uploaded to `/api/upload-resume` endpoint
4. File is saved to `public/resumes/` directory
5. Public URL is returned (e.g., `/resumes/2024-01-15T14-30-25_resume.pdf`)
6. Form data + resume URL is submitted to Google Sheets
7. Google Sheets saves all data including the resume URL

## File Storage

- **Location**: `public/resumes/` directory on your server
- **Public Access**: Files are accessible via `https://yoursite.com/resumes/[filename]`
- **File Naming**: `YYYY-MM-DDTHH-mm-ss_OriginalFileName.pdf`
- **Auto-created**: Directory is created automatically on first upload

## Google Sheets Column Headers

Create your Google Sheet with these columns in **Row 1**:

```
positionTitle | department | name | email | phone | city | state | currentCTC | expectedCTC | joinDate | resumeUrl | skillSet | timestamp
```

## Updated Apps Script

The Apps Script is now simplified - it only receives the `resumeUrl` and saves it. No file handling needed.

**File**: `CAREER_FORM_APPS_SCRIPT_COMPLETE.js`

Key changes:
- Removed all Google Drive file upload code
- Now just receives `resumeUrl` parameter
- Saves the URL directly to Google Sheets

## Setup Steps

### 1. Update Google Apps Script

1. Open your Google Apps Script editor
2. Copy the code from `CAREER_FORM_APPS_SCRIPT_COMPLETE.js`
3. Replace your existing code
4. Run `intialSetup()` function once
5. Redeploy as Web App

### 2. Verify API Route

The API route at `app/api/upload-resume/route.ts` is already created and should work automatically.

### 3. Create Resumes Directory (Optional)

The directory is created automatically, but you can create it manually:

```bash
mkdir -p public/resumes
```

### 4. Set Permissions (Production)

On your production server, ensure the directory is writable:

```bash
chmod 755 public/resumes
```

### 5. Test the Form

1. Fill out the form with a test resume
2. Submit the form
3. Check `public/resumes/` - file should appear
4. Check Google Sheets - `resumeUrl` should have the public URL
5. Click the URL to verify file is accessible

## File URLs

Files will be accessible at:
- **Full URL**: `https://yoursite.com/resumes/2024-01-15T14-30-25_resume.pdf`
- **Relative URL**: `/resumes/2024-01-15T14-30-25_resume.pdf`

The form automatically uses the full URL when saving to Google Sheets.

## Important Notes

1. **Public Access**: Files in `public/resumes/` are publicly accessible via direct URL
2. **File Validation**: Only PDF, DOC, DOCX files under 4MB are accepted
3. **Unique Names**: Timestamps prevent duplicate file names
4. **No Google Drive**: Files are NOT uploaded to Google Drive anymore
5. **Server Storage**: Files are stored on your hosting server

## Troubleshooting

### Files Not Uploading
- Check server write permissions for `public/resumes/`
- Check Next.js server logs for errors
- Verify file is under 4MB and correct type

### Files Not Accessible
- Verify file exists in `public/resumes/` directory
- Check file permissions
- Verify the URL format is correct

### URL Not Saving
- Check Apps Script execution logs
- Verify `resumeUrl` column exists in Google Sheet
- Check form submission in browser console

