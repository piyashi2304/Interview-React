import React from "react"
import Home from "./Home"
import Student from "./Student"
import Contact from "./Contact"
import About from "./About"
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function RouterCompo(){
    return(
        <>
        <BrowserRouter>
        <Link to = "/">Home</Link>
        <Link to = "/student">Student</Link>
        <Link to = "/contact">Contact</Link>
        <Link to = "/about">About</Link>
            <Routes>
                <Route  path="/" element = {<Home />}/>
                <Route  path="/student" element = {<Student />}/>
                <Route  path="/contact" element = {<Contact />}/>
                <Route  path="/about" element = {<about />}/>
                </Routes>        
        </BrowserRouter>
        </>
    )
}
export default RouterCompo