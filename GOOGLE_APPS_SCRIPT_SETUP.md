# Google Apps Script Setup for Each Business Type Sheet

## Instructions

1. Open your Google Sheet for each business type
2. Go to **Extensions** → **Apps Script**
3. Copy and paste the appropriate script below for each sheet
4. Update the `sheetName` variable to match your sheet name
5. Run the `intialSetup` function once to set up the script
6. Deploy the script as a web app:
   - Click **Deploy** → **New deployment**
   - Choose type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**
   - Copy the Web App URL and use it in your form

---

## 1. Education Sheet Script

```javascript
var sheetName = 'Education'
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

    var newRow = headers.map(function(header) {
      return header === 'querydate' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```

### Education Sheet Column Headers (Row 1):
```
firstName | lastName | email | phone | website | businessType | collegeName | majorFocus | monthlyMarketingBudget | paidMarketingBudget | turnover | expectation | currentDigitalMarketing | challenges | firstCompetitor | secondCompetitor | querydate
```

---

## 2. Hotel Sheet Script

```javascript
var sheetName = 'Hotel'
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

    var newRow = headers.map(function(header) {
      return header === 'querydate' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```

### Hotel Sheet Column Headers (Row 1):
```
firstName | lastName | email | phone | website | businessType | hotelName | numberOfRooms | averageRoomRate | painArea | querydate
```

---

## 3. Real Estate Sheet Script

```javascript
var sheetName = 'Real Estate'
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

    var newRow = headers.map(function(header) {
      return header === 'querydate' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```

### Real Estate Sheet Column Headers (Row 1):
```
firstName | lastName | email | phone | website | businessType | company | majorFocus | monthlyMarketingBudget | paidMarketingBudget | turnover | expectation | currentDigitalMarketing | challenges | firstCompetitor | secondCompetitor | querydate
```

---

## 4. Travel Sheet Script

```javascript
var sheetName = 'Travel'
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

    var newRow = headers.map(function(header) {
      return header === 'querydate' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```

### Travel Sheet Column Headers (Row 1):
```
firstName | lastName | email | phone | website | businessType | businessName | majorFocusTravel | painArea | monthlyMarketingBudget | paidMarketingBudget | willingToSpend | expectedROI | currentDigitalMarketing | challenges | querydate
```

---

## 5. Others Sheet Script

```javascript
var sheetName = 'Others'
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

    var newRow = headers.map(function(header) {
      return header === 'querydate' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```

### Others Sheet Column Headers (Row 1):
```
firstName | lastName | email | phone | website | businessType | industry | businessName | majorFocus | monthlyMarketingBudget | paidMarketingBudget | turnover | expectation | currentDigitalMarketing | challenges | firstCompetitor | secondCompetitor | querydate
```

---

## Important Notes:

1. **Sheet Names**: Make sure the `sheetName` variable matches exactly with your Google Sheet tab name (case-sensitive)

2. **Column Headers**: The first row of each sheet must contain the exact column headers as listed above (case-sensitive)

3. **Initial Setup**: Run the `intialSetup()` function once for each script to store the spreadsheet ID

4. **Deployment**: 
   - Deploy each script as a Web App
   - Set "Execute as" to "Me"
   - Set "Who has access" to "Anyone"
   - Copy the Web App URL and update it in the form code if needed

5. **Array Fields**: Fields like `majorFocus` and `painArea` will be saved as comma-separated strings (e.g., "Social Media Marketing, Pay Per Click")

6. **Query Date**: The `querydate` column will automatically be filled with the current date/time when a form is submitted

7. **Testing**: Test each form submission to ensure data is being saved correctly to the respective sheets

