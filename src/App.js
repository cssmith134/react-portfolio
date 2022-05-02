import React from 'react';
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Resume from './components/Resume'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import { Button } from 'react-bootstrap';

import { useState } from 'react';
import Portfolio from './components/Portfolio';

function App() {

    const [currentPage, setCurrentPage] = useState("About");

    function renderPage () {

        if(currentPage === "About") {
            return < About />

        }

        else if(currentPage === "Contact") {
            return < Contact />

        }

        else if(currentPage === "Portfolio"){
            return < Portfolio/>
        }

        else if(currentPage === "Resume") {
            return < Resume/>
        }


    }

    return (
        <div>
            <Header setCurrentPage={setCurrentPage}/>
            <main>
                {renderPage()}
            </main>
            <Footer></Footer>
            {/* <Button variant="success primary" onClick={() => {
                setCurrentPage("Contact")
            }}>Click</Button> */}
        </div>
    )

}

export default App;