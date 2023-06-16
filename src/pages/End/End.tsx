import { AnswersContext } from "../../AnswersContext"
import "./styles.scss"
import { useContext } from "react"

const End = () => {
  const { answers } = useContext(AnswersContext)
  console.log(answers)
  return (
    <div>
      {answers.map((answer) => (
        <div>
          <p>{answer.selected}</p>
          <p>{answer.question.correct_answer}</p>
        </div>
      ))}
    </div>
  )
}

export default End
