import { MapPin, Heart } from "lucide-react"

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <MapPin />
        <div>
          <strong>AustriaGram</strong>
          <span>Entdecke Österreich</span>
        </div>
      </div>

      <Heart />
    </header>
  )
}