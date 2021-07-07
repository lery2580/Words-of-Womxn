let number = 0
const stamps = [
    "circles.svg",
    "heart.svg",
    "moon.svg",
    "rainbow.svg",
    "shooting-star.svg",
    "waves.svg"
  ]

const stampsTag = document.querySelector("div.stamps")

const addStamp = function (x, y){

    const img = document.createElement("img")
    img.setAttribute("src",stamps[number])
    img.style.left = x+ "px"
    img.style.top = y + "px"

    stampsTag.appendChild(img)

    number = number + 1
    if(number > stamps.length - 1){
        number = 0
    }
 
}

document.addEventListener("click", function (event) {
	addStamp(event.pageX, event.pageY)
})


