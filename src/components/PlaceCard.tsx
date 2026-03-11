import { useState } from "react"

type Props = {
    name: string
    location: string
    type: string
    description: string
    image: string
    initialRating?: number
}

export default function PlaceCard({
                                      name,
                                      location,
                                      type,
                                      description,
                                      image,
                                      initialRating = 4
                                  }: Props) {

    const [rating, setRating] = useState(initialRating)

    return (
        <div className="place-card">

            <img src={image} className="place-image" />

            <div className="place-content">

                <div className="place-header">
                    <h3>{name}</h3>
                    <span className="place-type">{type}</span>
                </div>

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

                <p className="place-location">📍 {location}</p>

                <p className="place-description">{description}</p>

            </div>
        </div>
    )
}