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
        length: "3-4 ft",
        diet: "jelly fish",
        location:"North Atlantic and Pacific",
        image: "images/dogFish.jpeg"
        
    },
    {
        name: "Nemo",
        species: "clownfish",
        length: "5 in",
        diet: "plankton",
        location:"Great Barrier Reef, Australia",
        image: "images/clownfish.jpeg"
    },
    {
        name: "Jack Dempsy",
        species: "cichlid fish",
        length: "10-15 in",
        diet: "carnivorous",
        location:"Southern Mexico",
        image: "images/jackdempsyFish.jpeg"
        
    },
    {
        name: "Leo",
        species: "lionfish",
        length: "7-8 in",
        diet: "algae",
        location:"Indo-Pacific",
        image: "images/lionFish.jpeg"
        
    },
    {
        name: "Polly",
        species: "parrotfish",
        length: "12-20 in",
        diet: "polyps",
        location:"Amazon Basin",
        image: "images/parrotFish.jpeg"
        
    }
]
export const useFish = () => {
    return fishCollection.slice()
}