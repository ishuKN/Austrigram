import schnitzel from "../images/schnitzel.jpg"
import mountains from "../images/mountains.jpg"
import coffee from "../images/coffee.jpg"

type Props = {
  setPage: (page: string) => void
}

export default function HomePage({ setPage }: Props) {
  return (
    <div className="page">

      <h1>Willkommen bei AustriaGram</h1>
      <p>Entdecke die schönsten Orte, das beste Essen und spannende Aktivitäten in Österreich</p>

      <h2>Tägliche Empfehlungen</h2>

      <div className="cards-grid">

        <div className="card">
          <img src={schnitzel}/>
          <div className="card-content">
            <h3>Wiener Schnitzel bei Figlmüller</h3>
          </div>
        </div>

        <div className="card">
          <img src={mountains}/>
          <div className="card-content">
            <h3>Wanderung am Wolfgangsee</h3>
          </div>
        </div>

        <div className="card">
          <img src={coffee}/>
          <div className="card-content">
            <h3>Café Sacher</h3>
          </div>
        </div>

      </div>

      <h2 style={{marginTop:"40px"}}>Erkunde Österreich</h2>

      <div className="cards-grid">

        <div className="card" onClick={() => setPage("sights")}>
          <div className="card-content">
            <h3>Sehenswürdigkeiten</h3>
            <p>Entdecke historische Orte</p>
          </div>
        </div>

        <div className="card" onClick={() => setPage("food")}>
          <div className="card-content">
            <h3>Essen & Trinken</h3>
            <p>Beste Restaurants & Cafés</p>
          </div>
        </div>

        <div className="card" onClick={() => setPage("activities")}>
          <div className="card-content">
            <h3>Aktivitäten</h3>
            <p>Spannende Erlebnisse</p>
          </div>
        </div>

      </div>

    </div>
  )
}