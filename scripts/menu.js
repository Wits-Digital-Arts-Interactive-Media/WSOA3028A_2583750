// menu.js

document.addEventListener("DOMContentLoaded", function () {
    const root = "/WSOA3028A_2583750"; // Replace with your root URL if needed
    const menuItems = [
      { name: "Home", href: root + "/index.html" },
      { name: "Blog", href: `${root}/Blogs/index.html` },
      { name: "Essays", href: `${root}/Essays/index.html` },
      { name: "Portfolio", href: `${root}/Portfolio/index.html` },
      { name: "Design", href: `${root}/Design/index.html` },
      { name: "About", href: `${root}/About/index.html` },
    ];
  
    const menuContainer = document.getElementById("menuContainer");
    const menuList = document.createElement("ul");
    menuList.id = "menu";
  
    menuItems.forEach((menuItem) => {
      const menuItemElement = document.createElement("li");
      const menuItemLink = document.createElement("a");
      menuItemLink.textContent = menuItem.name;
      menuItemLink.href = menuItem.href;
      menuItemElement.appendChild(menuItemLink);
      menuList.appendChild(menuItemElement);
    });
  
    menuContainer.appendChild(menuList);
  });
  