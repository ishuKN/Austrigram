import { useState } from "react"

import schnitzel from "../images/schnitzel.jpg"
import coffee from "../images/coffee.jpg"
import mountains from "../images/mountains.jpg"

type FoodPlace = {
    name: string
    location: string
    type: string
    meal: string
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

export default function FoodPage() {

    const [mealFilter, setMealFilter] = useState("all")
    const [typeFilter, setTypeFilter] = useState("all")

    const places: FoodPlace[] = [

        {
            name: "Figlmüller",
            location: "Wollzeile 5, Wien",
            type: "Austrian",
            meal: "dinner",
            description: "Berühmt für Wiener Schnitzel.",
            image: schnitzel
        },

        {
            name: "Café Sacher",
            location: "Philharmonikerstraße 4, Wien",
            type: "Café",
            meal: "breakfast",
            description: "Traditionelles Wiener Kaffeehaus.",
            image: coffee
        },

        {
            name: "Dragon Wok",
            location: "Mariahilfer Straße 88, Wien",
            type: "Chinese",
            meal: "lunch",
            description: "Authentische chinesische Küche.",
            image: mountains
        },

        {
            name: "Trattoria Roma",
            location: "Operngasse 15, Wien",
            type: "Italian",
            meal: "dinner",
            description: "Frische Pasta und italienische Spezialitäten.",
            image: schnitzel
        }

    ]

    const filtered = places.filter((p) => {
        const mealMatch = mealFilter === "all" || p.meal === mealFilter
        const typeMatch = typeFilter === "all" || p.type === typeFilter
        return mealMatch && typeMatch
    })

    return (
        <div className="page">

            <h1>Essen & Trinken</h1>
            <p>Finde Restaurants und Cafés in Österreich</p>


            {/* MEAL FILTER */}

            <div className="filter-row">

                <button onClick={() => setMealFilter("all")}>Alle</button>
                <button onClick={() => setMealFilter("breakfast")}>Frühstück</button>
                <button onClick={() => setMealFilter("lunch")}>Mittag</button>
                <button onClick={() => setMealFilter("dinner")}>Abendessen</button>

            </div>


            {/* CUISINE FILTER */}

            <div className="filter-row">

                <button onClick={() => setTypeFilter("all")}>Alle Küchen</button>
                <button onClick={() => setTypeFilter("Austrian")}>Österreichisch</button>
                <button onClick={() => setTypeFilter("Italian")}>Italienisch</button>
                <button onClick={() => setTypeFilter("Chinese")}>Chinesisch</button>
                <button onClick={() => setTypeFilter("Café")}>Café</button>

            </div>


            {/* FOOD CARDS */}

            <div className="cards-grid">

                {filtered.map((place, index) => (

                    <div key={index} className="place-card">

                        <img src={place.image} className="place-image"/>

                        <div className="place-content">

                            <div className="place-header">
                                <h3>{place.name}</h3>
                                <span className="place-type">{place.type}</span>
                            </div>

                            <StarRating initial={4} />

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