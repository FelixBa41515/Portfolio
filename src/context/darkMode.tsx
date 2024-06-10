import {createContext} from 'react'

interface DarkModeProps {
    dark?: boolean
    toggleTheme?: () => void
}

export const DarkMode = createContext<DarkModeProps>({
    dark: false,
    toggleTheme: (): void => {
        console.warn('An implementation for this method has not been provided.')
    },
})
