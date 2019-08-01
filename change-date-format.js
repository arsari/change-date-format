/**
 * This script transform an array of dates
 * in the format YYYY-MM-DD, MM-DD-YYYY or
 * DD-MM-YYYY in an standard date format of
 * YYYYMMDD
 *
 * @author Arturo Santiago-Rivera
 * @version 1.0.190731
 */

function changeDateFormat(dates) {
  newFormat = [];

  for (date in dates) {
    if (dates[date].includes('-') || dates[date].includes('/')) {
      if (dates[date].includes('-')) {
        parts = dates[date].split('-');
      } else if (dates[date].includes('/')) {
        parts = dates[date].split('/');
      }

      if (parts[0].length >= 4) {
        if (parts[1] < 12) {
          newDate = parts[0] + parts[1] + parts[2];
        } else {
          newDate = parts[0] + parts[2] + parts[1];
        }
      } else if (parts[0] > 12) {
        newDate = parts[2] + parts[1] + parts[0];
      } else {
        newDate = parts[2] + parts[0] + parts[1];
      }
    } else {
      newDate = dates[date];
    }
    newFormat.push(newDate);
  }

  return newFormat;
}

// === main code ===
var dates = changeDateFormat(["2010/03/30", "15/12/2016", "11-15-2012", "20130720"]); // array of dates to change

for (index = 0; index < dates.length; ++index) {
  console.log(dates[index]);
}
