
import { useTip } from './TipDataProvider.js'
import { Tip } from "./Tip.js"

export const TipList = () => {

    const listElement = document.querySelector(".containerRight")
    const tips = useTip()

    let tipHTMLRepresentations = ""
    for (const tip of tips) {
        tipHTMLRepresentations += Tip(tip)
       }
        
    listElement.innerHTML += `
        <ul>
            ${tipHTMLRepresentations}
        </ul>
    `
}