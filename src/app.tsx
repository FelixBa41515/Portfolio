import {FunctionComponent, StrictMode, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import NavigationBar from './navigation/navigationBar.tsx'
import Routing from './navigation/routing.tsx'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import Footer from './footer.tsx'
import {DarkMode} from './context/darkMode.tsx'
import {CssBaseline} from '@mui/material'
import './app.css';

interface AppProps {

}

const App: FunctionComponent<AppProps> = () => {
    const [dark, changeTheme] = useState<boolean>()
    const toggleTheme = () => {
        changeTheme(x => !x)
    }

    const theme = createTheme({
        palette: {
            mode: dark ? 'dark' : 'light',
        },

    });


    return (

        <StrictMode>
                <DarkMode.Provider value={{dark, toggleTheme}}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                            <BrowserRouter>
                                <NavigationBar/>

                                <Routing/>
                                <Footer/>
                            </BrowserRouter>
                    </ThemeProvider>
                </DarkMode.Provider>
        </StrictMode>

    )
}

export default App
