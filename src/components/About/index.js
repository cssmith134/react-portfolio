import React from 'react';
import ProfileImg from '../../assets/profile-pic.jpeg'


function About(props) {
    return (
        <section>
            <h2 className='m-5'>
            About Cooper
            </h2>
            <img className='profilepic' src={ProfileImg} alt=''></img>
            
            <h3 className="m-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h3>
        </section>
    )
}

export default About;