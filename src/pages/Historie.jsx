import { div } from 'framer-motion/client'
import React from 'react'
import HistorieFoto from '../assets/historie.jpg'

export const Historie = () => {
    return (
        <div className='has-background-black-bis bebas-neue-regular'>
            <div className="container mx-auto p-5">
                <h1 className="title is-1 has-text-centered mb-6 has-text-white">Die Geschichte des KSV Amtshainersdorf</h1>

                <div className="columns is-vcentered mb-6">
                    <div className="column is-half">
                        <figure className="image is-4by3">
                            <img
                                src={HistorieFoto}
                                alt="Equipo en 1950"
                                className="has-ratio"
                                style={{ objectFit: "fill" }}
                            />
                        </figure>
                    </div>
                    <div className="column is-half">
                        <div className="content">
                            <h2 className="title is-3  has-text-white-ter ">Wer Wir Sind?</h2>
                            <p className="is-size-5has-text-grey-lighter">
                                Wer wir sind

                                Nach dem Ende des Zweiten Weltkrieges wurde der Fußballsport unter schwierigen Bedingungen wiederbelebt. In Amtshainersdorf, damals noch eine eigenständige Gemeinde, gründete sich der Sportverein Amtshainersdorf. Mit seiner ersten Mannschaft trat der Verein in der 2. Kreisklasse an. Auf dem kleinen Sportplatz hatten es die Gastmannschaften oft schwer, Erfolge zu erzielen.

                                1950 musste jedoch die aktive Teilnahme am Ligabetrieb eingestellt werden. Durch die Eingemeindung wechselten die meisten aktiven Spieler zum Verein in Sebnitz. Die übrigen Mitglieder blieben jedoch dem KSV treu und hielten ihn als Kultur- und Sportverein am Leben.

                                In den darauffolgenden Jahren entstand unter anderem der Bau des Sportlerheims, welches bis heute ein Herzstück des Vereins darstellt. Der KSV wird seit seiner Gründung durch die Leidenschaft und das Engagement seiner Mitglieder getragen und gelebt. Auch heute steht der Verein für Zusammenhalt, Tradition und die Liebe zum Sport.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
