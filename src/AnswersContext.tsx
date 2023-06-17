import { createContext, useState } from "react"
import { IAnswer, TAnswersContext } from "./interfaces"

export const AnswersContext = createContext<TAnswersContext>({
  answers: [],
  addAnswer: () => {},
  clearAnswers: () => {},
})

export const AnswersProvider: React.FC<any> = ({ children }) => {
  const [answers, setAnswers] = useState<IAnswer[]>([])

  const addAnswer = (newAnswer: IAnswer) => {
    setAnswers((current) => [...current, newAnswer])
  }
  const clearAnswers = () => {
    setAnswers([])
  }

  return (
    <AnswersContext.Provider
      value={{
        answers,
        addAnswer,
        clearAnswers,
      }}
    >
      {children}
    </AnswersContext.Provider>
  )
}
