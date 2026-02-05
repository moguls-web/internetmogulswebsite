# Career Form - File Upload to Hosting Public Directory

## Overview

Resume files are now uploaded to your hosting server's public directory instead of Google Drive. Files are saved in `public/resumes/` and are accessible via public URLs.

## File Upload Flow

1. **User submits form** with resume file
2. **File is uploaded** to `/api/upload-resume` endpoint
3. **File is saved** to `public/resumes/` directory on your server
4. **Public URL is returned** (e.g., `https://yoursite.com/resumes/2024-01-15_14-30-25_resume.pdf`)
5. **Form data + resume URL** is submitted to Google Sheets
6. **Google Sheets saves** the resume URL (not the file)

## File Storage Location

- **Directory**: `public/resumes/`
- **Public URL**: `https://yoursite.com/resumes/[filename]`
- **File Naming**: `YYYY-MM-DDTHH-mm-ss_OriginalFileName.pdf`

## API Endpoint

**Route**: `/api/upload-resume`  
**Method**: POST  
**Content-Type**: multipart/form-data

### Request
- **Field name**: `file`
- **File types**: PDF, DOC, DOCX
- **Max size**: 4MB

### Response
```json
{
  "success": true,
  "url": "/resumes/2024-01-15T14-30-25_resume.pdf",
  "fileName": "2024-01-15T14-30-25_resume.pdf"
}
```

## Google Sheets Column Headers

Your Google Sheet should have these columns in Row 1:

```
positionTitle | department | name | email | phone | city | state | currentCTC | expectedCTC | joinDate | resumeUrl | skillSet | timestamp
```

**Note**: The `resumeUrl` column will contain the public URL to the file on your hosting server (e.g., `https://yoursite.com/resumes/filename.pdf`)

## Updated Apps Script

The Apps Script has been simplified - it no longer handles file uploads. It just receives the `resumeUrl` parameter and saves it to Google Sheets.

```javascript
var sheetName = 'CareerFormData'
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    // Get resume URL from form submission (file is already uploaded to hosting)
    var resumeUrl = e.parameter.resumeUrl || ''

    // Map headers to form data
    var newRow = headers.map(function(header) {
      if (header === 'timestamp') {
        return new Date()
      } else if (header === 'resumeUrl') {
        return resumeUrl || ''
      } else {
        var value = e.parameter[header]
        return value ? value : ''
      }
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'success', 
        'row': nextRow,
        'resumeUrl': resumeUrl 
      }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    Logger.log('Error: ' + e.toString())
    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'error', 
        'error': e.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```

## Setup Instructions

### 1. Create Resumes Directory

The API route will automatically create the `public/resumes/` directory on first upload. However, you can create it manually:

```bash
mkdir -p public/resumes
```

### 2. Set File Permissions (if needed)

On Linux/Mac servers, ensure the directory is writable:

```bash
chmod 755 public/resumes
```

### 3. Update Apps Script

1. Open your Google Apps Script editor
2. Replace the code with the simplified version above
3. Run `intialSetup()` function
4. Redeploy as Web App

### 4. Test the Upload

1. Submit a form with a resume file
2. Check `public/resumes/` directory - file should appear
3. Check Google Sheets - `resumeUrl` should contain the public URL
4. Click the URL to verify file is accessible

## File Access

Files are accessible via:
- **Full URL**: `https://yoursite.com/resumes/[filename]`
- **Relative URL**: `/resumes/[filename]`

## Security Considerations

- Files are stored in the public directory and are accessible to anyone with the URL
- Consider adding authentication if you need to restrict access
- File names include timestamps to prevent conflicts
- File types and sizes are validated before upload

## Troubleshooting

### Files Not Uploading
- Check server write permissions for `public/resumes/` directory
- Check server logs for errors
- Verify file size is under 4MB
- Verify file type is PDF, DOC, or DOCX

### Files Not Accessible
- Verify the file exists in `public/resumes/` directory
- Check file permissions (should be readable)
- Verify the public URL is correct
- Check if your hosting allows public file access

### URL Not Saving in Google Sheets
- Verify the `resumeUrl` column exists in your sheet
- Check Apps Script execution logs
- Verify the form is sending `resumeUrl` parameter

