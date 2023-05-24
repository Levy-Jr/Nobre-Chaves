const btnHambuger = document.querySelector('[data-menu-button]')
const menuActive = document.querySelectorAll('[data-menu]')

btnHambuger.addEventListener('click', () => {
    menuActive.forEach(menu => menu.toggleAttribute('data-active-menu'))
})

const navLinks = document.querySelectorAll(".header-navigation__li")

navLinks.forEach(li => {
    li.addEventListener("click", () =>{
        menuActive.forEach(menu => menu.removeAttribute("data-active-menu"))
    }
)})

/* tab panel */

const changeActiveElements = (elements) => {
    const tabButtonsParent = document.querySelector('[data-tab-buttons-parent]')
    const activeElement = tabButtonsParent.querySelectorAll('.active')
    if(activeElement) {
        activeElement.forEach(activeEl => activeEl.classList.remove('active'))
    }

    elements.classList.add('active')
}

const changeTabPanel = (index) => {
    const tabPanelsParent = document.querySelector('[data-tab-panel-wrapper]')
    const activePanel = tabPanelsParent.querySelectorAll('.active')
    if(activePanel) {
        activePanel.forEach(activePanel => activePanel.classList.remove('active'))
    }

    tabPanelsParent.children[index].classList.add('active')
}

const tabButtons = document.querySelectorAll('[data-tab-button]')

tabButtons.forEach((e, i) => {
    e.addEventListener('click', () => {
        if(!e.classList.contains('active')){
            changeActiveElements(e)
            changeTabPanel(i)
        }
    })
})

const carouselVideoButton = document.querySelectorAll('[data-carousel-video-button]')

carouselVideoButton.forEach(button => {
    const offset = button.dataset.carouselVideoButton === "next" ? 1 : -1

    button.addEventListener('click', () => {
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]')
        const activeSlide = slides.querySelector('[data-active]')
        activeSlide.querySelector('video').pause()
        let newIndex = [...slides.children].indexOf(activeSlide) + offset

        if(newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

const carouselImgButton = document.querySelectorAll('[data-carousel-img-button]')

/* carousel */
const sliderContainer = document.querySelector('.gallery-container')
/* carousel */
const gallerySlider = document.querySelector('.gallery-slider')

const prevButton = document.querySelector('.gallery-prevButton')
const nextButton = document.querySelector('.gallery-nextButton')

const handleButtons = () => {
    let sliderPosition = parseInt(getComputedStyle(gallerySlider).getPropertyValue("--slider-position"))

    if(sliderPosition <= -1) {
        prevButton.style.display = "none"
    } else {
        prevButton.style.display = "block"
    }

    if(sliderPosition >= gallerySlider.children.length - 2) {
        nextButton.style.display = "none"
    } else {
        nextButton.style.display = "block"
    }
}

handleButtons()

prevButton.addEventListener('click', () => {/* 
    const itemCount = gallerySlider.children.length
    const itemsPerScreen = parseInt(getComputedStyle(gallerySlider).getPropertyValue("--items-per-screen"))
    const responsiveCount = Math.ceil(itemCount / itemsPerScreen) */

    let sliderIndex = parseInt(getComputedStyle(gallerySlider).getPropertyValue("--slider-index"))
    let sliderPosition = parseInt(getComputedStyle(gallerySlider).getPropertyValue("--slider-position"))

    
    if(sliderPosition >= 0){
        gallerySlider.style.setProperty("--slider-position", sliderPosition - 1)
        gallerySlider.style.setProperty("--slider-index", sliderIndex - 1)
    } 
    
    handleButtons()
})


nextButton.addEventListener('click', () => {
/*     const itemCount = gallerySlider.children.length
    const itemsPerScreen = parseInt(getComputedStyle(gallerySlider).getPropertyValue("--items-per-screen"))
    const responsiveCount = Math.ceil(itemCount / itemsPerScreen) */

    let sliderIndex = parseInt(getComputedStyle(gallerySlider).getPropertyValue("--slider-index"))
    let sliderPosition = parseInt(getComputedStyle(gallerySlider).getPropertyValue("--slider-position"))

    if(sliderPosition + 1 <= gallerySlider.children.length - 2){
        gallerySlider.style.setProperty("--slider-position", sliderPosition + 1)
        gallerySlider.style.setProperty("--slider-index", sliderIndex + 1)
    }
    handleButtons()
})