import { useContext } from "react"
import { CategoriesContext } from "../../CategoriesContext"

const Game = () => {
  const { selectedCategories } = useContext(CategoriesContext)
  console.log(selectedCategories)
  return <div>Game</div>
}

export default Game
