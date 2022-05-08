import React from 'react';

function Resume(props) {
    return (
        <section className='resume'>
           <h1>Resume</h1>
           <p>Download my resume</p>
           <h2>Front-end Proficincies</h2>
           <ul>
               <li>
                   HTML
               </li>
               <li>
                   CSS
               </li>
               <li>
                   javascript
               </li>
               <li>
                   jQuery
               </li>
               <li>
                   responsive design
               </li>
               <li>
                   React
               </li>
               <li>
                   bootstrap
               </li>
           </ul>
           <h2>Back-end Proficincies</h2>
           <ul>
               <li>
                   API's
               </li>
               <li>
                   Node
               </li>
               <li>
                   Express
               </li>
               <li>
                   MySQL Sequelize
               </li>
               <li>
                   MongoDB, Mongoose
               </li>
               <li>
                   REST
               </li>
               <li>
                   GraphQL
               </li>
           </ul>
           </section>
    );
}

export default Resume;