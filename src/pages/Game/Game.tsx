import { useContext, useEffect, useState } from "react"
import { CategoriesContext } from "../../CategoriesContext"
import { useNavigate } from "react-router-dom"
import { IAnswer, IQuestion } from "../../interfaces"
import Question from "../../components/Question/Question"
import { AnswersContext } from "../../AnswersContext"

const Game = () => {
  const { selectedCategories } = useContext(CategoriesContext)
  const { answers, addAnswer } = useContext(AnswersContext)
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (selectedCategories.length === 0) navigate("/")
    let cat = ""
    for (let i = 0; i < selectedCategories.length; i++) {
      if (i === 0) cat += selectedCategories[i]
      else cat += `,${selectedCategories[i]}`
    }
    setIsLoading(true)
    fetch(`/.netlify/functions/questions?cat=${cat}&q=3`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data)
        setIsLoading(false)
      })
      .catch(() => alert("Failed to fetch the questions! Try again."))
  }, [])

  const handleAnswer = (answer: IAnswer) => {
    addAnswer(answer)
    if (currentQuestion + 1 >= questions.length) return handleEndGame()
    setCurrentQuestion((current) => current + 1)
  }

  const handleEndGame = () => {
    navigate("/end")
  }
  return (
    <>
      {isLoading && <div>Loading</div>}
      {questions.length > 0 && (
        <Question
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      )}
    </>
  )
}

export default Game
