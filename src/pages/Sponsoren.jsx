import React from 'react'
import imgSponsor1 from "../assets/MertinsSponsor.jpg"
import imgSponsor2 from "../assets/FliesenSponsor.png"
import { motion } from 'framer-motion'

export const Sponsoren = () => {
    return (
        <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}>
            <div className=' bebas-neue-regular'>
                <div className="container">
                    <section className="section">
                        <h1 className="title is-1 has-text-centered has-text-white">Unsere Sponsoren</h1>

                        <div className="columns is-centered">
                            <div className="column is-one-third">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img src={imgSponsor1} alt="Sponsor 1" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <p className="title is-4">André Mertins</p>
                                        <p className="subtitle is-6"> bietet professionelle Maler-, Tapezier- und Bodenlegearbeiten an, inklusive Beratung und Farbgestaltung.</p>
                                        <p className='subtitle is-6'>Kontakt</p>
                                        <a href='tel:+4915730837551'>+49 157 30837551</a> <br />
                                        <a href='https://maps.app.goo.gl/pi89c8Np9WRXPJM38' target='_blank'>Bergstraße 44 01855 Sebnitz </a>
                                        <a></a>
                                    </div>

                                </div>
                            </div>

                            <div className="column is-one-third">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3 ">
                                            <img
                                                src={imgSponsor2}
                                                alt="Sponsor 2"
                                            />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <p className="title is-4">Sven Hartrampf Fliesenlegermeister
                                        </p>
                                        <p className="subtitle is-6">bietet präzise, hochwertige Fliesenarbeiten für Küchen, Bäder und Böden an  perfekt für Renovierungen und Neubauten.</p>
                                        <p className='subtitle is-6'>Kontakt</p>
                                        <a href='tel:035971-83942'>035971-83942</a> <br />
                                        <a href='https://maps.app.goo.gl/uc8oredptRuC2XUMA' target='_blank'>Lange Str. 63, 01855 Sebnitz</a>
                                        <a></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </motion.div>
    )
}
