// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import AboutMe from "./components/screenCard/aboutMe"
import FullStack from "./components/screenCard/fullStack"
import FullStack2 from "./components/screenCard/fullStack2"
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
            <FullStack2/>
            <Security/>
            <End/>
        </div>
    )
}

export default Portfolio