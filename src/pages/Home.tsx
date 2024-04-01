// import { useState } from 'react'
import TopNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "./About";
import ListProjects from "./ListProjects";
import Contact from "./Contact"
import Hello from "./Hello";

function Home() {
    return (
        <div>
            <TopNavbar />
            <Hello />
            <About />
            <ListProjects />
            <Contact />

            <Footer />
        </div>
    )
}

export default Home;
