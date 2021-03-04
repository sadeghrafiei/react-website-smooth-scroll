import React, { useState } from 'react'
import Hero from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/infoSection'
import { homeObjFive, homeObjFour, homeObjOne, homeObjSix, homeObjThree , homeObjTwo } from '../components/infoSection/Data'

const Home = () => {

    const [isOpen , setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} /> 
         <Hero />  
         <InfoSection {...homeObjOne} />
         <InfoSection {...homeObjTwo} />
         <InfoSection {...homeObjThree} />
         <InfoSection {...homeObjFour} />
         <InfoSection {...homeObjFive} />
         <InfoSection {...homeObjSix} />
        </>
    )
}

export default Home
