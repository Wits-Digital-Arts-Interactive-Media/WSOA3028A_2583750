

const menuItems = [
    {name: "Home", href:  "/index.html"},
    {name: "Blog", href: "/WSOA3028A_2583750/Blogs/index.html"},
    {name: "Essays", href: `/WSOA3028A_2583750/Essays/index.html`},
    {name: "Portfolio", href: `/WSOA3028A_2583750/Portfolio/index.html`},
    {name: "Design", href: `/WSOA3028A_2583750/Design/index.html`},
    {name: "About", href: `/WSOA3028A_2583750/About/index.html`},
];
export function initialise(currentPage){

    console.log("worked")
    const nav = document.querySelector("header > nav")
    const ul = document.createElement("ul")
    for(let menuItem of menuItems)
    {
        const li = document.createElement("li")
        if(currentPage != menuItem.name)
        {
            const a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)

        }
        else{
            li.innerText = menuItem.name
        }
        ul.appendChild(li)
    }
    nav.appendChild(ul)

    
}
