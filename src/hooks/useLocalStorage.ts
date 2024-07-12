import { useState, useEffect } from "react";

const useLocalStorage = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    return () => {
      localStorage.setItem(key, storedValue);
    };
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
};

export default useLocalStorage;
