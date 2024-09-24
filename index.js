const navBar = document.querySelector(".navbar")
document.addEventListener("scroll", (event) => {
    console.log(scrollY)
    if(scrollY < 619) {
        navBar.classList.remove("white")
    }
    if(scrollY > 619) {
        navBar.classList.add("white")
    }
    if(scrollY > 1347.4) {
        navBar.classList.remove("white")
    }
    if(scrollY > 1970.3){
        navBar.classList.add("white")

    }
    if(scrollY > 2560.5){
        navBar.classList.remove("white")

    }
    if(scrollY > 4100){
        navBar.classList.add("white")

    }
})