import React from 'react';
import RunBuddy from '../../assets/run-buddy.png';
import Travels from '../../assets/travelmap.jpg';
import Voltage from '../../assets/voltage.png';
function Portfolio(props) {
    return (
        <section>
            <div className="m-5 ">
                <h1>Welcome to my work!</h1>
             </div>
             <div className='row contact-form'>
                 <div className='column'>
                    <a href="https://cssmith134.github.io/run-buddy/"><img src={RunBuddy} alt=''  className='port-img'></img></a>
                    <a href="https://github.com/cssmith134/run-buddy" class="fa fa-github" ></a>
                </div>
                <div className='column'>
                <a href="https://hannahhan153.github.io/group-project/"><img src={Travels} alt="Travelrs Covid Guide" className='port-img'></img></a>
                <a href="https://github.com/hannahhan153/Travelers" class="fa fa-github"></a>
                </div>
                <div className='column'>
                 <a href="https://guitar-shop-group-project.herokuapp.com/"><img src={Voltage} alt="projects" className='port-img'></img></a> 
                 <a href="https://github.com/hannahhan153/Guitar-Shop" class="fa fa-github"></a>
                </div>
             </div>
        </section>
       
    );
}

export default Portfolio;