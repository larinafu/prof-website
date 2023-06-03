'use client'

import { createContext, useState } from "react"

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }: {
    children: React.ReactNode
}) {
    const [mode, setMode] = useState('light')
    return <ThemeContext.Provider value={{ mode, setMode }}>
        {children}
    </ThemeContext.Provider>;
}