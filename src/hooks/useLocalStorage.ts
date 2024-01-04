import { useState, useEffect } from "react";

const getStorageValue = <T>(key: string, defaultValue: T) => {
  const saved = localStorage.getItem(key);
  const initial: T = JSON.parse(saved || '');
  return initial || defaultValue;
}

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
    const [value, setValue] = useState<T>(() => {
      return getStorageValue<T>(key, defaultValue);
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  };
