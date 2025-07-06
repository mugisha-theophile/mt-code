const nightModeToggle = document.getElementById('nightModeToggle');
const body = document.body;

nightModeToggle.addEventListener('change', () => {
    if (nightModeToggle.checked) {
        body.classList.add('night-mode');
    } else {
        body.classList.remove('night-mode');
    }
});


const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroungColor = '#29323c';
    }
    else{
        header.style.backgroungColor = 'transparent'
    }
})

menu_item.forEach(item =>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');

    })
})

const photos = [
    {
        url: "mcd.jpg",
        heading: "",
        description: "Get such kind of website at affordable price.",
    },
    {
        url: "mcd2.jpg",
        heading: "",
        description: "Hire me for such website and many more.",
    },
    {
        url: "mcd3.jpg",
        heading: "",
        description: "Get such kind of website within short time.",
    },
    {
        url: "pro1.jpg",
        heading: "",
        description: "Get a premium quality website for your business at friendly price",
    }
    // Add more photo objects here
];

let currentPhotoIndex = 0;
const currentPhoto = document.getElementById("currentPhoto");
const photoHeading = document.getElementById("photoHeading");
const photoDescription = document.getElementById("photoDescription");

function showPhoto(index) {
    if (index >= 0 && index < photos.length) {
        currentPhoto.src = photos[index].url;
        photoHeading.textContent = photos[index].heading;
        photoDescription.textContent = photos[index].description;
        currentPhotoIndex = index;
    }
}

function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showPhoto(currentPhotoIndex);
}

function showPrevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    showPhoto(currentPhotoIndex);
}

// show search
const searchButton = document.querySelector('.t-search'),
    tClose = document.querySelector('.search-close'),
    showClass = document.querySelector('.site');
searchButton.addEventListener('click', function(){
    showClass.classList.toggle('showsearch')
})    
tClose.addEventListener('click', function(){
    showClass.classList.remove('showsearch')
})

//javascript of responsive navigation menu    
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

//javascript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      sliderNav(i);

    });
});


document.addEventListener("DOMContentLoaded", function() {
    const animatedParagraph = document.getElementById("animated-paragraph");
    const paragraphText = "Hello! everyone you're highly welcome to (M.T) coding and programing an innovative IT platform all over the world.Get started with us for more offers now";
    let currentIndex = 0;

    function animateParagraph() {
        if (currentIndex < paragraphText.length) {
            const letterSpan = document.createElement("span");
            letterSpan.textContent = paragraphText[currentIndex];
            letterSpan.classList.add("animated-letter");
            animatedParagraph.appendChild(letterSpan);

            setTimeout(function() {
                letterSpan.style.opacity = 1;
                letterSpan.style.transform = "translateY(0)";
                currentIndex++;
                animateParagraph();
            }, 100);
        } else {
            setTimeout(function() {
                hideParagraph();
            }, 1000); // Wait for 1 second before hiding the paragraph
        }
    }

    function hideParagraph() {
        const letterSpans = document.querySelectorAll(".animated-letter");
        letterSpans.forEach(function(letterSpan, index) {
            setTimeout(function() {
                letterSpan.style.opacity = 0;
                letterSpan.style.transform = "translateY(-20px)";
                if (index === letterSpans.length - 1) {
                    setTimeout(function() {
                        animatedParagraph.innerHTML = ""; // Clear the paragraph
                        currentIndex = 0; // Reset the currentIndex for future animation
                        animateParagraph(); // Start the animation again
                    }, 1000); // Wait for 1 second before starting the animation again
                }
            }, index * 100); // Delay each letter's disappearance
        });
    }

    // Start the animation
    animateParagraph();
});

document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");
    let currentIndex = 0;

    function showImage(index) {
        imageContainers.forEach((container, i) => {
            if (i === index) {
                container.style.transform = "translateX(0)";
            } else {
                const offset = (i - index) * 100;
                container.style.transform = `translateX(${offset}%)`;
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % imageContainers.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + imageContainers.length) % imageContainers.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 2000); // Auto next image every 3 seconds

    // Initial display
    showImage(currentIndex);

    // Event listeners for swipe
    let touchStartX = null;
    let touchEndX = null;

    document.addEventListener("touchstart", function (event) {
        touchStartX = event.touches[0].clientX;
    });

    document.addEventListener("touchend", function (event) {
        touchEndX = event.changedTouches[0].clientX;

        if (touchStartX - touchEndX > 50) {
            // Swipe left
            nextImage();
        } else if (touchEndX - touchStartX > 50) {
            // Swipe right
            prevImage();
        }
    });
});
