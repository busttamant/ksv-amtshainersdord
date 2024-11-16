import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Kontakt = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_uz74a4r', 'template_uc0saps', form.current, {
                publicKey: '3vqFyn3vguACJv9U5',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert("Vielen Dank");
                    form.current.reset(); // Limpia el formulario después de enviar
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };



    return (
        <div className='has-background-black-bis bebas-neue-regular'>
            <div className='container'>
                <section className='section'>
                    <div className="box">
                        <h2 className="title is-4">Kontakt</h2>
                        <p>
                            Wenn du mehr wissen willst, schreib uns doch einfach an oder wende dich an einen unserer Ansprechpartner! Wir freuen uns auf dich!
                        </p>
                        <form className="mt-4" ref={form} onSubmit={sendEmail}>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input" type="text" name='user_name' placeholder="Dein Name" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">E-Mail</label>
                                <div className="control">
                                    <input className="input" type="email" name='user_email' placeholder="Deine E-Mail" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Nachricht</label>
                                <div className="control">
                                    <textarea className="textarea" name='message' placeholder="Deine Nachricht an uns"></textarea>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button className="button is-link" type='submit' value="Send">Absenden</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}
