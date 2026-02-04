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
    
    // Log for debugging
    if (resumeUrl) {
      Logger.log('Resume URL received: ' + resumeUrl)
    } else {
      Logger.log('No resume URL provided')
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

    // Log for debugging
    Logger.log('Resume URL to save: ' + resumeUrl)

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

