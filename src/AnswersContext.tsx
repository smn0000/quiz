import { createContext, useState } from "react"
import { IAnswer, TAnswersContext } from "./interfaces"

export const AnswersContext = createContext<TAnswersContext>({
  answers: [],
  setAnswers: () => {},
})

export const CategoriesProvider: React.FC<any> = ({ children }) => {
  const [answers, setAnswers] = useState<IAnswer[]>([])

  return (
    <AnswersContext.Provider
      value={{
        answers,
        setAnswers,
      }}
    >
      {children}
    </AnswersContext.Provider>
  )
}
