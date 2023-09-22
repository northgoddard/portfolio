import React, {useState} from "react";
import '../App.css';
import About from "./about";
import Projects from "./projects";
import Navbar from "./navbar";
import Contact from "./contact";

function Page() {
    const [currentPage, setCurrentPage] = useState("About");
    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        } 
        if (currentPage === "Projects") {
            return <Projects />;
        } 
        if (currentPage === "Contact") {
            return <Contact />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="page">
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}

export default Page;