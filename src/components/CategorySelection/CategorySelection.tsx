import "./styles.scss"
import { useState, useEffect } from "react"
import { Formik, Form, FieldArray, Field } from "formik"
import { useNavigate } from "react-router-dom"
import { IFormValues } from "../../interfaces"
import { useContext } from "react"
import { CategoriesContext } from "../../CategoriesContext"

const CategorySelection = () => {
  const { categories, setCategories, setSelectedCategories } =
    useContext(CategoriesContext)
  const [isLoading, setIsLoading] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (values: IFormValues) => {
    const selectedCategories = getCategoriesFromForm(values)
    if (selectedCategories.length === 0) return setIsInvalid(true)
    setIsInvalid(false)
    setSelectedCategories(selectedCategories)
    navigate(`/game`)
  }
  const getCategoriesFromForm = (object: IFormValues) => {
    let selected: string[] = []
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        if (object[key]) selected.push(key)
      }
    }
    return selected
  }

  useEffect(() => {
    setIsLoading(true)
    fetch("/.netlify/functions/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
        setIsLoading(false)
      })
      .catch(() => alert("Failed to fetch the categories! Try again."))
  }, [])

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <Formik initialValues={{}} onSubmit={(values) => handleSubmit(values)}>
          {() => (
            <Form
              className={`category__selection__form ${
                isInvalid ? "invalid" : ""
              }`}
            >
              <FieldArray name="categories">
                {() =>
                  categories.map((category) => (
                    <label key={category}>
                      {category}
                      <Field name={category} type="checkbox" />
                    </label>
                  ))
                }
              </FieldArray>
              <button type="submit">submit</button>
            </Form>
          )}
        </Formik>
      )}
    </>
  )
}

export default CategorySelection
