import CATEGORIES from "./questions/CATEGORIES"


const isValidCategory = (word) =>{
    for (let i = 0; i < CATEGORIES.length; i++) {
        if(word === CATEGORIES[i]) return true
    }
    return false
}

const parseCategory = (string) =>{
    if(!string) return CATEGORIES
    let arr = []
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
    //if no categories provided or all categories are invalid use all categories
    return CATEGORIES
    

}

const getQuestions = (categories) => {
    let arr = []
    for (let i = 0; i < categories.length; i++) {
        arr.push(require(`./questions/${categories[i]}.json`))
        
    }
    return arr
}


exports.handler = async (event, context) => {
    const quantity = (parseInt(event.queryStringParameters.q) > 50 ? 50 : parseInt(event.queryStringParameters.q)) || 1
    const selectedCategories = parseCategory(event.queryStringParameters.cat)
    const questions = getQuestions(selectedCategories)
    
    let response = []

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