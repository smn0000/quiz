import Menu from "./pages/Menu/Menu"
import Game from "./pages/Game/Game"
import "./sass/global.scss"
import { Routes, Route } from "react-router-dom"
import { CategoriesProvider } from "./CategoriesContext"

function App() {
  return (
    <>
      <CategoriesProvider>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </CategoriesProvider>
    </>
  )
}

export default App
