/*==================ASIDE========================*/

let filterBlock = document.querySelector('.filter');
let filter = document.querySelector('.filter__title');
let aside = document.querySelector('.aside');
let button = document.querySelector('.close');
let wrapper = document.querySelector('.wrapper')



filter.addEventListener("click", function (e) {
    console.log('Clicked on FILTER');
    aside.classList.toggle('mobile-aside-active');
    button.classList.toggle('_hide');
    filterBlock.classList.toggle('_hide');
    document.body.classList.toggle('_lock');
    wrapper.classList.toggle('_lock-wrapper');
})

button.addEventListener("click", function (e) {
    console.log('Clicked on button');
    aside.classList.toggle('mobile-aside-active');
    button.classList.toggle('_hide');
    filterBlock.classList.toggle('_hide');
    document.body.classList.toggle('_lock');
    wrapper.classList.toggle('_lock-wrapper');
});

/*==================/ ASIDE========================*/

/*=======================SORT=======================*/
let sortButton = document.querySelector('.sort-items');
let popupSorting = document.querySelector('.popup-sorting');

sortButton.addEventListener("click", function (e) {
    console.log('Clicked on SORT');
    
    sortButton.classList.toggle('сhoice-sorting');
    popupSorting.classList.toggle('_hide');
})
/*=======================/ SORT=======================*/

 /*  if (aside.classList.contains("mobile-aside-active")) {
        console.log('true');
        
    } else {
        console.log('false');
        
    }*/
