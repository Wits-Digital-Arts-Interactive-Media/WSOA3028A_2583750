const root = "/WSOA3028A_2583750"

const menuItems = [
    {name: "Home", href: root + "/index.html"},
    {name: "Blog", href: `${root}/Blogs/index.html`},
    {name: "Essays", href: `${root}/Essays/index.html`},
    {name: "Portfolio", href: `${root}/Portfolio/index.html`},
    {name: "Design", href: `${root}/Design/index.html`},
    {name: "Profile", href: `${root}/Profile/index.html`},
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

const blogPosts = [
    {name: "Blog 1", href: `${root}/Blogs/blog1.html`},
    {name: "Blog 2", href: `${root}/Blogs/blog2.html`},
    {name: "Blog 3", href: `${root}/Blogs/blog3.html`},
    {name: "Blog 4", href: `${root}/Blogs/blog4.html`},
    {name: "Blog 5", href: `${root}/Blogs/blog5.html`},
    {name: "Blog 6", href:`${root}/Blogs/blog6.html`},
    {name: "Blog 7", href:`${root}/Blogs/blog7.html`},
    {name: "Blog 8", href:`${root}/Blogs/blog8.html`},
]

export function blogIndexes() {
    const ul = document.createElement("ul");
    for (let blogIndex of blogPosts) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerText = blogIndex.name;
        a.setAttribute("href", blogIndex.href);
        li.appendChild(a);
        ul.appendChild(li);
    }
    document.body.appendChild(ul); // Append to the body of the document
}



