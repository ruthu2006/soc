import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"

function F1(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>);
}
export default F1
// About
export default function About(){
    return<h1>About page</h1>
}
//Contact
export default function Contact(){
    return<h1>Contact page</h1>
}
//Home
export default function Home(){
    return<h1>Home page</h1>
}
