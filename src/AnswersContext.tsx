import { createContext, useState } from "react"
import { IAnswer, TAnswersContext } from "./interfaces"

export const AnswersContext = createContext<TAnswersContext>({
  answers: [],
  addAnswer: () => {},
})

export const AnswersProvider: React.FC<any> = ({ children }) => {
  const [answers, setAnswers] = useState<IAnswer[]>([])

  const addAnswer = (newAnswer: IAnswer) => {
    setAnswers((current) => [...current, newAnswer])
  }

  return (
    <AnswersContext.Provider
      value={{
        answers,
        addAnswer,
      }}
    >
      {children}
    </AnswersContext.Provider>
  )
}
