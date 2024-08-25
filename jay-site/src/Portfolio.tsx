// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import AboutMe from "./components/screenCard/aboutMe"
import FullStack from "./components/screenCard/fullStack"
import LogoText from "./components/screenCard/logoText"
import './portfolio.css'
function Portfolio() {
    return(
        <div className="fodder">
            <div/>
            <LogoText/>
            <AboutMe/>
            <FullStack/>
        </div>
    )
}

export default Portfolio