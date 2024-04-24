const root = "/WSOA3028A_2583750"

const menuItems = [
    {name: "Home", href: `${root}/Home/index.html`},
    {name: "Blog", href: `${root}/Blogs/blog.html`},
    {name: "Essays", href: `${root}/Essays/essay.html`},
    {name: "Portfolio", href: `${root}/Portfolio/portfolio.html`},
    {name: "Design", href: `${root}/Design/design.html`},
    {name: "About", href: `${root}/About/about.html`},
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