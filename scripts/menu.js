const root = "/WSOA3028A_2583750"

const menuItems = [
    {name: "Home", href: `${root}/index.html`},
    {name: "Blog", href: `${root}/Blogs/index.html`},
    {name: "Essays", href: `${root}/Essays/index.html`},
    {name: "Portfolio", href: `${root}/Portfolio/index.html`},
    {name: "Design", href: `${root}/Design/index.html`},
    {name: "About", href: `${root}/About/index.html`},
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