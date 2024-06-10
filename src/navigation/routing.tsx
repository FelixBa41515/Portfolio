import {FunctionComponent} from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/home/home.tsx'
import Experience from '../pages/experience.tsx'

import Contact from '../pages/contact/contact.tsx'


import PageNotFound from '../pages/pageNotFound.tsx'
import AboutMe from '../pages/aboutMe/aboutMe.tsx'


interface RoutingProps {

}

const Routing: FunctionComponent<RoutingProps> = () => {
    return (
        <div>

        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/experience'} element={<Experience/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
            <Route path={'/skills'} element={<AboutMe/>}/>
            <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
        </div>
    )
}

export default Routing
