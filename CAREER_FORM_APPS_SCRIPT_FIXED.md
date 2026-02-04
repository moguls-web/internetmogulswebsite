# Career Form - Fixed Google Apps Script with File Upload

## Updated Apps Script Code (Fixed for resumeUrl)

The issue was that the script needs to properly handle the base64 file data. Here's the corrected version:

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

    // Handle file upload - FIXED VERSION
    var resumeUrl = ''
    if (e.parameter.resumeFile && e.parameter.resumeFileName) {
      try {
        // Get the base64 string from parameters
        var base64Data = e.parameter.resumeFile
        
        // Decode base64 file
        var decodedBytes = Utilities.base64Decode(base64Data)
        var fileBlob = Utilities.newBlob(
          decodedBytes,
          e.parameter.resumeFileType || 'application/pdf',
          e.parameter.resumeFileName
        )
        
        // Get folder (if specified) or root
        var folder = folderId ? DriveApp.getFolderById(folderId) : DriveApp.getRootFolder()
        
        // Create file in Drive with timestamp to avoid duplicates
        var timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd_HH-mm-ss')
        var fileName = timestamp + '_' + e.parameter.resumeFileName
        var file = folder.createFile(fileBlob.setName(fileName))
        
        // Set file permissions to "Anyone with the link can view"
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW)
        
        // Get file URL
        resumeUrl = file.getUrl()
        
        // Log for debugging
        Logger.log('File uploaded successfully: ' + resumeUrl)
      } catch (fileError) {
        Logger.log('File upload error: ' + fileError.toString())
        Logger.log('Error details: ' + JSON.stringify(fileError))
        resumeUrl = 'Error: ' + fileError.toString()
      }
    } else {
      Logger.log('No file data received. resumeFile: ' + (e.parameter.resumeFile ? 'exists' : 'missing'))
      Logger.log('resumeFileName: ' + (e.parameter.resumeFileName || 'missing'))
    }

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

    // Log the row data for debugging
    Logger.log('New row data: ' + JSON.stringify(newRow))
    Logger.log('Resume URL: ' + resumeUrl)

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
    Logger.log('Error stack: ' + (e.stack || 'No stack trace'))
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

## Key Fixes:

1. **Better error handling**: Added logging to track file upload issues
2. **File naming**: Added timestamp to avoid duplicate file names
3. **Null checks**: Added checks for missing file data
4. **Better logging**: Added Logger.log statements to debug issues

---

## Debugging Steps:

1. **Check Apps Script Logs**:
   - After submitting a form, go to Apps Script
   - Click on "Executions" in the left menu
   - Check the latest execution log
   - Look for any error messages

2. **Verify Column Headers**:
   - Make sure your Google Sheet has `resumeUrl` column (case-sensitive)
   - The column should be in the exact position as shown in the headers

3. **Test File Upload**:
   - Try submitting with a small PDF file first
   - Check if the file appears in Google Drive
   - Check if the URL appears in the sheet

4. **Check File Size**:
   - Make sure the file is under 4MB
   - Very large base64 strings might cause issues

---

## Alternative: If FormData doesn't work, use URLSearchParams with encoding

If the FormData approach doesn't work due to CORS, we might need to encode the base64 string differently. Let me know if you're still having issues and I can provide an alternative solution.

