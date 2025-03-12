import React from 'react'
import { motion } from 'framer-motion';
export const SpielPlan = () => {


    // Datos de Partidos
    const partidos2024 = [
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
        { fecha: "25.10.2024", hora: "19:30", localVisitante: "Auswärts", oponente: "SV Moritzburg", resultado: "1- 2" },
        { fecha: "09.11.2024", hora: "18:30", localVisitante: "Auswärts", oponente: "BSV 68 Sebnitz Ü32", resultado: "1-3" }
    ];

    const partidos2025 = [
        { fecha: "19.04.2025", hora: "15:00", localVisitante: "Auswärts", oponente: "SV Königstein", resultado: "" },
        { fecha: "02.05.2025", hora: "18:30", localVisitante: "Auswärts", oponente: "SV Hinterhermsdorf", resultado: "" },
        { fecha: "23.05.2025", hora: "18:30", localVisitante: "Heim", oponente: "SV Ottendorf", resultado: "" },
        { fecha: "06.06.2025", hora: "18:30", localVisitante: "Heim", oponente: "Chemie Dohna", resultado: "" },
        { fecha: "13.06.2025", hora: "18:30", localVisitante: "Heim", oponente: "FV Rugiswalde", resultado: "" },
        { fecha: "28.06.2025", hora: "17:00", localVisitante: "Heim", oponente: "SV Borea Freiberg", resultado: "" },
        { fecha: "25.07.2025", hora: "18:30", localVisitante: "Heim", oponente: "SV Königstein", resultado: "" },
        { fecha: "01.08.2025", hora: "18:30", localVisitante: "Auswärts", oponente: "Ulbersdorf", resultado: "" },
        { fecha: "22.08.2025", hora: "18:30", localVisitante: "Heim", oponente: "SV Hinterhermsdorf", resultado: "" },
        { fecha: "05.09.2025", hora: "18:00", localVisitante: "Auswärts", oponente: "FV Rugiswalde", resultado: "" },
        { fecha: "12.09.2025", hora: "18:30", localVisitante: "Auswärts", oponente: "Chemie Dohna", resultado: "" },
        { fecha: "26.09.2025", hora: "18:30", localVisitante: "Auswärts", oponente: "SV Ottendorf", resultado: "" },
        { fecha: "10.10.2025", hora: "19:30", localVisitante: "Auswärts", oponente: "SV Moritzburg", resultado: "" },
        { fecha: "24.10.2025", hora: "18:30", localVisitante: "Auswärts", oponente: "BSV Sebnitz Ü32", resultado: "" }
    ];

    const torneos = [
        { fecha: "01.02.2025", hora: "19:00", ort: "Neustadt", resultado: "3. Platz" },
        { fecha: "01.03.2025", hora: "14:00", ort: "Hinterhermsdorf", resultado: "5. Platz" },
        { fecha: "16.08.2025", hora: "10:00", ort: "Rugiswald", resultado: "" },
        { fecha: "30.08.2025", hora: "09:30", ort: "Hinterhermsdorf", resultado: "" }

    ]

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
                                <td className='has-text-grey'>{partido.ort}</td>
                                <td className='has-text-grey'>{partido.resultado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    )
}
