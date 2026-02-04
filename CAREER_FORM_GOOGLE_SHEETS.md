# Career Application Form - Google Sheets Integration

## Google Sheets Column Headers

Create a Google Sheet with the following column headers in Row 1:

```
positionTitle | department | name | email | phone | city | state | currentCTC | expectedCTC | joinDate | resumeUrl | skillSet | querydate
```

### Field Descriptions:

- **positionTitle** - The job position title (e.g., "Client Servicing", "Social Media Manager")
- **department** - Selected department from the form
- **name** - Applicant's full name
- **email** - Applicant's email address
- **phone** - Applicant's phone number
- **city** - Applicant's city
- **state** - Applicant's state
- **currentCTC** - Current Cost to Company (salary)
- **expectedCTC** - Expected Cost to Company (salary)
- **joinDate** - How soon the applicant can join
- **resumeUrl** - Google Drive URL of the uploaded resume file
- **skillSet** - Applicant's skills (text area)
- **querydate** - Automatic timestamp when form is submitted

---

## Google Apps Script for File Upload & Google Sheets

### Setup Instructions:

1. Open your Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Copy and paste the script below
4. Update the `sheetName` variable to match your sheet name
5. Update the `folderId` variable with your Google Drive folder ID (optional - for organizing files)
6. Run the `intialSetup` function once
7. Deploy as Web App:
   - Click **Deploy** → **New deployment**
   - Choose type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**
   - Copy the Web App URL

### Google Apps Script Code:

```javascript
var sheetName = 'Career Applications'
var folderId = '' // Optional: Google Drive folder ID where files will be stored. Leave empty to store in root.
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
  
  // If you want to use a specific folder, create it and get its ID
  // var folder = DriveApp.createFolder('Resume Uploads')
  // Logger.log('Folder ID: ' + folder.getId())
  // Then paste the folder ID in the folderId variable above
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    // Handle file upload
    var resumeUrl = ''
    if (e.parameter.resumeFile && e.parameter.resumeFileName) {
      try {
        // Decode base64 file
        var fileBlob = Utilities.newBlob(
          Utilities.base64Decode(e.parameter.resumeFile),
          e.parameter.resumeFileType || 'application/pdf',
          e.parameter.resumeFileName
        )
        
        // Get folder (if specified) or root
        var folder = folderId ? DriveApp.getFolderById(folderId) : DriveApp.getRootFolder()
        
        // Create file in Drive
        var file = folder.createFile(fileBlob)
        
        // Set file permissions to "Anyone with the link can view"
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW)
        
        // Get file URL
        resumeUrl = file.getUrl()
      } catch (fileError) {
        Logger.log('File upload error: ' + fileError.toString())
        resumeUrl = 'Error uploading file: ' + fileError.toString()
      }
    }

    // Map headers to form data
    var newRow = headers.map(function(header) {
      if (header === 'querydate') {
        return new Date()
      } else if (header === 'resumeUrl') {
        return resumeUrl
      } else {
        return e.parameter[header] || ''
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

---

## Google Drive Folder Setup (Optional but Recommended)

1. Go to Google Drive
2. Create a new folder named "Resume Uploads" (or any name you prefer)
3. Right-click the folder → **Share** → Set to "Anyone with the link can view"
4. Copy the folder ID from the URL:
   - URL format: `https://drive.google.com/drive/folders/FOLDER_ID_HERE`
   - Copy the `FOLDER_ID_HERE` part
5. Paste it in the `folderId` variable in the script

---

## File Upload Notes:

- **Supported formats**: PDF, DOC, DOCX (as specified in the form)
- **File size limit**: Google Apps Script has a 6MB limit for file uploads
- **File permissions**: Files are automatically set to "Anyone with the link can view"
- **File naming**: Files are saved with the original filename
- **Storage location**: Files are stored in Google Drive, URL is saved in the sheet

---

## Testing:

1. Fill out the form with a test resume file
2. Submit the form
3. Check your Google Sheet - data should appear in a new row
4. Check the `resumeUrl` column - it should contain a Google Drive link
5. Click the link to verify the file uploaded correctly

