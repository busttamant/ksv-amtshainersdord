import React, { useState } from 'react'
import { motion } from 'framer-motion';

export const Mannschaft = () => {
    const roster = {
        torwart: [
            { name: 'Steven Schlorf', position: 'Torwart', number: 1 },
            { name: 'Robert Schulz', position: 'Torwart', number: 22 },
            { name: 'Fin Herzog', position: 'Torwart', number: 99 },
            { name: 'Maik Claus', position: 'Torwart', number: 67 },

        ],
        verteidiger: [
            { name: 'Daniel Bustamante', position: 'Verteidiger', number: 16 },
            { name: 'Dan Lehmann', position: 'Verteidiger', number: 14 },
            { name: 'Jhonny Vargas', position: 'Verteidiger', number: 5 },
            { name: 'Max Kraft', position: 'Verteidiger', number: 18 },
            { name: 'Robert Einert', position: 'Verteidiger', number: 2 },
            { name: 'Max Grohmann', position: 'Verteidiger', number: 4 },
            { name: 'Lucian Schönfelder', position: 'Verteidiger', number: 48 }

        ],
        mittelfeld: [
            { name: 'Stefan Schwanitz', position: 'Zentrales Mittelfeld', number: 8 },
            { name: 'Ezra Karabacak', position: 'Offensives Mittelfeld ', number: 15 },
            { name: 'Jonas Schwarzelt', position: 'Zentrales Mittelfeld', number: 4 },
            { name: 'Xilon Schmidt', position: 'Zentrales Mittelfeld', number: 81 },
            { name: 'Arik May', position: 'Zentrales Mittelfeld', number: 14 },
            { name: 'Marvin Lux', position: 'Offensives Mittelfeld ', number: 19 },
            { name: 'Leon Schönfelder', position: 'Zentrales Mittelfeld', number: 9 },
            { name: 'Toni Hoffmann', position: 'Zentrales Mittelfeld', number: 10 },
            { name: 'Deniz Van Gablenz', position: 'Zentrales Mittelfeld', number: 7 },
        ],
        sturmer: [
            { name: 'Valentin Voigt', position: 'Stürmer', number: 13 },
            { name: 'Leon Hauswald', position: 'Stürmer', number: 12 },
            { name: 'Paul Schirman ', position: 'Stürmer', number: 19 },
            { name: 'Marlon Lange', position: 'Stürmer', number: 30 },
            { name: 'Domenik Neumann', position: 'Stürmer', number: 38 },
        ],
    };
    // Estado para manejar la visibilidad de los jugadores adicionales en cada posición
    const [expandedPositions, setExpandedPositions] = useState({});

    // Función para alternar la visibilidad de una posición
    const togglePosition = (position) => {
        setExpandedPositions((prevState) => ({
            ...prevState,
            [position]: !prevState[position],
        }));


    }
    return (
        <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}>
            <div className=' bebas-neue-regular' >
                <h1 className="title has-text-white has-text-centered" style={{ padding: 40 }}>Unsere Kader</h1>
                {Object.entries(roster).map(([position, players]) => (
                    <div key={position}>
                        <h2 className="subtitle is-4 mt-4 mb-2 has-text-white">{position.charAt(0).toUpperCase() + position.slice(1)}</h2>
                        <div className="columns is-multiline">
                            {/* Mostrar solo los primeros tres jugadores inicialmente */}
                            {(expandedPositions[position] ? players : players.slice(0, 3)).map((player) => (
                                <div key={player.number} className="column is-one-third">
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-left">
                                                    <figure className="image is-48x48">
                                                        <div className="has-background-grey-lighter has-text-centered" style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <span className="is-size-4">{player.number}</span>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="media-content">
                                                    <p className="title is-4">{player.name}</p>
                                                    <p className="subtitle is-6 naranja">{player.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Botón para alternar la visibilidad de los jugadores adicionales */}
                        {players.length > 3 && (
                            <div className="is-flex is-justify-content-center mt-3">
                                <button
                                    className="button is-normal "
                                    onClick={() => togglePosition(position)}
                                >
                                    {expandedPositions[position] ? "Weniger anzeigen" : "Mehr anzeigen"}
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
