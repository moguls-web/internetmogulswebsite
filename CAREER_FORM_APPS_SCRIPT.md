# Career Form - Google Apps Script with File Upload

## Complete Apps Script Code

Copy and paste this code into your Google Apps Script editor:

```javascript
var sheetName = 'CareerFormData'
var folderId = '' // Optional: Google Drive folder ID where files will be stored. Leave empty to store in root.
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
  
  // Optional: Create a folder for resumes and get its ID
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
      if (header === 'timestamp') {
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

## Google Sheets Column Headers

Create your Google Sheet with these column headers in **Row 1**:

```
positionTitle | department | name | email | phone | city | state | currentCTC | expectedCTC | joinDate | resumeUrl | skillSet | timestamp
```

### Field Descriptions:

- **positionTitle** - Job position title
- **department** - Selected department
- **name** - Applicant's name
- **email** - Applicant's email
- **phone** - Applicant's phone
- **city** - Applicant's city
- **state** - Applicant's state
- **currentCTC** - Current salary
- **expectedCTC** - Expected salary
- **joinDate** - How soon can join
- **resumeUrl** - Google Drive URL of uploaded resume
- **skillSet** - Applicant's skills
- **timestamp** - Auto-generated submission date/time

---

## Setup Instructions

1. **Create Google Sheet**:
   - Create a new Google Sheet
   - Name the sheet tab: `CareerFormData`
   - Add the column headers in Row 1 (as shown above)

2. **Set up Google Apps Script**:
   - Open your Google Sheet
   - Go to **Extensions** → **Apps Script**
   - Delete any existing code
   - Paste the script above
   - Save the project

3. **Run Initial Setup**:
   - Click on the `intialSetup` function in the dropdown
   - Click the **Run** button (▶️)
   - Authorize the script when prompted
   - Check the execution log to confirm it ran successfully

4. **Deploy as Web App**:
   - Click **Deploy** → **New deployment**
   - Click the gear icon (⚙️) next to "Select type"
   - Choose **Web app**
   - Set the following:
     - **Description**: Career Form Handler
     - **Execute as**: Me
     - **Who has access**: Anyone
   - Click **Deploy**
   - Copy the **Web App URL** (you should already have this: `https://script.google.com/macros/s/AKfycbygAasKhlifho1i9Rplahmy2he9I3VAQeKBHfhcMATug-5BLa5xUcXTfNDI9OGhmofclg/exec`)

5. **Optional - Set up Google Drive Folder**:
   - Go to Google Drive
   - Create a folder named "Resume Uploads"
   - Right-click the folder → **Share** → Set to "Anyone with the link can view"
   - Copy the folder ID from the URL (the long string after `/folders/`)
   - Paste it in the `folderId` variable in the script

---

## File Upload Details

- **Supported formats**: PDF, DOC, DOCX
- **Max file size**: 4MB (enforced in form validation)
- **Storage**: Google Drive
- **File permissions**: Automatically set to "Anyone with the link can view"
- **File naming**: Original filename is preserved
- **URL format**: Full Google Drive URL (e.g., `https://drive.google.com/file/d/FILE_ID/view`)

---

## Testing

1. Fill out the form with all required fields
2. Upload a PDF or DOC file (under 4MB)
3. Submit the form
4. Check your Google Sheet - a new row should appear
5. Check the `resumeUrl` column - it should contain a Google Drive link
6. Click the link to verify the file uploaded correctly

---

## Troubleshooting

- **"Script function not found: doGet"**: This is normal - we're using `doPost`, not `doGet`
- **File upload fails**: Check that the file is under 4MB and is PDF/DOC/DOCX
- **Data not saving**: Verify the sheet name matches exactly: `CareerFormData`
- **Column mismatch**: Ensure all column headers in Row 1 match exactly (case-sensitive)

