import { useState } from "react"

import mountains from "../images/mountains.jpg"
import wolfgangsee from "../images/wolfgangsee.jpg"
import schoenbrunn from "../images/schoenbrunn.jpg"

type Activity = {
    name: string
    location: string
    type: string
    season: string
    description: string
    image: string
}

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

export default function ActivitiesPage() {

    const [seasonFilter, setSeasonFilter] = useState("all")
    const [typeFilter, setTypeFilter] = useState("all")

    const activities: Activity[] = [

        {
            name: "Wanderung am Wolfgangsee",
            location: "St. Wolfgang, Salzburg",
            type: "Outdoor",
            season: "summer",
            description: "Wunderschöne Wanderwege mit Blick auf den Wolfgangsee.",
            image: mountains
        },

        {
            name: "Bootsfahrt Wolfgangsee",
            location: "St. Gilgen, Salzburg",
            type: "Outdoor",
            season: "summer",
            description: "Entspanne bei einer Bootsfahrt auf dem See.",
            image: wolfgangsee
        },

        {
            name: "Skifahren in Tirol",
            location: "St. Anton am Arlberg",
            type: "Sport",
            season: "winter",
            description: "Eines der besten Skigebiete Europas.",
            image: mountains
        },

        {
            name: "Schloss Schönbrunn Führung",
            location: "Wien",
            type: "Kultur",
            season: "all",
            description: "Historische Führung durch das berühmte Schloss.",
            image: schoenbrunn
        }

    ]

    const filtered = activities.filter((activity) => {

        const seasonMatch =
            seasonFilter === "all" ||
            activity.season === seasonFilter ||
            activity.season === "all"

        const typeMatch =
            typeFilter === "all" ||
            activity.type === typeFilter

        return seasonMatch && typeMatch
    })

    return (
        <div className="page">

            <h1>Aktivitäten</h1>
            <p>Entdecke spannende Aktivitäten in Österreich</p>


            {/* SEASON FILTER */}

            <div className="filter-row">

                <button onClick={() => setSeasonFilter("all")}>Alle</button>
                <button onClick={() => setSeasonFilter("summer")}>☀️ Sommer</button>
                <button onClick={() => setSeasonFilter("winter")}>❄️ Winter</button>

            </div>


            {/* TYPE FILTER */}

            <div className="filter-row">

                <button onClick={() => setTypeFilter("all")}>Alle Aktivitäten</button>
                <button onClick={() => setTypeFilter("Outdoor")}>🏔 Outdoor</button>
                <button onClick={() => setTypeFilter("Kultur")}>🏛 Kultur</button>
                <button onClick={() => setTypeFilter("Sport")}>⛷ Sport</button>

            </div>


            {/* ACTIVITY CARDS */}

            <div className="cards-grid">

                {filtered.map((activity, index) => (

                    <div key={index} className="place-card">

                        <img src={activity.image} className="place-image"/>

                        <div className="place-content">

                            <div className="place-header">

                                <h3>{activity.name}</h3>

                                <span className="place-type">
                  {activity.type}
                </span>

                            </div>

                            <StarRating initial={4} />

                            <p className="place-location">
                                📍 {activity.location}
                            </p>

                            <p className="place-description">
                                {activity.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}