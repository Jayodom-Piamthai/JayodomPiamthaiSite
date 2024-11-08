// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import AboutMe from "./components/screenCard/aboutMe"
import FullStack from "./components/screenCard/fullStack"
import LogoText from "./components/screenCard/logoText"
import Security from "./components/screenCard/Security"
import End from "./components/screenCard/endCard"
import './portfolio.css'
function Portfolio() {
    return(
        <div className="fodder">
            <div/>
            <LogoText/>
            <AboutMe/>
            <FullStack/>
            <Security/>
            <End/>
        </div>
    )
}

export default Portfolio