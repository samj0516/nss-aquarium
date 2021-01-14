export const Location = (location) => {
    return `
    <section class="locationCard">
        <div><img  class="location__image image--card" src="${location.image}" /></div>
        <div class="location__name">${location.name}</div>
    </section>
`
    
}