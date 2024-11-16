import React from 'react'
import { useState } from 'react'
import { FaFutbol, FaBowlingBall, FaUsers, FaTrophy, FaCalendarAlt } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const MitgliedWerden = () => {


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



    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        { title: 'Über uns', icon: <FaUsers /> },
        { title: 'Aktivitäten', icon: <FaFutbol /> },
        { title: 'Kontakt', icon: <FaCalendarAlt /> },
    ]

    return (
        <div className='has-background-black-bis bebas-neue-regular'>
            <div className="container">
                <section className="section">
                    <h1 className="title is-1 has-text-centered has-text-white">Mitmachen beim KSV Amtshainersdorf</h1>
                    <p className="subtitle is-4 has-text-centered">
                        Werde noch heute ein Teil unserer Gemeinschaft!
                    </p>

                    <div className="tabs is-centered is-boxed">
                        <ul>
                            {tabs.map((tab, index) => (
                                <li key={index} className={activeTab === index ? 'is-active' : ''}>
                                    <a onClick={() => setActiveTab(index)}>
                                        <span className="icon is-small">{tab.icon}</span>
                                        <span>{tab.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="content">
                        {activeTab === 0 && (
                            <div className="box">
                                <h2 className="title is-4">Über uns</h2>
                                <p>
                                    Suchst du einen Verein, in welchem du dich gerne einbringen möchtest? Du hast spannende Ideen, die DU mit uns teilen möchtest? Du spielst gerne Fußball oder kegelst gerne?
                                </p>
                                <p className="has-text-weight-bold">
                                    Dann bist du bei uns genau richtig! Bei uns ist für jeden was dabei - egal ob jung oder alt!
                                </p>
                            </div>
                        )}

                        {activeTab === 1 && (
                            <div className="box ">
                                <h2 className="title is-4">Unsere Aktivitäten</h2>
                                <div className="columns is-multiline">
                                    <div className="column is-half">
                                        <div className="notification efecto-caja">
                                            <p className="is-size-5"><FaFutbol /> Fußball jeden Montag und nach Absprache</p>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="notification efecto-caja-naranja">
                                            <p className="is-size-5"><FaTrophy /> Teilnahme an Turnieren</p>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="notification efecto-caja-naranja">
                                            <p className="is-size-5"><FaCalendarAlt /> Heim- und Auswärtsspiele</p>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="notification efecto-caja ">
                                            <p className="is-size-5"><FaBowlingBall /> Mitgliederkegeln 1x im Monat</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="has-text-centered is-size-5">
                                    Nette Mitglieder von jung bis alt
                                </p>
                            </div>
                        )}

                        {activeTab === 2 && (
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
                                            <button className="button efecto-caja" type='submit' value="Send">Absenden</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div >
    )
}