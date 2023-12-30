  // get single item from session storage

  export function getSessionItem(key) {
    try {
      const item = sessionStorage.getItem(key);
      return JSON.parse(item);
    } catch (error) {
      console.error('Error getting item from session storage:', error);
      return null;
    }
  }
  
  // Set an item in session storage
  export function setSessionItem(key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      sessionStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error setting item in session storage:', error);
    }
  }
  
  // Clear all items from session storage
  export function clearSessionStorage() {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error('Error clearing session storage:', error);
    }
  }

    // remove single item from session storage
  export function removeSessionItem(key) {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from session storage:', error);
    }
  }
