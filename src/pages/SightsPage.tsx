import { useState } from "react"

import schoenbrunn from "../images/schoenbrunn.jpg"
import mountains from "../images/mountains.jpg"
import wolfgangsee from "../images/wolfgangsee.jpg"

function StarRating({ initial = 4 }: { initial?: number }) {

    const [rating, setRating] = useState(initial)

    return (
        <div className="rating">

            {[1,2,3,4,5].map((star) => (
                <span
                    key={star}
                    onClick={() => setRating(star)}
                    className={star <= rating ? "star active" : "star"}
                >
          ★
        </span>
            ))}

        </div>
    )
}

export default function SightsPage() {

    return (
        <div className="page">

            <h1>Sehenswürdigkeiten</h1>
            <p>Entdecke historische Orte in ganz Österreich</p>

            <div className="cards-grid">


                {/* SCHÖNBRUNN */}

                <div className="place-card">

                    <img src={schoenbrunn} className="place-image"/>

                    <div className="place-content">

                        <div className="place-header">
                            <h3>Schloss Schönbrunn</h3>
                            <span className="place-type">Museum</span>
                        </div>

                        <StarRating initial={5} />

                        <p className="place-location">
                            📍 Schönbrunner Schloßstraße 47, Wien
                        </p>

                        <p className="place-description">
                            Ehemalige Sommerresidenz der Habsburger mit großem Schlosspark.
                        </p>

                    </div>

                </div>


                {/* WOLFGANGSEE VIEW */}

                <div className="place-card">

                    <img src={mountains} className="place-image"/>

                    <div className="place-content">

                        <div className="place-header">
                            <h3>Wolfgangsee Aussichtspunkt</h3>
                            <span className="place-type">Natur</span>
                        </div>

                        <StarRating initial={4} />

                        <p className="place-location">
                            📍 St. Wolfgang, Salzburg
                        </p>

                        <p className="place-description">
                            Fantastischer Blick über den Wolfgangsee und die Alpen.
                        </p>

                    </div>

                </div>


                {/* WOLFGANGSEE BOAT */}

                <div className="place-card">

                    <img src={wolfgangsee} className="place-image"/>

                    <div className="place-content">

                        <div className="place-header">
                            <h3>Bootsfahrt Wolfgangsee</h3>
                            <span className="place-type">Natur</span>
                        </div>

                        <StarRating initial={4} />

                        <p className="place-location">
                            📍 St. Gilgen, Salzburg
                        </p>

                        <p className="place-description">
                            Eine entspannte Bootsfahrt auf einem der schönsten Seen Österreichs.
                        </p>

                    </div>

                </div>


                {/* HISTORIC VIENNA */}

                <div className="place-card">

                    <img src={schoenbrunn} className="place-image"/>

                    <div className="place-content">

                        <div className="place-header">
                            <h3>Historisches Wien Zentrum</h3>
                            <span className="place-type">Altstadt</span>
                        </div>

                        <StarRating initial={5} />

                        <p className="place-location">
                            📍 Stephansplatz, Wien
                        </p>

                        <p className="place-description">
                            UNESCO Weltkulturerbe mit beeindruckender Architektur.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}