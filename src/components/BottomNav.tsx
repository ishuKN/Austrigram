import {
  Home,
  MapPin,
  UtensilsCrossed,
  Sparkles,
  Users,
  Info
} from "lucide-react"

type Props = {
  current: string
  setPage: (page: string) => void
}

export default function BottomNav({ current, setPage }: Props) {
  return (
    <nav className="bottom-nav">

      <button onClick={() => setPage("home")}>
        <Home />
        Home
      </button>

      <button onClick={() => setPage("sights")}>
        <MapPin />
        Sights
      </button>

      <button onClick={() => setPage("food")}>
        <UtensilsCrossed />
        Essen
      </button>

      <button onClick={() => setPage("activities")}>
        <Sparkles />
        Aktivitäten
      </button>

      <button onClick={() => setPage("community")}>
        <Users />
        Community
      </button>

      <button onClick={() => setPage("info")}>
        <Info />
        Infos
      </button>

    </nav>
  )
}