import "./styles.scss"
import { useState, useEffect } from "react"
import { Formik, Form, FieldArray, Field } from "formik"

const CategorySelection = () => {
  const [categories, setCategories] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch("/.netlify/functions/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
        setIsLoading(false)
      })
      .catch((error) => alert("Failed to fetch the categories! Try again."))
  }, [])

  console.log(categories)
  return (
    <Formik initialValues={{}} onSubmit={(values) => console.log(values)}>
      {() => (
        <Form>
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
  )
}

export default CategorySelection
