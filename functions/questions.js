import questions from './questions/geography.json'
const CATEGORIES = ['geography','qwerty','zaq12wsx']


const isValidCategory = (word) =>{
    for (let i = 0; i < CATEGORIES.length; i++) {
        if(word === CATEGORIES[i]) return true
    }
    return false
}

const parseCategory = (string) =>{
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


exports.handler = async (event, context) => {
    const quantity = parseInt(event.queryStringParameters.q) || 1
    const selectedCategories = parseCategory(event.queryStringParameters.cat)

    
   
   

    return {
        statusCode: 200,
        body: JSON.stringify([questions[1]])
    }
}