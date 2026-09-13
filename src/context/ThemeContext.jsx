import { createContext, useContext, useMemo } from 'react'

// The site currently ships a single orange & white theme. This context
// exists as a seam for a future dark mode without reshaping components.
const ThemeContext = createContext({ theme: 'orange-white' })

export function ThemeProvider({ children }) {
  const value = useMemo(() => ({ theme: 'orange-white' }), [])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
