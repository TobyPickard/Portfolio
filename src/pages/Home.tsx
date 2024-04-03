// import { useState } from 'react'
import TopNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "./About";
import ListProjects from "./ListProjects";
import Hello from "./Hello";

function Home() {
    return (
        <>
            <TopNavbar />
            <Hello />
            <About />
            <ListProjects />

            <Footer />
        </>
    )
}

export default Home;
