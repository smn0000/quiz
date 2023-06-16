import { createContext, useState } from "react"
import { TCategoriesContext } from "./interfaces"

export const CategoriesContext = createContext<TCategoriesContext>({
  categories: [],
  setCategories: () => {},
  selectedCategories: [],
  setSelectedCategories: () => {},
})

export const CategoriesProvider: React.FC<any> = ({ children }) => {
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
        selectedCategories,
        setSelectedCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}
