import { IQuestion, IAnswer } from "../../interfaces"
import "./styles.scss"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Question = ({
  question,
  handleAnswer,
}: {
  question: IQuestion
  handleAnswer: (answer: IAnswer) => void
}) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!question) navigate("/")
  }, [])

  return (
    <div>
      <div>{question?.question}</div>
      <div>
        <ul>
          <li
            onClick={() => handleAnswer({ question: question, selected: "a" })}
          >
            {question.answer_a}
          </li>
          <li
            onClick={() => handleAnswer({ question: question, selected: "b" })}
          >
            {question.answer_b}
          </li>
          {question.answer_c && question.answer_d && (
            <>
              <li
                onClick={() =>
                  handleAnswer({ question: question, selected: "c" })
                }
              >
                {question.answer_c}
              </li>
              <li
                onClick={() =>
                  handleAnswer({ question: question, selected: "d" })
                }
              >
                {question.answer_d}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Question
