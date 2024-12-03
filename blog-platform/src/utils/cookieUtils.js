// Set a first-party cookie to store user preferences
export function setPreference(name, value) {
    document.cookie = `${name}=${value}; path=/; max-age=31536000`; // 1 year expiration
  }
  
  // Get a first-party cookie
  export function getPreference(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  