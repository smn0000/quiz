import { Handler } from "@netlify/functions"
import CATEGORIES from "./questions/CATEGORIES"
import {IQuestion} from '../src/interfaces'

const getQuantity = (event) => {
    if(!event.queryStringParameters.q) return 1
    return parseInt(event.queryStringParameters.q) > 50 ? 50 : parseInt(event.queryStringParameters.q)
   
}

const isValidCategory = (word) =>{
    for (let i = 0; i < CATEGORIES.length; i++) {
        if(word === CATEGORIES[i]) return true
    }
    return false
}

const parseCategory = (event) =>{
    if(!event.queryStringParameters.cat) return CATEGORIES
    let string = event.queryStringParameters.cat

    let arr :string[] = []
    let word = ''
    for (let i = 0; i < string.length; i++) {
        if(string[i] === ',') {
            if(isValidCategory(word)) arr.push(word)
            word = ''
        }
        else if(i === string.length - 1 ){
            word = word + string[i]
            if(isValidCategory(word)) arr.push(word)
            
        }
        else{
            word = word + string[i]
        }
    }
    if(arr.length > 0 ) return arr

}

const getQuestions = (categories) => {
    let arr:IQuestion[][] = []
    for (let i = 0; i < categories.length; i++) {
        arr.push(require(`./questions/${categories[i]}.json`))
        
    }
    return arr
}


const handler:Handler = async (event) => {
    const quantity = getQuantity(event)
    const selectedCategories = parseCategory(event)
    const questions = getQuestions(selectedCategories)
    
    let response: any[]= []

    for (let i = 0; i < quantity; i++) {
        let randCategory = Math.floor(Math.random() * questions.length)
        let randQuestion = Math.floor(Math.random() * questions[randCategory].length)
        response.push(questions[randCategory][randQuestion])
    }
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}

module.exports = {handler}