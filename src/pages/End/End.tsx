import { AnswersContext } from "../../AnswersContext"
import { IAnswer } from "../../interfaces"
import "./styles.scss"
import { useContext, useEffect, useMemo } from "react"

const getCorrectAnswersCount = (answers: IAnswer[]) => {
  let count = 0
  answers.forEach((answer) => {
    if (answer.question.correct_answer === answer.selected) count++
  })
  return count
}

const End = () => {
  const { answers } = useContext(AnswersContext)
  const correctAnswersCount = useMemo<number>(
    () => getCorrectAnswersCount(answers),
    [answers]
  )

  return (
    <div>
      {`${correctAnswersCount}/${answers.length}`}
      {answers.map((answer, index) => (
        <div key={index}>
          <p>{answer.selected}</p>
          <p>{answer.question.correct_answer}</p>
        </div>
      ))}
    </div>
  )
}

export default End
