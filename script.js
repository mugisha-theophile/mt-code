var allFilters = document.querySelectorAll('section.btns li.btn');
var allCards = document.querySelectorAll('section.gallery div.card');

for (var i = 0; i < allFilters.length; i++) {
    allFilters[i].addEventListener('click', myFunction);
}

function myFunction() {
    var currentTab = document.querySelector('section.btns .active');
    currentTab.classList.remove('active');

    this.classList.add('active');

    var filter = this.getAttribute('data-filter');

    if (filter != 'all') {
        for (let i = 0; i < allCards.length; i++) {
            allCards[i].classList.add('hide');
            allCards[i].classList.remove('active');
            var currentItem = allCards[i].getAttribute('data-item')
            if (currentItem == filter) {
                allCards[i].classList.add('active');
                allCards[i].classList.remove('hide');
            }
        }
    }
    else {
        for (let i = 0; i < allCards.length; i++) {
            allCards[i].classList.remove('hide');
            allCards[i].classList.add('active');
        }
    }
}

const photos = [
    {
        url: "mcd.jpg",
        heading: "",
        description: "Get such kind of website at affordable price.",
    },
    {
        url: "mcd.jpg",
        heading: "",
        description: "Hire me for such website and many more.",
    },
    {
        url: "mcd2.jpg",
        heading: "",
        description: "Get such kind of website within short time.",
    },
    {
        url: "blog-4.png",
        heading: "",
        description:""
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

