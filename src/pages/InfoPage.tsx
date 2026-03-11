import { useState } from "react"

type InfoPlace = {
    name: string
    location: string
    type: string
    description: string
}

export default function InfoPage() {

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")

    const places: InfoPlace[] = [

        {
            name: "BILLA Supermarkt",
            location: "Mariahilfer Straße 102, Wien",
            type: "supermarket",
            description: "Großer Supermarkt mit vielen regionalen Produkten."
        },

        {
            name: "Apotheke am Stephansplatz",
            location: "Stephansplatz 7, Wien",
            type: "pharmacy",
            description: "Apotheke im Zentrum Wiens."
        },

        {
            name: "Dr. Müller Arztpraxis",
            location: "Operngasse 10, Wien",
            type: "doctor",
            description: "Allgemeinmedizinische Praxis."
        },

        {
            name: "dm Drogerie Markt",
            location: "Mariahilfer Straße 77, Wien",
            type: "drugstore",
            description: "Drogerie mit Kosmetik und Hygieneartikeln."
        }

    ]

    const filtered = places.filter((place) => {

        const matchSearch =
            place.name.toLowerCase().includes(search.toLowerCase())

        const matchFilter =
            filter === "all" || place.type === filter

        return matchSearch && matchFilter
    })

    const getIcon = (type: string) => {

        switch (type) {

            case "supermarket":
                return "🛒"

            case "pharmacy":
                return "💊"

            case "doctor":
                return "🩺"

            case "drugstore":
                return "🧴"

            default:
                return "📍"
        }
    }

    const getTypeLabel = (type: string) => {

        switch (type) {

            case "supermarket":
                return "Supermarkt"

            case "pharmacy":
                return "Apotheke"

            case "doctor":
                return "Arzt"

            case "drugstore":
                return "Drogerie"

            default:
                return type
        }
    }

    return (
        <div className="page">

            <h1>Nützliche Infos</h1>
            <p>Finde wichtige Orte wie Supermärkte, Apotheken oder Ärzte</p>


            {/* SEARCH BAR */}

            <input
                className="search-bar"
                placeholder="Suche nach Ort oder Geschäft..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />


            {/* FILTERS */}

            <div className="filter-row">

                <button onClick={() => setFilter("all")}>Alle</button>
                <button onClick={() => setFilter("supermarket")}>🛒 Supermärkte</button>
                <button onClick={() => setFilter("pharmacy")}>💊 Apotheken</button>
                <button onClick={() => setFilter("doctor")}>🩺 Ärzte</button>
                <button onClick={() => setFilter("drugstore")}>🧴 Drogerien</button>

            </div>


            {/* CARDS */}

            <div className="cards-grid">

                {filtered.map((place, index) => (

                    <div key={index} className="place-card">

                        <div className="place-content">

                            <div className="place-header">

                                <h3>
                                    {getIcon(place.type)} {place.name}
                                </h3>

                                <span className="place-type">
                  {getTypeLabel(place.type)}
                </span>

                            </div>

                            <p className="place-location">
                                📍 {place.location}
                            </p>

                            <p className="place-description">
                                {place.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}