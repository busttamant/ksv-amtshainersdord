import React from 'react'
import { } from "module"
import '../styles/App.css'
import { Link, useNavigate } from 'react-router-dom'
import path from 'path';
import KSV6 from '../assets/KSV6.jpg'
import KSV8 from '../assets/KSV8.jpg'
import KSV7 from '../assets/KSV7.jpg'
import Facebok from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'

export const Home = () => {

    // hook para navegacion interna
    const navigate = useNavigate();

    // funcion para cambiar la pagina 
    function cambiarPagina(path) {

        navigate(path)
    }


    return (
        <section className="hero has-background-black-bis bebas-neue-regular mp-4 " >
            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title  has-text-centered is-size-3 has-text-white">Willkommen beim KSV Amtshainersdorf</p>
                    <p className="subtitle has-text-centered has-text-grey">Willkommen auf der Webseite unseres Fußballvereins! Schön, dass Sie hier sind. Entdecken Sie aktuelle News, Spieltermine und alles rund um unser Team. Viel Spaß beim Stöbern!
                    </p>

                </div>
            </div>

            <div className="columns is-centered mt-4">
                <div className="column is-one-third">
                    <a className="is-block has-text-centered ">
                        <figure className="image is-1by1 mi-img mx-auto">
                            <img
                                src={KSV6}
                                alt="SpielPlan"
                                onClick={() => cambiarPagina("/spielplan")}
                                className="is-rounded mi-img"
                            />
                        </figure>
                        <div className='mt-4'>
                            <Link to="/spielplan" className="subtitle has-text-white">SpielPlan</Link>
                        </div>
                    </a>
                </div>
                <div className="column is-one-third">
                    <a className="is-block has-text-centered">
                        <figure className="image is-1by1 mi-img mx-auto">
                            <img
                                src={KSV8}
                                alt="Mannschaft"
                                onClick={() => cambiarPagina("/mannschaft")}
                                className="is-rounded mi-img "

                            />
                        </figure>
                        <div className='mt-4'>
                            <Link to="/mannschaft" className="subtitle has-text-white">Mannschaft</Link>
                        </div>
                    </a>
                </div>
                <div className="column is-one-third">
                    <a className="is-block has-text-centered">
                        <figure className="image is-1by1 mi-img mx-auto">
                            <img
                                src={KSV7}
                                alt="Nächste Spiele"
                                onClick={() => cambiarPagina("/historie")}
                                className="is-rounded mi-img"
                            />
                        </figure>
                        <div className='mt-4'>
                            <Link to="/historie" className=" subtitle has-text-white">Historie</Link>
                        </div>
                    </a>
                </div>
            </div>



            <div className="column has-text-centered " style={{ padding: "80px" }}>
                <div className="content">
                    <h3 className="title is-3  has-text-white" >Folge uns</h3>
                    <div className="buttons is-centered">
                        <a href="https://www.facebook.com/KSVAmtshainersdorf/?locale=de_DE" target="_blank" rel="noopener noreferrer">
                            <figure className="image mx-auto efecto">
                                <img src={Facebok} />
                            </figure>
                        </a>
                        <a href=" https://www.instagram.com/ksv_amtshainersdorf/" target="_blank" rel="noopener noreferrer">
                            <figure className="image mx-auto efecto">
                                <img src={Instagram} />
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </section >

    );
};

