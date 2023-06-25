import { AnswersContext } from "../../AnswersContext"
import { IAnswer } from "../../interfaces"
import "./styles.scss"
import { useContext, useMemo } from "react"
import { useNavigate } from "react-router-dom"
const getCorrectAnswersCount = (answers: IAnswer[]) => {
  let count = 0
  answers.forEach((answer) => {
    if (answer.question.correct_answer === answer.selected) count++
  })
  return count
}

const End = () => {
  const navigate = useNavigate()
  const { answers } = useContext(AnswersContext)
  const correctAnswersCount = useMemo<number>(
    () => getCorrectAnswersCount(answers),
    [answers]
  )
  const correctAnswersPercentage = useMemo<number>(() => {
    return Math.round((correctAnswersCount / answers.length) * 100)
  }, [])

  return (
    <div className="end">
      <h2>
        You scored {correctAnswersPercentage}% (
        {`${correctAnswersCount}/${answers.length}`})
      </h2>
      <button className="end__button" onClick={() => navigate("/")}>
        New Game
      </button>
    </div>
  )
}

export default End
