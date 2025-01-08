const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressBar = document.querySelector("div.progress")
const sections = document.querySelectorAll("section")
const descriptionTag = document.querySelector("p.description")
const pageTag = document.querySelector("div.page")
const header = document.querySelector("header")

// when scrolling, update the pixels

document.addEventListener("scroll", function(){
   const pixels = window.scrollY

   pixelsTag.innerHTML = "[ " + pixels + " ]"
})

// when scrolling, the progress bar moves

document.addEventListener("scroll", function(){
    const pixels = window.scrollY
    const pageHeight = bodyTag.getBoundingClientRect().height
    const totalScrollableDistance = pageHeight - window.innerHeight

    const percentage = pixels / totalScrollableDistance

    progressBar.style.width = `${100 * percentage}%`

 })

 // when scrolling, see how far we scrolled
 // for each ection, check if we passed the section
 // if we passed, update the text in header

 document.addEventListener("scroll", function(){
    const pixels = window.scrollY

    sections.forEach(section => {
        if (section.offsetTop  - 50 <= pixels) {
            descriptionTag.innerHTML = section.getAttribute("data-description")
            pageTag.innerHTML = section.getAttribute("data-page")

            if (section.hasAttribute("data-amber")){
                header.classList.add("amber")
                progressBar.classList.add("amber")
            } else {
                header.classList.remove("amber")
                progressBar.classList.remove("amber")
            }
            if (section.hasAttribute("data-blue")){
                header.classList.add("blue")
                progressBar.classList.add("blue")
            } else {
                header.classList.remove("blue")
                progressBar.classList.remove("blue")
            }
            if (section.hasAttribute("data-red")){
                header.classList.add("red")
                progressBar.classList.add("red")
            } else {
                header.classList.remove("red")
                progressBar.classList.remove("red")
            }
        }
    })
 })


 // when scroll make things parallax
 // move certain tags based on how far they are from anchor point
 // anchor point: middle of section
 // parallax is ratio of middle point anchor point

 document.addEventListener("scroll", function(){
    const topViewport = window.scrollY
    const midViewport = topViewport + (window.innerHeight / 2)

    sections.forEach(section => {
        const topSection = section.offsetTop
        const midSection = topSection + (section.offsetHeight / 2)

        const distanceSection = midViewport - midSection

        const parallaxTags = section.querySelectorAll(`[data-parallax]`)

        // loop over each parallax tags

        parallaxTags.forEach(tag => {
            const speed = parseFloat(tag.getAttribute("data-parallax"))
            tag.style.transform = `translate(0, ${distanceSection * speed}px)`
        })
    })
 })