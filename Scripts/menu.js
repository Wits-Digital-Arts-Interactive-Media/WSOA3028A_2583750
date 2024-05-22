const root = "/WSOA3028A_2583750"

const menuItems = [
    {name: "Home", href: root + "/index.html"},
    {name: "Blog", href: `${root}/Blogs/index.html`},
    {name: "Essays", href: `${root}/Essays/index.html`},
    {name: "Portfolio", href: `${root}/Portfolio/index.html`},
    {name: "Design", href: `${root}/Design/index.html`},
    {name: "Profile", href: `${root}/Profile/index.html`},
];
export function initialise(currentPage){                    //creates nav menu based on array. Param = currentPage

    console.log("worked")
    const nav = document.querySelector("header > nav")      //selects nav element in header
    const ul = document.createElement("ul")
    for(let menuItem of menuItems)                          //iterates over each menu item in menuItems array
    {
        const li = document.createElement("li")              //Within each iteration a list element is made for each item
        if(currentPage != menuItem.name)                     //Condition to check if currentPage name does not match menu item name
        {
            const a = document.createElement("a")            // if its true, an anchor element is made for each menu item
            a.innerText = menuItem.name                     // sets the text content of anchor to the menu item name
            a.setAttribute("href", menuItem.href)           // sets href attribute to the corresponding url
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
    {name: "Blog 1", href: `${root}/Blogs/blog1.html`, thumbnail: `${root}/Images/AliAbdaal.png`},
    {name: "Blog 2", href: `${root}/Blogs/blog2.html`, thumbnail: `${root}/Images/blog2.png`},
    {name: "Blog 3", href: `${root}/Blogs/blog3.html`, thumbnail: `${root}/Images/blog3.png`},
    {name: "Blog 4", href: `${root}/Blogs/blog4.html`, thumbnail: `${root}/Images/blog4.png`},
    {name: "Blog 5", href: `${root}/Blogs/blog5.html`, thumbnail: `${root}/Images/blog5.png`},
    {name: "Blog 6", href: `${root}/Blogs/blog6.html`, thumbnail: `${root}/Images/blog6.png`},
    {name: "Blog 7", href: `${root}/Blogs/blog7.html`, thumbnail: `${root}/Images/blog7.png`},
    {name: "Blog 8", href: `${root}/Blogs/blog8.html`, thumbnail: `${root}/Images/blog8.png`}
];

export function blogIndexes() {
    const blogList = document.getElementById("blogList");
    for (let blog of blogPosts) {
        const card = document.createElement("div");
        card.className = "blog-card";

        const img = document.createElement("img");
        img.src = blog.thumbnail;
        img.alt = blog.name;
        img.className = "blog-thumbnail";

        const caption = document.createElement("div");
        caption.className = "blog-caption";

        const a = document.createElement("a");
        a.innerText = blog.name;
        a.href = blog.href;

        caption.appendChild(a);
        card.appendChild(img);
        card.appendChild(caption);
        blogList.appendChild(card);
    }
}



