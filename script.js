let increase_btn = document.querySelector(".increase-btn");
let amount = document.querySelector(".amount");
let counter_btn = document.querySelectorAll(".counter-btn");
let cartCounter = document.querySelector(".cart-counter");
let btn_cart = document.querySelector(".btn-cart");
let cartIcon = document.querySelector(".cart-icon");
let cartOpen = document.querySelector(".cart-open");
let emptyCartText = document.querySelector(".empty-cart-text");
let itemContainer = document.querySelectorAll(".item-container");
let totalItem = document.querySelector(".total-item");
let totalAmount = document.querySelector(".total-amount");
let deleteBtnImg = document.querySelector(".delete-btn-img");
let displayedProductPreview = document.querySelector(".displayed-product-preview");
let mobileProductPreview = document.querySelector(".mobile-product-preview");
let displayedExtraShoesImg = document.querySelectorAll(".displayed-extra-shoes-img");
let largeProductPreview = document.querySelector(".large-product-preview")
let largeExtraShoesImg = document.querySelectorAll(".large-extra-shoes-img");
let previousArrowBtn = document.querySelector(".previous-arrow-btn");
let nextArrowBtn = document.querySelector(".next-arrow-btn");
let mobilePreviousArrowBtn = document.querySelector(".mobile-previous-arrow-btn");
let mobileNextArrowBtn = document.querySelector(".mobile-next-arrow-btn");


let ExtraShoesImgUrl = {
    "images/image-product-1-thumbnail.jpg": "images/image-product-1.jpg",
    "images/image-product-2-thumbnail.jpg": "images/image-product-2.jpg",
    "images/image-product-3-thumbnail.jpg": "images/image-product-3.jpg",
    "images/image-product-4-thumbnail.jpg": "images/image-product-4.jpg"
};
let ProductPreviewImgUrl = ["images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg"]


let tempAmount = 0;
counter_btn.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn === increase_btn) {
            tempAmount++
        }
        else {
            tempAmount--
            if (tempAmount < 0) {
                tempAmount = 0
            }
        }
        amount.innerText = tempAmount
    })

})

btn_cart.addEventListener("click", () => {
    emptyCartText.classList.add("display-none")
    if (tempAmount > 0) {
        cartCounter.classList.add("display-block");
        cartCounter.innerText = tempAmount
        itemContainer.forEach(item => {
            item.classList.remove("display-none")
        })
        totalItem.innerText = tempAmount
        totalAmount.innerText = `$${125.00 * tempAmount}.00`
    }
    else {
        cartCounter.classList.remove("display-block");
        emptyCartText.classList.remove("display-none")
        itemContainer.forEach(item => {
            item.classList.add("display-none")
        })
    }
})

cartIcon.addEventListener("click", () => {
    cartOpen.classList.toggle("display-flex")
    if (tempAmount > 0) {
        emptyCartText.classList.add("display-none")
    }
})

deleteBtnImg.addEventListener("click", () => {
    itemContainer.forEach(item => {
        item.classList.add("display-none")
    })
    emptyCartText.classList.remove("display-none")
    cartCounter.classList.remove("display-block");
})


displayedProductPreview.addEventListener("click", () => {
    document.querySelector(".overlay-large-img").style = "display: display-flex";
    document.querySelector(".container").classList.add("filter")
})

document.querySelector(".close-icon").addEventListener("click", () => {
    document.querySelector(".overlay-large-img").style = "display: none";
    document.querySelector(".container").classList.remove("filter")
})


largeExtraShoesImg.forEach(extraImg => {
    extraImg.addEventListener("click", () => {
        largeExtraShoesImg.forEach(img => img.classList.remove("opacity"));
        extraImg.classList.add("opacity");
        const relativeSrc = extraImg.src.split("main/").at(-1);
        for (const imgUrl in ExtraShoesImgUrl) {
            if (relativeSrc == imgUrl) {
                largeProductPreview.src = ExtraShoesImgUrl[imgUrl]
            }
        }
    })
})

displayedExtraShoesImg.forEach(extraImg => {
    extraImg.addEventListener("click", () => {
        displayedExtraShoesImg.forEach(img => img.classList.remove("opacity"));
        extraImg.classList.add("opacity");
        const relativeSrc = extraImg.src.split("main/").at(-1);
        for (const imgUrl in ExtraShoesImgUrl) {
             if (relativeSrc === imgUrl) {
                displayedProductPreview.src = ExtraShoesImgUrl[imgUrl]
             }
        }
    })
})


nextArrowBtn.addEventListener("click", () => {
    let currentPreviewImg = largeProductPreview.src.split("main/").at(-1)
    for (let i = 0; i < ProductPreviewImgUrl.length; i++) {
        if (currentPreviewImg === ProductPreviewImgUrl[3]) {
            currentPreviewImg = ProductPreviewImgUrl[i]
            largeProductPreview.src = ProductPreviewImgUrl[i]
        }
        else if (ProductPreviewImgUrl[i] === currentPreviewImg) {
            largeProductPreview.src = ProductPreviewImgUrl[i + 1]
            currentPreviewImg = ProductPreviewImgUrl[i + 1]
            break
        }

    }
})

previousArrowBtn.addEventListener("click", () => {
    let currentPreviewImg = largeProductPreview.src.split("main/").at(-1)
    for (let i = 0; i < ProductPreviewImgUrl.length; i++) {
        if (currentPreviewImg === ProductPreviewImgUrl[0]) {
            currentPreviewImg = ProductPreviewImgUrl[3]
            largeProductPreview.src = ProductPreviewImgUrl[3]
        }
        else if (ProductPreviewImgUrl[i] === currentPreviewImg) {
            largeProductPreview.src = ProductPreviewImgUrl[i - 1]
            currentPreviewImg = ProductPreviewImgUrl[i - 1]
            break
        }

    }
})

mobileNextArrowBtn.addEventListener("click",()=>{
    let currentPreviewImg = mobileProductPreview.src.split("main/").at(-1)
    for (let i = 0; i < ProductPreviewImgUrl.length; i++) {
        if (currentPreviewImg === ProductPreviewImgUrl[3]) {
            currentPreviewImg = ProductPreviewImgUrl[i]
            mobileProductPreview.src = ProductPreviewImgUrl[i]
            break
        }
        else if (ProductPreviewImgUrl[i] === currentPreviewImg) {
            mobileProductPreview.src = ProductPreviewImgUrl[i + 1]
            currentPreviewImg = ProductPreviewImgUrl[i + 1]
            break
        }

    }
})

mobilePreviousArrowBtn.addEventListener("click", () => {
    let currentPreviewImg = mobileProductPreview.src.split("main/").at(-1)
    for (let i = 0; i < ProductPreviewImgUrl.length; i++) {
        if (currentPreviewImg === ProductPreviewImgUrl[0]) {
            currentPreviewImg = ProductPreviewImgUrl[3]
            mobileProductPreview.src = ProductPreviewImgUrl[3]
            break
        }
        else if (ProductPreviewImgUrl[i] === currentPreviewImg) {
            mobileProductPreview.src = ProductPreviewImgUrl[i - 1]
            currentPreviewImg = ProductPreviewImgUrl[i - 1]
            break
        }

    }
})

document.querySelector(".hamburger-icon").addEventListener("click",()=>{
    document.querySelector(".slider").classList.add("display-flex")
})

document.querySelector(".close-btn").addEventListener("click",()=>{
    document.querySelector(".slider").classList.remove("display-flex")
})


