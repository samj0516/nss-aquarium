const quoteCollection = 
[
    
    
    {
        quote: "Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.",
        author: "-Anthony Bourdain",
        location: "Bali, Indonesia",
        date: "8/11/2017",
    },
    
    {
        quote: "Adventure is worthwhile.",
        author: "-Aesop",
        location: "Casablanca, Morocco",
        date: "5/16/1642",
    },
    
    {
        quote: "Jobs fill your pockets, adventures fill your soul",
        author: "-Madonna",
        location: "London, England",
        date: "6/21/1997",
    },
]
export const useQuote = () => {
    return quoteCollection.slice()
}