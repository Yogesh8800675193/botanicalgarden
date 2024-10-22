const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])


// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}


const slides = document.querySelector('.slides');
        const slideImages = document.querySelectorAll('.slides img');
        // const dots = document.querySelectorAll('.dot');
        let currentIndex = 0;

        function showSlide(index) {
            if (index >= slideImages.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = slideImages.length - 1;
            } else {
                currentIndex = index;
            }
            slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
            updateDots();
        }

        function updateDots() {
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        document.querySelector('.prev').addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });

        document.querySelector('.next').addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                showSlide(i);
            });
        });


        // gallery js

        // let  currentIndex = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.slides');
    const totalImages = slider.children.length;

    currentIndex += direction;

    // Loop around if we reach the end or start
    if (currentIndex < 0) {
        currentIndex = totalImages - 6; // Adjust if less than 4 images
    } else if (currentIndex > totalImages - 6) {
        currentIndex = 0;
    }

    // Move the slider
    const offset = currentIndex * -25; // Each image takes up 25% width
    slider.style.transform = `translateX(${offset}%)`;
}