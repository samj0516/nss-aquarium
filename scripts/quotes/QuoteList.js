import { useQuote } from './QuoteDataProvider.js'
import { Quote } from "./Quote.js"

export const QuoteList = () => {

    const quoteElement = document.querySelector(".containerLeft")
    const quotes = useQuote()

    let quoteHTMLRepresentations = ""
    for (const quote of quotes) {
        quoteHTMLRepresentations += Quote(quote)
       }
        
    quoteElement.innerHTML += `
    <article class="containerLeft__travelQuotes contentArticle">
       ${quoteHTMLRepresentations}
    </article>
    `
}