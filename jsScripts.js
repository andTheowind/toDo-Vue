let headerTheme = document.querySelector('.header');
let logo = document.querySelector('.logo');
let switchThemeBtn = document.querySelector('.slider');
let wrapper = document.querySelector('#wrapper');
let h1 = document.querySelector('h1');
let formInput = document.querySelector('.form > input');
let footer = document.querySelector('.footer');
let hoiDoesItWork = document.querySelector('.hoiDoesItWork');
let card = document.querySelector('.card');

switchThemeBtn.addEventListener('click', function () {

    headerTheme.classList.toggle('dark-theme-header');
    wrapper.classList.toggle('dark-theme-body');
    headerTheme.classList.toggle('dark-theme-logo');
    formInput.classList.toggle('dark-input');
    h1.classList.toggle('dark-theme-h1');
    footer.classList.toggle('dark-footer');
    card.classList.toggle('dark-theme-card');
    //    if(wrapper.classList.contains('light-theme-body') == true) {
    //        wrapper.classList.remove('light-theme-body');
    //        wrapper.classList.add('dark-theme-body');
    //        headerTheme.classList.remove('light-theme-header');
    //        headerTheme.classList.add('dark-theme-header');
    //        
    //        headerTheme.classList.remove('light-theme-logo');
    //        headerTheme.classList.add('dark-theme-logo');
    //        
    //        
    //        
    //    } else {
    //        wrapper.classList.remove('dark-theme-body');
    //        wrapper.classList.add('light-theme-body');
    //        headerTheme.classList.remove('dark-theme-header');
    //        headerTheme.classList.add('light-theme-header');
    //        
    //        headerTheme.classList.remove('dark-theme-logo');
    //        headerTheme.classList.add('light-theme-logo');
    //    }

})
hoiDoesItWork.addEventListener('click', function () {
    alert('Очень хорошо работает');
})
