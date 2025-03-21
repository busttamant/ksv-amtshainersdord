import React from 'react'
import { motion } from 'framer-motion';
import { torneos, partidos2025 } from '../../data/spiele';


export const SpielPlan = () => {
    return (
        <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}>
            <div className=' bebas-neue-regular pt-5 ' >
                <h1 className="title has-text-centered has-text-white ">Ergebnisse</h1>
                <h2 className='subtitle has-text-centered has-text-white'> 2025 </h2>
                <table className="table is-fullwidth has-background-black-bis ">
                    <thead >
                        <tr>
                            <th className='has-text-white'>Datum</th>
                            <th className='has-text-white'>Zeit</th>
                            <th className='has-text-white'>Heim/Auswärts</th>
                            <th className='has-text-white'>Gegner</th>
                            <th className='has-text-white'>Ergebnis</th>

                        </tr>
                    </thead>
                    <tbody>
                        {partidos2025.map((partido, index) => (
                            <tr key={index}>
                                <td className='has-text-grey'>{partido.fecha}</td>
                                <td className='has-text-grey'>{partido.hora}</td>
                                <td className='has-text-grey'>{partido.localVisitante}</td>
                                <td className='has-text-grey'>{partido.oponente}</td>
                                <td className='has-text-grey'>{partido.resultado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h1 className="title has-text-centered has-text-white ">Turniere</h1>
                <h2 className='subtitle has-text-centered has-text-white'> 2025 </h2>
                <table className="table is-fullwidth has-background-black-bis  ">
                    <thead >
                        <tr>
                            <th className='has-text-white'>Datum</th>
                            <th className='has-text-white'>Zeit</th>
                            <th className='has-text-white'>Ort</th>
                            <th className='has-text-white'>Ergebnis</th>

                        </tr>
                    </thead>
                    <tbody>
                        {torneos.map((partido, index) => (
                            <tr key={index}>
                                <td className='has-text-grey'>{partido.fecha}</td>
                                <td className='has-text-grey'>{partido.hora}</td>
                                <td className='has-text-grey'>{partido.lugar}</td>
                                <td className='has-text-grey'>{partido.resultado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    )
}
