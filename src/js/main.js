const { setTimeout } = require("core-js");


$('.owl-carousel2').slick({
    dots: true,
    slidesToShow: 1,
    padding: "50px",
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/header-component/arrow-left.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/header-component/arrow-right.png" alt="next"></button>',
});

let sliderWidth1 = document.querySelector(".slider-width1"),
    sliderWidth2 = document.querySelector(".slider-width2");

if(sliderWidth1 && sliderWidth2 && window.innerWidth <= 991) {
    sliderWidth1.style.display = "none";
    sliderWidth2.style.display = "block";
}



$('.main-slider__block').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/header-component/arrow-left.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/header-component/arrow-right.png" alt="next"></button>',
});

// $('.popular__wrapper').slick({
//     dots: false,
//     prevArrow: '<button type="button" class="slick-prev"><img src="../img/popular-products/prevArrow.png"></button>',
//     nextArrow: '<button type="button" class="slick-next"><img src="../img/popular-products/nextArrow.png"></button>',
//     infinite: false,
//     speed: 300,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 1780,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 1490,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 756,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 640,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 425,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//     ]
// });

let owlSliders = document.querySelectorAll(".owl-carousel");

if(owlSliders.length > 0) {
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            375: {
                items: 2,
                nav: false,
                dots: true,
            },
            425: {
                items: 2,
                nav: false,
                dots: true,
            },
            640: {
                items: 3,
            },
            768: {
                items: 4,
            },
            1200: {
                items: 5,
            },
            1645: {
                items: 5,
            }
        }
    })
}


$('.about__block-item').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/about-component/arrow-left.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/about-component/arrow-right.png" alt="next"></button>',
});

function mainCatalogOverlay(catalog, btn, close, active) {
    let overlayCatalog = document.querySelector(catalog),
        overlayBtn = document.querySelectorAll(btn),
        overlayClose = document.querySelector(close),
        overlayActiveClass = active;

    overlayBtn.forEach(item => {
        item.addEventListener("click", (e) => {
            overlayCatalog.classList.add(overlayActiveClass);
            document.querySelector("body").style.overflow = "hidden";
        })
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
    ".popular__item_descr-like",
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

const headerMenu = document.querySelector('.header-menu'),
      headerMenuClose = document.querySelector('.header-menu__close'),
      headerHumburger = document.querySelector('.header__block-hamburger');

headerHumburger.addEventListener('click', () => {
    headerMenu.classList.toggle("header-menu-active");
});

headerMenuClose.addEventListener('click', () => {
    headerMenu.classList.toggle("header-menu-active");
});



// Адаптив для sales

if(window.innerWidth <= 1835) {
    let salesBlocks = document.querySelectorAll(".sales__block");
    if(salesBlocks.length > 0) {
        salesBlocks.forEach(item => item.classList.contains("sales__block-50") ? item.classList.remove("sales__block-50") : null);
    }
}




// function expandElement(elem, collapseClass) {
//     // debugger;
//     elem.style.height = '';
//     elem.style.transition = 'none';

//     const startHeight = window.getComputedStyle(elem).height;

//     // Remove the collapse class, and force a layout calculation to get the final height
//     elem.classList.toggle(collapseClass);
//     const height = window.getComputedStyle(elem).height;

//     // Set the start height to begin the transition
//     elem.style.height = startHeight;

//     // wait until the next frame so that everything has time to update before starting the transition
//     requestAnimationFrame(() => {
//         elem.style.transition = '';

//         requestAnimationFrame(() => {
//             elem.style.height = height;
//         })
//     })

//     // Clear the saved height values after the transition
//     elem.addEventListener('transitionend', () => {
//         elem.style.height = '';
//         elem.removeEventListener('transitionend', arguments.callee);
//     });
// }

const footerItem = document.querySelectorAll(".footer__item");

// const footerItemLinks = document.querySelectorAll(".footer__item-links");

// footerItemLinks.forEach(item => {
//     expandElement(item, 'footer__item-links-active');
// })

footerItem.forEach(item => {
    // if(item.nextElementSibling.classList.contains("footer__item-links") && window.innerWidth < 768) {
    //     expandElement(item, 'footer__item-links-active');
    // }
    item.addEventListener("click", (e) => {
        if(window.innerWidth <= 786) {
            // console.dir(e.target);
            if(e.target && e.target.classList.contains("footer__item-title")) {
                e.target.nextElementSibling.classList.toggle("footer__item-links-active");
                e.target.lastChild.classList.toggle("arrow-active");
            }
            else if(e.target && e.target.parentNode.classList.contains("footer__item-title")) {
                e.target.classList.toggle("arrow-active");
                e.target.parentNode.nextElementSibling.classList.toggle("footer__item-links-active");
            }
        }
            
            
            // const content = e.target.nextElementSibling;
            // expandElement(content, 'footer__item-links-active');
    })
})


let filterBtnItem = document.querySelector(".catalog-page__sort_filt"),
    filerModal = document.querySelector(".catalog-page__filter"),
    filterClose = document.querySelector(".catalog-page__close");
    

if(filterBtnItem && filerModal && filterClose) {
    filterBtnItem.addEventListener("click", () => {
        filerModal.classList.add("catalog-page-active");
    })
    filterClose.addEventListener("click", () => {
        filerModal.classList.remove("catalog-page-active");
    })
}

const ccTimes = document.querySelector('.category-catalog__menu_wrap-times'),
      ccMenu = document.querySelector('.category-catalog__menu_wrap'),
      ccBtn = document.querySelector('.category-catalog__btn-cat');

ccBtn.addEventListener('click', () => {
    ccMenu.classList.add('category-catalog__menu_wrap-active');
    document.body.classList.add('overflow-yh');
});
ccTimes.addEventListener('click', () => {
    ccMenu.classList.remove('category-catalog__menu_wrap-active');
    document.body.classList.remove('overflow-yh');
});