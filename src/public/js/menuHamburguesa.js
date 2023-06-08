window.addEventListener("load", () => {
    const menuMobile = document.getElementById("menu-mobile")

    const opneBtn = document.getElementById("openBtn")

    const closeBtn = document.getElementById("closeBtn")

    const overlay = document.getElementById("overlay-menu-mobile")

    opneBtn.addEventListener("click", () => {
        menuMobile.classList.remove("hidden")
        menuMobile.classList.add("visible")        
    })

    closeBtn.addEventListener("click", () => {
        menuMobile.classList.remove("visible")
        menuMobile.classList.add("hidden")        
    })
})