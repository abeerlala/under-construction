window.addEventListener("load", ()=>{
    document.querySelector(".loader").style.display = "none";
})

AOS.init();

// ToTop Logic

const toTop = document.querySelector("#toTop");
document.addEventListener("scroll", () => {
    scrollY > 300 ? toTop.style.display = "grid" : toTop.style.display = "none";
});

toTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Home Page Slide's Logic

const pageName = location.href.split("/").pop();
if (pageName == "" || pageName == "index.html") {
    let swiper;

    document.addEventListener('DOMContentLoaded', function () {
        swiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.carouselRight',
                prevEl: '.carouselLeft',
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            speed: 1500
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight") {
                swiper.slideNext(); // Move to next slide
            } else if (e.key === "ArrowLeft") {
                swiper.slidePrev(); // Move to previous slide
            }
        });

        const pausePlayIcon = document.getElementById('pausePlayIcon');
        let isPaused = false;

        pausePlayIcon.addEventListener('click', () => {
            if (isPaused) {
                swiper.autoplay.start();
                pausePlayIcon.classList.remove('fa-play');
                pausePlayIcon.classList.add('fa-pause');
            } else {
                swiper.autoplay.stop();
                pausePlayIcon.classList.remove('fa-pause');
                pausePlayIcon.classList.add('fa-play');
            }
            isPaused = !isPaused;
        });
    });
}

// Navbar Dropdown Logic

function myFunction() {
    document.getElementById("myDropdown").style.display = "flex";;
}
function myFunction2() {
    document.getElementById("myDropdown").style.display = "none";;
}

function active() {
    document.getElementById("myDropdown2").style.display = "flex";;
}
function active2() {
    document.getElementById("myDropdown2").style.display = "none";;
}

// Product Cards Logic

const images = document.querySelectorAll(".imageProduct img");
images.forEach(img => {
    img.addEventListener("click", () => {
        const src = img.src;
        window.open(src)
    });
});

const productCard = document.querySelectorAll(".productCard");
productCard.forEach(card => {
    const img = card.querySelector("img");
    const a = card.querySelector("a");
    const title = card.querySelector("div.product-title");
    a.href = `${a.href}Hello, I’m interested in the ${img.alt}. Kindly send me the price and availability of the ${img.alt}`;
    card.id = title.innerText.replaceAll(' ', '');
});

// Material Page Logic

const tabBtns = document.querySelectorAll(".tabBtn");
tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnTarget = btn.classList.item(1);
        document.querySelector(`#${btnTarget}`).scrollIntoView({ block: "center" })
    });
});

if (pageName == "material.html") {
    const tabs = document.querySelector(".tabs");
    const tabToggleBtn = tabs.querySelector(".fa-solid");
    let showed = true;
    tabToggleBtn.addEventListener("click", () => {
        if (showed) {
            tabToggleBtn.classList.remove("fa-angle-up")
            tabToggleBtn.classList.add("fa-angle-down")
            tabBtns.forEach(btn => { btn.style.display = "none"; });
            showed = false;
            tabToggleBtn.parentElement.style.width = "fit-content";
        } else if (showed == false) {
            tabToggleBtn.classList.add("fa-angle-up")
            tabToggleBtn.classList.remove("fa-angle-down")
            tabBtns.forEach(btn => { btn.style.display = "block"; });
            showed = true;
            tabToggleBtn.parentElement.style.width = "100%";
        }
    });
}

// Search Functions

function filterSearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search2");
    filter = input.value.trim().toUpperCase();
    ul = document.querySelector("#myUL2");
    li = ul.querySelectorAll("li");
    let anyVisible = false;
    for (i = 0; i < li.length; i++) {
        a = li[i].querySelector("a");
        if (a) {
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
                anyVisible = true;
            } else {
                li[i].style.display = "none";
            }
        }
    }
    let noResults = document.getElementById("noResults2");
    if (!anyVisible) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

function filterSearch2() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.trim().toUpperCase();
    ul = document.querySelector("#myUL");
    li = ul.querySelectorAll("li");
    let anyVisible = false;
    for (i = 0; i < li.length; i++) {
        a = li[i].querySelector("a");
        if (a) {
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
                anyVisible = true;
            } else {
                li[i].style.display = "none";
            }
        }
    }
    let noResults = document.getElementById("noResults");
    if (!anyVisible) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    if (screen.width <= 600) {
        document.querySelectorAll(".productCard").forEach(el => el.classList.remove("specialCard"))
        document.querySelectorAll(".productCardInner1").forEach(el => el.classList.remove("productCardInner1"))
        document.querySelectorAll(".imageProduct").forEach(el => el.classList.remove("specialImage"))
        document.querySelectorAll(".product-details").forEach(el => el.classList.remove("product-detailsspecial"))
        document.querySelectorAll(".getAQuote").forEach(el => el.classList.remove("specialQuote"))
        document.querySelectorAll(".imageProduct img").forEach(el => { el.style.height = "" })

        if (location.href.split("/").pop().includes("ecosolvent.html") || location.href.split("/").pop().includes("ecosolvent")) {
            const image1 = document.querySelector("#specialImage1");
            const image2 = document.querySelector("#specialImage2");
            image1.src = "Images/Products/es2.webp";
            image2.src = "Images/Products/es1.webp";
            image1.parentElement.style.width = "40%";
            image2.parentElement.style.width = "60%";
        }
    }
});

const videos = document.querySelectorAll(".videoInner");
const vidPlayer = document.querySelector("#lightbox");
const videoplay = document.querySelector("#videoSelf");

videos.forEach(video => {
    const btn = video.querySelector(".playPauseBtn");
    const src = video.querySelector("img").getAttribute("data-video-src");
    btn.addEventListener("click", () => {
        vidPlayer.classList.add("activevideo");
        videoplay.setAttribute("src", `Videos/${src}`)
    })
})

const closeLightbox = () => {
    vidPlayer.classList.remove("activevideo")
    videoplay.src = "";
}