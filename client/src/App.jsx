
import './App.css'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import  HomePage  from './scenes/homePage'
import  LoginPage  from './scenes/loginPage'
import  ProfilePage  from './scenes/profilePage'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material'
import { themeSettings } from './theme'
import isAuth from ""

function App() {
  const mode = useSelector((state) => state.mode)
  const Theme = useMemo(() => createTheme(themeSettings(mode), [mode]))

  return (
    
      <div>
        <BrowserRouter>
          <ThemeProvider>
            <CssBaseline/>
              <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/home" element={isAuth ? <HomePage/> : <Navigate to="/"/>}/>
                <Route path="/profile/:userId" element={isAuth ? <ProfilePage/> : <Navigate to="/"/>}/>
              </Routes>
           
          </ThemeProvider>
        </BrowserRouter>
       
      </div>
      
    
  )
}

export default App
