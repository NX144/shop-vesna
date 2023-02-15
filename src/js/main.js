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
            breakpoint: 1024,
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
$('.main-slider__block').slick({
    dots: true,
    infinite: true,
    speed: 300,
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