import { useRef, useCallback } from 'react';

/**
 * A custom hook that provides debounced function execution
 * 
 * @param callback The function to debounce
 * @param delay The delay in milliseconds
 * @returns A debounced version of the callback
 */
export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 500
) {
  // Store the timer reference
  const timerRef = useRef<{ [key: string]: NodeJS.Timeout }>({});

  // Return a memoized version of the debounced function
  return useCallback(
    (key: string, ...args: Parameters<T>) => {
      // Clear any existing timer for this key
      if (timerRef.current[key]) {
        clearTimeout(timerRef.current[key]);
        console.log(`Debounce timer cleared for ${key}`);
      }

      // Set a new timer
      timerRef.current[key] = setTimeout(() => {
        console.log(`Executing debounced function for ${key}`);
        callback(...args);
        // Clear the timer reference
        delete timerRef.current[key];
      }, delay);

      console.log(`Debounce timer set for ${key}, delay: ${delay}ms`);
    },
    [callback, delay]
  );
}
