const tipCollection = 
[
    
    
    {
        tip: "Plan to replace 25 percent of the water in your aquarium once a month."
    },
    
    {
        tip: "Whenever you add fresh water to the tank, add a few drops of anti-chlorine and nitrifying bacteria in it."
    },
    
    {
        tip: "Changing the temperature too often stresses them out and makes them susceptible to infections."
    },
]
export const useTip = () => {
    return tipCollection.slice()
}