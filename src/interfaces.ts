export interface IFormValues {
    [key: string]: boolean
  }

export interface IQuestion {
    question: string;
    correct_answer: string;
    answer_a: string;
    answer_b: string;
    answer_c?: string;
    answer_d?: string;
  }

export interface IAnswer {
  question:IQuestion
  selected: 'a' | 'b' | 'c' | 'd' | undefined
}

export type TCategoriesContext = {
  categories: string[]
  setCategories: (categories: string[]) => void
  selectedCategories: string[]
  setSelectedCategories: (categories: string[]) => void
}

export type TAnswersContext = {
  answers: IAnswer[]
  setAnswers: (answers: IAnswer[]) => void

}