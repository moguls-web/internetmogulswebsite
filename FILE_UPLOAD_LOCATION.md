# Career Form - File Upload Location

## Current Upload Location

**Files are currently being uploaded to:** 
- **Google Drive Root** (My Drive) - because `folderId` is empty in the script

## How to Change Upload Location

### Option 1: Use an Existing Folder

1. **Go to Google Drive**
2. **Create or select a folder** (e.g., "Resume Uploads")
3. **Open the folder**
4. **Copy the Folder ID from the URL**:
   - URL format: `https://drive.google.com/drive/folders/FOLDER_ID_HERE`
   - Copy the `FOLDER_ID_HERE` part
5. **Update the Apps Script**:
   - Open your Apps Script editor
   - Find line 2: `var folderId = ''`
   - Change it to: `var folderId = 'YOUR_FOLDER_ID_HERE'`
   - Save and redeploy

### Option 2: Auto-Create Folder (Recommended)

1. **Open your Apps Script editor**
2. **In the `intialSetup` function**, uncomment these lines:
   ```javascript
   var folder = DriveApp.createFolder('Resume Uploads')
   Logger.log('Folder ID: ' + folder.getId())
   ```
3. **Run the `intialSetup` function once**
4. **Check the execution log** - it will show the Folder ID
5. **Copy the Folder ID** from the log
6. **Paste it in line 2**: `var folderId = 'PASTE_ID_HERE'`
7. **Comment out the folder creation lines again** (so it doesn't create duplicates)
8. **Save and redeploy**

## Example

If you want files in a folder called "Resume Uploads":

```javascript
var folderId = '1a2b3c4d5e6f7g8h9i0j' // Your actual folder ID
```

## Verify Upload Location

After updating, you can test by:

1. **Submitting a test form** with a resume file
2. **Checking Google Drive** - the file should appear in the specified folder
3. **Checking Apps Script logs** - it will show: "File uploaded successfully to folder: [Folder Name]"

## File Naming

Files are saved with this format:
```
YYYY-MM-DD_HH-mm-ss_OriginalFileName.pdf
```

Example:
```
2024-01-15_14-30-25_JohnDoe_Resume.pdf
```

This prevents duplicate file names.

## Current Status

- **Upload Location**: Google Drive Root (My Drive)
- **Folder ID**: Not set (empty)
- **To change**: Follow Option 1 or Option 2 above

