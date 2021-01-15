/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Bart",
        species: "dogfish shark",
        length: 45,
        diet: "jelly fish",
        location:"North Atlantic and Pacific",
        image: "images/dogFish.jpeg"
        
    },
    {
        name: "Nemo",
        species: "clownfish",
        length: 3,
        diet: "plankton",
        location:"Great Barrier Reef, Australia",
        image: "images/clownfish.jpeg"
    },
    {
        name: "Jack Dempsy",
        species: "cichlid fish",
        length: 16,
        diet: "carnivorous",
        location:"Southern Mexico",
        image: "images/jackdempsyFish.jpeg"
        
    },
    {
        name: "Leo",
        species: "lionfish",
        length: 9,
        diet: "algae",
        location:"Indo-Pacific",
        image: "images/lionFish.jpeg"
        
    },
    {
        name: "Polly",
        species: "parrotfish",
        length: 20,
        diet: "polyps",
        location:"Amazon Basin",
        image: "images/parrotFish.jpeg"
        
    }
]
export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fishObj of fishCollection) {
        if (fishObj.length % 3 === 0){
            holyFish.push(fishObj)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fishObj of fishCollection) {
        if (fishObj.length % 5 === 0){
            soldiers.push(fishObj)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regFish = []
    for (const fishObj of fishCollection) {
        if (fishObj.length % 5 !== 0 && fishObj.length % 3 !== 0){
            regFish.push(fishObj)
        }
    }
    return regFish
}