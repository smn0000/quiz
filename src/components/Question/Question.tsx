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
    <div className="question__wrapper">
      <div className="question">
        <h2 className="question__text">{question?.question}</h2>

        <ul className="question__answers">
          <li
            className="question__answer"
            onClick={() =>
              handleAnswer({
                question: question,
                selected: question.answer_a,
              })
            }
          >
            {question.answer_a}
          </li>
          <li
            className="question__answer"
            onClick={() =>
              handleAnswer({
                question: question,
                selected: question.answer_b,
              })
            }
          >
            {question.answer_b}
          </li>
          {question.answer_c && question.answer_d && (
            <>
              <li
                className="question__answer"
                onClick={() =>
                  handleAnswer({
                    question: question,
                    selected: question.answer_c,
                  })
                }
              >
                {question.answer_c}
              </li>
              <li
                className="question__answer"
                onClick={() =>
                  handleAnswer({
                    question: question,
                    selected: question.answer_d,
                  })
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
