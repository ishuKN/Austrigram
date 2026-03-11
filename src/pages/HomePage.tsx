import { useState } from "react"

import schnitzel from "../images/schnitzel.jpg"
import mountains from "../images/mountains.jpg"
import coffee from "../images/coffee.jpg"
import schoenbrunn from "../images/schoenbrunn.jpg"
import wolfgangsee from "../images/wolfgangsee.jpg"

type Props = {
    setPage: (page: string) => void
}

/* STAR RATING COMPONENT */

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

export default function HomePage({ setPage }: Props) {

    return (
        <div className="page">

            <h1>Willkommen bei AustriaGram</h1>

            <p>
                Entdecke die schönsten Orte, das beste Essen und spannende Aktivitäten
                in Österreich
            </p>


            {/* DAILY RECOMMENDATIONS */}

            <h2>Tägliche Empfehlungen</h2>

            <div className="cards-grid">


                {/* SCHNITZEL */}

                <div className="place-card">

                    <img src={schnitzel} className="place-image"/>

                    <div className="place-content">

                        <div className="place-header">
                            <h3>Wiener Schnitzel bei Figlmüller</h3>
                            <span className="place-type">Restaurant</span>
                        </div>

                        <StarRating initial={4} />

                        <p className="place-location">
                            📍 Wollzeile 5, Wien
                        </p>

                        <p className="place-description">
                            Das berühmteste Schnitzel Wiens im historischen Restaurant.
                        </p>

                    </div>

                </div>


                {/* WOLFGANGSEE HIKE */}

                <div className="place-card">

                    <img src={mountains} className="place-image"/>

                    <div className="place-content">

                        <div className="place-header">
                            <h3>Wanderung am Wolfgangsee</h3>
                            <span className="place-type">Natur</span>
                        </div>

                        <StarRating initial={5} />

                        <p className="place-location">
                            📍 St. Wolfgang, Salzburg
                        </p>

                        <p className="place-description">
                            Atemberaubende Aussicht auf den See und die Berge.
                        </p>

                    </div>

                </div>


                {/* CAFE SACHER */}

                <div className="place-card">

                    <img src={coffee} className="place-image"/>

                    <div className="place-content">

                        <div className="place-header">
                            <h3>Café Sacher</h3>
                            <span className="place-type">Café</span>
                        </div>

                        <StarRating initial={4} />

                        <p className="place-location">
                            📍 Philharmonikerstraße 4, Wien
                        </p>

                        <p className="place-description">
                            Genieße die berühmte Sachertorte im traditionellen Wiener Café.
                        </p>

                    </div>

                </div>


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
                            Ehemalige Sommerresidenz der Habsburger mit wunderschönem Park.
                        </p>

                    </div>

                </div>


                {/* WOLFGANGSEE BOAT */}

                <div className="place-card">

                    <img src={wolfgangsee} className="place-image"/>

                    <div className="place-content">

                        <div className="place-header">
                            <h3>Bootsfahrt Wolfgangsee</h3>
                            <span className="place-type">Aktivität</span>
                        </div>

                        <StarRating initial={4} />

                        <p className="place-location">
                            📍 St. Gilgen, Salzburg
                        </p>

                        <p className="place-description">
                            Entspanne bei einer Bootsfahrt auf einem der schönsten Seen Österreichs.
                        </p>

                    </div>

                </div>

            </div>



            {/* EXPLORE AUSTRIA */}

            <h2 style={{marginTop:"40px"}}>Erkunde Österreich</h2>

            <div className="cards-grid">

                <div className="category-card" onClick={() => setPage("sights")}>

                    <h3>📍 Sehenswürdigkeiten</h3>

                    <p>
                        Entdecke historische Orte
                    </p>

                </div>


                <div className="category-card" onClick={() => setPage("food")}>

                    <h3>🍽 Essen & Trinken</h3>

                    <p>
                        Beste Restaurants & Cafés
                    </p>

                </div>


                <div className="category-card" onClick={() => setPage("activities")}>

                    <h3>✨ Aktivitäten</h3>

                    <p>
                        Spannende Erlebnisse
                    </p>

                </div>

            </div>

        </div>
    )
}