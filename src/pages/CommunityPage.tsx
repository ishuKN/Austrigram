import { useState } from "react"
import type { ChangeEvent } from "react"
type Post = {
    id: number
    name: string
    location: string
    text: string
    accessible: boolean
    image?: string
}

export default function CommunityPage() {
    const [posts, setPosts] = useState<Post[]>([
        {
            id: 1,
            name: "Anna M.",
            location: "Hallstatt",
            text: "Die Aussicht vom Skywalk war unglaublich!",
            accessible: true,
            image: ""
        }
    ])

    const [showForm, setShowForm] = useState(false)

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [text, setText] = useState("")
    const [accessible, setAccessible] = useState(false)
    const [image, setImage] = useState<string | undefined>(undefined)

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        const reader = new FileReader()
        reader.onloadend = () => setImage(reader.result as string)
        reader.readAsDataURL(file)
    }

    const addPost = () => {
        if (!name || !text) return

        const newPost: Post = {
            id: Date.now(),
            name,
            location,
            text,
            accessible,
            image
        }

        setPosts([newPost, ...posts])

        setName("")
        setLocation("")
        setText("")
        setAccessible(false)
        setImage(undefined)
        setShowForm(false)
    }

    return (
        <div className="page">

            <h1>Community</h1>
            <p>Teile deine Erfahrungen und entdecke Tipps von anderen Reisenden</p>

            <button className="add-post-btn" onClick={() => setShowForm(true)}>
                + Neuen Beitrag erstellen
            </button>

            {showForm && (
                <div className="post-form">

                    <input
                        placeholder="Dein Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        placeholder="Ort (z.B. Wien)"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />

                    <textarea
                        placeholder="Dein Erlebnis..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                    <label>
                        Bild hochladen
                        <input type="file" accept="image/*" onChange={handleImage} />
                    </label>

                    <label className="accessible-check">
                        <input
                            type="checkbox"
                            checked={accessible}
                            onChange={(e) => setAccessible(e.target.checked)}
                        />
                        Barrierefrei ♿
                    </label>

                    <button onClick={addPost}>Posten</button>
                    <button className="cancel-btn" onClick={() => setShowForm(false)}>
                        Abbrechen
                    </button>

                </div>
            )}

            <div className="posts">
                {posts.map((post) => (
                    <div key={post.id} className="post-card">

                        {post.image && (
                            <img src={post.image} className="post-image" />
                        )}

                        <div className="post-header">
                            <strong>{post.name}</strong>
                            <span>{post.location}</span>
                        </div>

                        <p>{post.text}</p>

                        {post.accessible && (
                            <div className="accessible-badge">
                                ♿ Barrierefrei
                            </div>
                        )}

                    </div>
                ))}
            </div>

        </div>
    )
}