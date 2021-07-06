const sections = document.querySelectorAll("section")

const addMovement = function(){
    const topViewport = window.pageYOffset
    const midViewport = topViewport + (window.innerHeight / 2)

    // lets find the middle of each section
    sections.forEach(section => {
        const topSection = section.offsetTop
        const midSection = topSection + (section.offsetHeight / 2)

        const distanceToSection = midViewport - midSection

        // pick the tags to parallax

        const image = section.querySelector("img")
        const contentTag = section.querySelector("div")

        // apply some parallax
        image.style.transform = `rotate(${distanceToSection / 100}deg)`
    })
}

addMovement()

document.addEventListener("scroll", function(){
    addMovement()
})

window.addEventListener("resize", function(){
    addMovement()
})