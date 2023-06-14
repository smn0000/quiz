import CATEGORIES from "./questions/CATEGORIES"

exports.handler = async () => {

    return{
        statusCode:200,
        body: JSON.stringify(CATEGORIES)
    }
}