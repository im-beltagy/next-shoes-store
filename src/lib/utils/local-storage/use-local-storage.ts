export function isLocalStorageAvailable() {
  try {
    const key = "__random_key_you_are_not_going_to_use__";
    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

export function getLocalStorageItem(key: string) {
  let value;

  if (!!isLocalStorageAvailable()) {
    const result = window.localStorage.getItem(key);
    value = result ? result : undefined;
  }

  return value;
}

export function setLocalStorageItem(key: string, value: any) {
  if (!!isLocalStorageAvailable()) {
    window.localStorage.setItem(key, value);
  } else {
    console.warn("Local storage is not available");
  }
}

export function removeLocalStorageItem(key: string) {
  if (!!isLocalStorageAvailable()) {
    window.localStorage.removeItem(key);
  } else {
    console.warn("Local storage is not available");
  }
}
