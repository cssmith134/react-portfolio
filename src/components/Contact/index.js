import React, {useState} from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact(props) {
    const [formState, setFormState] =useState ({name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            console.log('Submit form', formState);
        }
    };
    const handleChange = (e) => {
        if (e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            }else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value});
            console.log('Handle Form', formState);
        }
    }
    return (
        <section>
         <h1 data-testid="h1tag">Contact Me</h1>
         <form className='contact-form' onSubmit={handleSubmit}>
             <div className='name'>
                 <label  htmlFor='name'>Name:</label>
                 <input type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
             </div>
             <div className='email'>
                <label  htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
             </div>
             <div className='message'>
                <label  htmlFor="message">Message:</label>
                 <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
             </div>
             {errorMessage && (
                 <div>
                     <p className="error-text">{errorMessage}</p>
                 </div>
             )}

             <button data-testid="button" type="submit">Submit</button>
         </form>
        </section>
    );
}

export default Contact;