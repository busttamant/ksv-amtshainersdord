import React from 'react';
import img from "../assets/favicon.png";
import { useNavigate } from 'react-router-dom';

export const Footer = () => {

    const navigate = useNavigate();

    function cambiarPagina(path) {

        navigate(path)
        console.log("click")
    }



    return (
        <footer className="footer has-background-black-bis bebas-neue-regular">
            <div className="container">
                <div className="columns is-vcentered">

                    {/* Columna izquierda */}
                    <div className="column">
                        <div className="content">
                            <h3 className="title is-4 has-text-white">Kontakt</h3>
                            <ul className="has-text">
                                <p>Adresse</p>
                                <p>Kultur-Sportverein Amtshainersdorf</p>
                                <a href='https://maps.app.goo.gl/S1oSNjkYG54uw8RG7' target='_blank' >Hohnsteiner Straße 7A , Sebnitz</a>
                            </ul>
                        </div>
                    </div>

                    {/* Columna central (Logo) */}
                    <div className="column is-one-quarter has-text-centered">
                        <figure className="image is-128x128 mx-auto">
                            <img className='efecto'
                                src={img}
                                alt="Logo del equipo"
                                width={128}
                                height={128}
                                onClick={() => cambiarPagina("/")}
                                style={{ cursor: "pointer" }} // Agregar cursor de puntero


                            />
                        </figure>
                    </div>

                    {/* Columna derecha */}
                    <div className="column has-text-right">
                        <div className="content">
                            <h3 className="title is-4 has-text-white">Kontakt</h3>
                            <ul className="has-text-grey">
                                <a href='mailto:amtshainerksv@gmail.com'  >amtshainerksv@gmail.com</a>
                                <p>Kultur-Sportverein Amtshainersdorf</p>

                            </ul>
                        </div>
                    </div>

                </div>

                {/* Derechos de autor */}
                <div className="has-text-centered mt-3 has-text-white">
                    <p>&copy; {new Date().getFullYear()} KSV Amtshainersdorf. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
