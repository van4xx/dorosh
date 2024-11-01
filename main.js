document.querySelectorAll("video").forEach((elem) => {
    this.controls = false;
})

document.querySelectorAll(".projects-block > div > video").forEach((elem) => {
    elem.addEventListener("mouseover", function() {
        this.play()
    });
})

document.querySelectorAll(".projects-block > div > video").forEach((elem) => {
    elem.addEventListener("mouseleave", function() {
        this.currentTime = 0;
        this.pause()
    });
})