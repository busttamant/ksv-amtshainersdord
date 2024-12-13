import React from 'react'
import { motion } from 'framer-motion';
export const SpielPlan = () => {


    // Datos de Partidos
    const partidos = [
        { fecha: "03.05.2024", hora: "18:30", localVisitante: "Auswärts", oponente: "SV Hinterhermsdorf", resultado: "3 : 3" },
        { fecha: "31.05.2024", hora: "18:30", localVisitante: "Auswärts", oponente: "SV Wampe Pirna", resultado: "0 : 7" },
        { fecha: "14.06.2024", hora: "18:30", localVisitante: "Heim", oponente: "FV Rugiswalde", resultado: "1 : 1" },
        { fecha: "29.06.2024", hora: "17:00", localVisitante: "Heim", oponente: "Chemie Dohna", resultado: "- abgesagt -" },
        { fecha: "19.07.2024", hora: "18:30", localVisitante: "Heim", oponente: "SV Ottendorf", resultado: "4 : 5" },
        { fecha: "16.08.2024", hora: "18:30", localVisitante: "Heim", oponente: "SV Hinterhermsdorf", resultado: "3 : 4" },
        { fecha: "24.08.2024", hora: "15:00", localVisitante: "Auswärts", oponente: "SV Königstein II.", resultado: "3 : 1" },
        { fecha: "06.09.2024", hora: "18:00", localVisitante: "Heim", oponente: "FV Rugiswalde", resultado: "7 : 1" },
        { fecha: "27.09.2024", hora: "18:30", localVisitante: "Auswärts", oponente: "Chemie Dohna", resultado: "1 - 1" },
        { fecha: "11.10.2024", hora: "18:30", localVisitante: "Auswärts", oponente: "SV Ottendorf", resultado: "3 - 2" },
        { fecha: "25.10.2024", hora: "19:30", localVisitante: "Auswärts", oponente: "SV Moritzburg", resultado: "2- 1" },
        { fecha: "09.11.2024", hora: "18:30", localVisitante: "Auswärts", oponente: "BSV 68 Sebnitz Ü32", resultado: "3-1" }
    ];


    // Datos de Entrenamientos
    const entrenamientos = [
        { periodo: "Marzo 2024 - Abril 2024", hora: "18:00 - 20:00", lugar: "Ulbersdorf" },
        { periodo: "Mayo 2024 - Octubre 2024", hora: "18:00", lugar: "Ulbersdorf" }
    ];

    return (
        <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}>
            <div className=' bebas-neue-regular pt-5 ' >
                <h1 className="title has-text-centered has-text-white ">Ergebnisse</h1>


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
                        {partidos.map((partido, index) => (
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
            </div>
        </motion.div>
    )
}
