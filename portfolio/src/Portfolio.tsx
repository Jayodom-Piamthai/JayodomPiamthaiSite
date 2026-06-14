// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import AboutMe from "./components/screenCard/aboutMe"
import FullStack from "./components/screenCard/fullStack"
import FullStackSelf from "./components/screenCard/fullStack1"
import FullStackEssilor from "./components/screenCard/fullStack5"
import FullStack2 from "./components/screenCard/fullStack2"
import FullStack3 from "./components/screenCard/fullStack3"
import FullStackTumor from "./components/screenCard/fullStack4"
import LogoText from "./components/screenCard/logoText"
// import Security from "./components/screenCard/Security"
import Ai from "./components/screenCard/ai"
import End from "./components/screenCard/endCard"
import './portfolio.css'
function Portfolio() {
    return(
        <div className="fodder">
            <div/>
            <LogoText/>
            <AboutMe/>
            <FullStack/>
            {/* <FullStackSelf/> */}
            <FullStackEssilor/>
            <FullStackTumor/>
            <FullStack2/>
            <FullStack3/>
            {/* <Security/> */}
            <Ai/>
            <End/>
        </div>
    )
}

export default Portfolio