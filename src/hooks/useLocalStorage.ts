import { useCallback, useState } from 'react';

export const useLocalStorage = <T = unknown>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      /* Get from local storage by key */
      const item = window.localStorage.getItem(key);
      /* Parse stored json or if none return initialValue */
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      /* If error also return initialValue */
      return initialValue;
    }
  });

  /**
   * Return a wrapped version of useState's setter function that
   * persists the new value to localStorage.
   */
  const setValue = useCallback(
    (value: T) => {
      try {
        /* Allow value to be a function so we have same API as useState */
        // const valueToStore = value instanceof Function ? value(storedValue) : value;
        /* Save state */
        setStoredValue(value);
        /* Save to local storage */
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.warn(error);
      }
    },
    [setStoredValue, key],
  );

  return [storedValue, setValue];
};
