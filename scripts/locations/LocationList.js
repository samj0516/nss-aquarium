import { useLocation } from './LocationDataProvider.js'
import { Location } from "./Location.js"

export const LocationList = () => {

    const locationElement = document.querySelector(".containerLeft")
    const location = useLocation()

    let locationHTMLRepresentations = ""
    for (const location of locations) {
        locationHTMLRepresentations += Location(location)
       }
        
    locationElement.innerHTML += `
    <article class="containerLeft__travelLocations contentArticle">
       ${locationHTMLRepresentations}
    </article>
    `
}