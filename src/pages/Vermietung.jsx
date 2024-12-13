import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Feld from '../assets/feld.jpg'
import Hauptsaal from '../assets/hauptsaal.jpg'
import Kuche from '../assets/kuche.jpg'
import Kegelbahn from '../assets/kegelbahn.jpg'


const images = [Feld, Hauptsaal, Kuche, Kegelbahn];



export const Vermietung = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    // useEffect(() => {
    //     const timer = setInterval(nextSlide, 5000)
    //     return () => clearInterval(timer)
    // }, [])



    return (
        <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}>
            <div className=' bebas-neue-regular'>
                <div className="container mx-auto p-4">
                    <div className="columns is-vcentered">
                        <div className="column is-7">
                            <div className="box caja has-background-black-bis  ">
                                <h1 className="title is-2 has-text-white">Vermietung und buchung des Sportlerheimes </h1>
                                <p className="subtitle is-5"> Der perfekte Ort für Ihre Feier - flexibel, komfortabel und vielseitig.</p>
                                <div className="content">
                                    <p>
                                        Ob Geburtstag, Schuleingang, Jugendweihe oder Hochzeit – unser Sportlerheim bietet den idealen Rahmen für jede Veranstaltung.
                                        Erleben Sie eine unvergessliche Feier in einem einzigartigen Ambiente.
                                    </p>
                                    <ul>
                                        <li>💼 Hauptsaal mit Kapazität für bis zu 50 Personen</li>
                                        <li>🍳 Voll ausgestattete Küche</li>
                                        <li> 🎳Kegelbahn für zusätzlichen Spaß</li>
                                    </ul>

                                    <div className='subtitle is-5 has-text-white'>Ansprechpartner:</div>
                                    <p>
                                        Frau Mücklisch
                                    </p>
                                    <a href="tel:015753025290"></a>Tel: 01575 - 302 52 90

                                </div>

                            </div>
                        </div>
                        <div className="box caja p-0 is-relative" style={{ height: '600px' }}>
                            <AnimatePresence initial={false}>
                                <motion.img
                                    key={currentIndex}
                                    src={images[currentIndex]}
                                    alt={`Rental image ${currentIndex + 1}`}
                                    className="image object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </AnimatePresence>
                            <button
                                className="button is-primary is-rounded is-medium efecto-caja-naranja"
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '10px',
                                    transform: 'translateY(-50%)',
                                    zIndex: 10, // Asegura que el botón esté encima de la imagen
                                }}
                                onClick={prevSlide}
                                aria-label="Previous image"
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                className="button is-primary is-rounded is-medium efecto-caja-naranja"
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '10px',
                                    transform: 'translateY(-50%)',
                                    zIndex: 10, // Asegura que el botón esté encima de la imagen
                                }}
                                onClick={nextSlide}
                                aria-label="Next image"
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
