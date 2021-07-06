const headerTag = document.querySelector("header")

document.addEventListener("scroll", function(event){
    const pixels = window.pageYOffset

    if(pixels > 80){
        headerTag.classList.add("scrolled")
    } else {
        headerTag.classList.remove("scrolled")
    }
})


