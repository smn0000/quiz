import "./styles.scss"
import CategorySelection from "../../components/CategorySelection/CategorySelection"
const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menu__title">Select Categories</h1>
      <CategorySelection />
    </div>
  )
}

export default Menu
