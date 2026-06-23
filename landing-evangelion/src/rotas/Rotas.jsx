import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from '../paginas/Login'
import { LandingPage } from '../paginas/Landingpage.jsx'
import { App } from '../App.jsx'

export function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <LandingPage />}/>
                <Route path='Login' element={ <Login />}/>
            </Routes>
        </BrowserRouter>
    )
}