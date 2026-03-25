function HamburgerClick(el) 
{
    const nav = document.getElementsByClassName("mobileNavMenu")[0];

    if (nav.classList.contains("closed"))
    {
        nav.classList.remove("closed");
        el.src = "/Resources/Images/Hamburger Menu X.webp";
        document.body.classList.add("noScroll");
    }
    else
    {   
        nav.classList.add("closed");
        el.src = "/Resources/Images/Hamburger Menu.webp";
        document.body.classList.remove("noScroll");
    }
}