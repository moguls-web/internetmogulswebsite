# Career Form - Troubleshooting resumeUrl Not Saving

## Quick Fix Checklist

### 1. Verify Apps Script Code
Make sure your Apps Script has the **file upload handling code**. The basic script you provided doesn't handle files. Use the complete script from `CAREER_FORM_APPS_SCRIPT_COMPLETE.js`.

### 2. Check Google Sheet Column Headers
Your Google Sheet **Row 1** must have exactly these columns (case-sensitive):
```
positionTitle | department | name | email | phone | city | state | currentCTC | expectedCTC | joinDate | resumeUrl | skillSet | timestamp
```

**Important**: The column must be named `resumeUrl` (not `resume` or `resumeURL`)

### 3. Verify Sheet Name
The sheet tab name must be exactly: `CareerFormData` (case-sensitive)

### 4. Check Apps Script Logs
1. Go to your Apps Script editor
2. Click **Executions** in the left menu
3. Look for the latest execution
4. Check the logs for:
   - "File uploaded successfully: [URL]" - means file upload worked
   - "No file data received" - means file wasn't sent from form
   - Any error messages

### 5. Test the Script
1. In Apps Script, click **Run** on the `doPost` function
2. Check for any authorization prompts
3. Check the execution log for errors

### 6. Redeploy the Script
After updating the Apps Script:
1. Click **Deploy** → **Manage deployments**
2. Click the pencil icon (✏️) to edit
3. Click **New version**
4. Click **Deploy**
5. Make sure the URL matches: `https://script.google.com/macros/s/AKfycbygAasKhlifho1i9Rplahmy2he9I3VAQeKBHfhcMATug-5BLa5xUcXTfNDI9OGhmofclg/exec`

## Common Issues

### Issue 1: resumeUrl column is empty
**Solution**: 
- Check if the Apps Script has the file upload code (lines 34-59 in the complete script)
- Verify the column name is exactly `resumeUrl`

### Issue 2: File not uploading
**Solution**:
- Check file size (must be under 4MB)
- Check file type (must be PDF, DOC, or DOCX)
- Check Apps Script logs for errors

### Issue 3: "No file data received" in logs
**Solution**:
- Verify the form is sending `resumeFile`, `resumeFileName`, and `resumeFileType` parameters
- Check browser console for any errors when submitting

### Issue 4: Column mismatch error
**Solution**:
- Count your columns - should be exactly 12 columns
- Make sure column headers match exactly (including case)
- No extra spaces in column names

## Testing Steps

1. **Test with a small PDF file** (under 1MB)
2. **Submit the form**
3. **Check Google Sheet** - new row should appear
4. **Check `resumeUrl` column** - should have a Google Drive link
5. **Click the link** - should open the uploaded file
6. **Check Apps Script Executions** - should show "File uploaded successfully"

## If Still Not Working

1. Copy the complete script from `CAREER_FORM_APPS_SCRIPT_COMPLETE.js`
2. Replace ALL code in your Apps Script editor
3. Run `intialSetup()` function
4. Redeploy as Web App
5. Test again

