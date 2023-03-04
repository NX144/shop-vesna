$('.main-slider__block').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/header-component/arrow-left.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/header-component/arrow-right.png" alt="next"></button>',
});

$('.popular__wrapper').slick({
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/popular-products/prevArrow.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/popular-products/nextArrow.png"></button>',
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1546,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1155,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.inner').slick({
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/popular-products/prevArrow.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/popular-products/nextArrow.png"></button>',
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
        {
            breakpoint: 1687,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1379,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1034,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.about__block-inner').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/header-component/arrow-left.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/header-component/arrow-right.png" alt="next"></button>',
});

function mainCatalogOverlay(catalog, btn, close, active) {
    let overlayCatalog = document.querySelector(catalog),
        overlayBtn = document.querySelector(btn),
        overlayClose = document.querySelector(close),
        overlayActiveClass = active;

    overlayBtn.addEventListener("click", (e) => {
        overlayCatalog.classList.add(overlayActiveClass);
        document.querySelector("body").style.overflow = "hidden";
    })
    overlayClose.addEventListener("click", (e) => {
        overlayCatalog.classList.remove(overlayActiveClass);
        document.querySelector("body").style.overflow = "unset";
    })
}

mainCatalogOverlay(
    ".overlay-catalog", 
    ".header__list_item-btn", 
    ".overlay-catalog__close", 
    "overlay-catalog-active"
);


function toggleClassItems(myClass, myClassActive) {
    let myItemClass = document.querySelectorAll(myClass);

    myItemClass.forEach(item => {
        item.addEventListener("click", () => item.classList.toggle(myClassActive));
    })
}

toggleClassItems(
    ".popular__item-like",
    "like-active"
)

toggleClassItems(
    ".popular__item-btn",
    "popular__item-btn-active"
)

toggleClassItems(
    ".catalog-page__block2__item2-buttons-wrapper-heart",
    "catalog-page__block2__item2-buttons-wrapper-heart-active"
)

// function priceUpdate() {
//     let downPrice = document.querySelector(".catalog-page__filter_have-price-down"),
//         upPrice = document.querySelector(".catalog-page__filter_have-price-up"),
//         formFilter = document.querySelector(".catalog-page__filter"),
//         blockItems = document.querySelector(".catalog-page__block"),
//         resultItems = "";

//     formFilter.addEventListener("submit", (e) => {

//     });
// }



const sortBtn = document.querySelectorAll(".catalog-page__sort_btn");

sortBtn.forEach(item => {
    item.addEventListener("click", () => {
        if(item.classList.contains("catalog-page__sort_cube")) {
            item.classList.add("catalog-page__sort_cube-active");
            document.querySelector(".catalog-page__sort_list").classList.remove("catalog-page__sort_list-active");
            document.querySelector(".catalog-page__block").style.display = "flex";
            document.querySelector(".catalog-page__block2").style.display = "none";
        }
        if(item.classList.contains("catalog-page__sort_list")) {
            item.classList.add("catalog-page__sort_list-active");
            document.querySelector(".catalog-page__sort_cube").classList.remove("catalog-page__sort_cube-active");
            document.querySelector(".catalog-page__block2").style.display = "flex";
            document.querySelector(".catalog-page__block").style.display = "none";
        }
    })
})