import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { roster } from '../../data/roster';

export const Mannschaft = () => {
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
