const locationCollection = 
[
    
    
    {
        image: "images/sydney.jpeg",
        name: "Sydney, Australia",
        
    },
    
    {
        image: "images/bali.jpeg",
        name: "Bali, Indonesia",
        
    },
    
    {
        image: "images/costaRica",
        name: "Samara, Costa Rica",
        
    },
]
export const useLocation = () => {
    return locationCollection.slice()
}