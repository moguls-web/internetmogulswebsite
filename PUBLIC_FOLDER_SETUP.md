# Public Folder Setup for Resume Uploads

## Overview

The Apps Script has been updated to automatically create and use a **public folder** named **"Resume Uploads"** for all resume file uploads.

## How It Works

1. **Automatic Folder Creation**: 
   - On first run, the script automatically creates a folder named "Resume Uploads"
   - The folder is set to **public** (Anyone with the link can view)

2. **Folder Location**:
   - Folder is created in your Google Drive root
   - Folder name: **"Resume Uploads"**
   - Folder is automatically made public

3. **File Permissions**:
   - Both the folder and individual files are set to **"Anyone with the link can view"**
   - This makes all resume files publicly accessible via their URLs

## Setup Instructions

### Step 1: Run Initial Setup

1. Open your Apps Script editor
2. Select the `intialSetup` function from the dropdown
3. Click **Run** (▶️)
4. Authorize the script when prompted
5. Check the execution log - it will show:
   - "Created public folder: Resume Uploads"
   - "Folder ID: [ID]"
   - "Folder URL: [URL]"

### Step 2: Verify Folder Creation

1. Go to your Google Drive
2. Look for a folder named **"Resume Uploads"**
3. Right-click the folder → **Share**
4. Verify it shows: "Anyone with the link can view"

### Step 3: Test File Upload

1. Submit a test form with a resume file
2. Check the "Resume Uploads" folder in Google Drive
3. The file should appear there
4. The file should be accessible to anyone with the link

## Folder Details

- **Folder Name**: Resume Uploads
- **Location**: Google Drive Root
- **Access**: Public (Anyone with the link can view)
- **Auto-created**: Yes, on first run of `intialSetup()`

## Customizing Folder Name

If you want to change the folder name:

1. In Apps Script, find line 2:
   ```javascript
   var publicFolderName = 'Resume Uploads'
   ```
2. Change it to your desired name:
   ```javascript
   var publicFolderName = 'Your Custom Folder Name'
   ```
3. Run `intialSetup()` again to create the new folder

## File Naming Convention

Files are saved with this format:
```
YYYY-MM-DD_HH-mm-ss_OriginalFileName.pdf
```

Example:
```
2024-01-15_14-30-25_JohnDoe_Resume.pdf
```

## Important Notes

- **Public Access**: Both the folder and files are set to public (Anyone with the link can view)
- **No Manual Setup Required**: The folder is created automatically
- **Persistent**: Once created, the folder ID is saved and reused
- **Security**: Files are public but only accessible via direct link (not searchable)

## Troubleshooting

### Folder Not Created
- Run `intialSetup()` function manually
- Check execution logs for errors
- Verify you have permission to create folders in Google Drive

### Files Not Appearing in Folder
- Check Apps Script execution logs
- Verify the folder ID is saved in script properties
- Try running `intialSetup()` again

### Files Not Public
- The script automatically sets files to public
- If files aren't public, check execution logs for errors
- Manually verify: Right-click file → Share → Should show "Anyone with the link can view"

