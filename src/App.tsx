import { useState } from "react"

import Header from "./components/Header"
import BottomNav from "./components/BottomNav"

import HomePage from "./pages/HomePage"
import SightsPage from "./pages/SightsPage"
import FoodPage from "./pages/FoodPage"
import ActivitiesPage from "./pages/ActivitiesPage"
import CommunityPage from "./pages/CommunityPage"
import InfoPage from "./pages/InfoPage"

function App() {

    const [page, setPage] = useState("home")

    const renderPage = () => {
        switch (page) {

            case "home":
                return <HomePage setPage={setPage} />

            case "sights":
                return <SightsPage />

            case "food":
                return <FoodPage />

            case "activities":
                return <ActivitiesPage />

            case "community":
                return <CommunityPage />

            case "info":
                return <InfoPage />

            default:
                return <HomePage setPage={setPage} />
        }
    }

    return (
        <div className="app">

            <Header />

            <main>
                {renderPage()}
            </main>

            <BottomNav
                current={page}
                setPage={setPage}
            />

        </div>
    )
}

export default App