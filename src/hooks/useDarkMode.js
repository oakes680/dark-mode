import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

function useDarkMode(key, initialValue) {

  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  
  useEffect(() => {
    console.log(darkMode)
    darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
  }, [darkMode])

  return [darkMode, toggleMode]
  // return [darkMode, setDarkMode]
}

export default useDarkMode