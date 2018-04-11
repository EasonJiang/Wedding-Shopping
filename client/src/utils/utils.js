export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    if (isQuotaExceeded(e)) {
      // Storage full, maybe notify user or do some clean-up
    }
  }
}

function isQuotaExceeded(e) {  
  var quotaExceeded = false;
  if (e) {
    if (e.code) {
      switch (e.code) {
        case 22:
          quotaExceeded = true;
          break;
        case 1014:
          // Firefox
          if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
            quotaExceeded = true;
          }
          break;
      }
    } else if (e.number === -2147024882) {
      // Internet Explorer 8
      quotaExceeded = true;
    }
  }
  return quotaExceeded;
}