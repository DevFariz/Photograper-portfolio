console.log("при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием (20) \n кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными (5) \n при клике по надписи ru англоязычная страница переводится на русский язык (10) \n при клике по надписи en русскоязычная страница переводится на английский язык (10) \n надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем (5) \n тёмная тема приложения сменяется светлой (10) \n светлая тема приложения сменяется тёмной (10) \n после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) (5) \n выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы (0) \n сложные эффекты для кнопок при наведении и/или клике(5)" )

import i18Obj from "./translate.js"


// general

const mediaQuery = window.matchMedia('(max-width: 770px)');

// header 

let burgerMenu = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let menuLink = document.querySelectorAll(".menu__link");

burgerMenu.addEventListener('click', toggleMenu);

menuLink.forEach(n => n.addEventListener("click", closeMenu));

function toggleMenu(){
    menu.classList.toggle('menu_active');
    burgerMenu.classList.toggle('menu_active');
}

function closeMenu(){
    menu.classList.remove('menu_active');
    burgerMenu.classList.remove('menu_active');
}

/******************* PORTFOLIO *******************/  
const portfolioBtn = document.querySelectorAll('.portfolio-nav__btn');
const portfolioImages = document.querySelectorAll('.portfolio__img');
const portfolioBtns = document.querySelector('.portfolio-nav');



portfolioBtn.forEach((btn) => btn.addEventListener('click', function(event){

    let btnActive = event.target;

    portfolioBtn.forEach((btn) => btn.classList.remove('portfolio-nav__btn_dark_active'));
    btnActive.classList.add('portfolio-nav__btn_dark_active');

}));


function changeImage(event) {
    let seasons = event.target.dataset.season;
    if(event.target.classList.contains('portfolio-nav__btn')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${seasons}/${index + 1}.jpg`);
    }
}

    portfolioBtns.addEventListener('click', changeImage);



/************************ dark and light modes ************************** */ 

let changeThemeBtn = document.querySelector('.toggle-theme');
let lightTheme = document.querySelector('.light-theme');
let darkTheme = document.querySelector('.dark-theme');

function changeTheme(){
    lightTheme.classList.toggle('theme_active');
    darkTheme.classList.toggle('theme_active');


    if(darkTheme.classList.contains('theme_active')){
        
        // document.querySelectorAll(".portfolio-nav__btn_dark_active").forEach((btn) => {
        //     btn.classList.remove("portfolio-nav__btn_dark_active", "portfolio-nav__btn_light_active");
        //     btn.classList.add("portfolio-nav__btn_light_active");
        // });
        
        //general start
        document.body.style.backgroundColor = "#FFFFFF";
        document.querySelectorAll(".btn").forEach((btn) => {
            btn.classList.remove("btn", "btn_light");
            btn.classList.add('btn_light');
        });
        document.querySelectorAll(".section-title__container").forEach((title) => {
            title.classList.remove("section-title__container", "section-title__container_light");
            title.classList.add("section-title__container_light");
        });
        //general end

        // header and hero start
        document.querySelector('.logo-pic').style.fill = "#1C1C1C";
        document.querySelector('.header-container').style.backgroundImage = "url('./assets/img/header-bg-light.jpg')";
        document.querySelector(".hero__title").style.color = "#1C1C1C";
        document.querySelector(".hero__text").style.color = "#1C1C1C";
        document.querySelector('.hero').style.backgroundImage = "url('./assets/img/header-bg-light.jpg')";
        if (mediaQuery.matches) {
            document.querySelector('.hero').style.backgroundImage = "url('./assets/img/header-tablet-bg-light.jpg')";
          }
        document.querySelectorAll('.section-title').forEach((title) => {
            title.style.backgroundColor = "#ffffff";
            title.style.color = "#1C1C1C";
        });
        document.querySelectorAll('.menu__link').forEach((link) => {
            link.classList.remove("menu__link", "menu__link_light");
            link.classList.add("menu__link_light");
        });
        document.querySelector('.hero__btn').style.backgroundColor = "#ffffff";
        document.querySelector('.hero__btn').style.color = "#1C1C1C";
        document.querySelectorAll(".lang_dark").forEach((lang) => {
            lang.classList.remove("lang_dark", "lang_light");
            lang.classList.add("lang_light");
        });
        document.querySelector(".devider").style.color = "#1C1C1C";
        // header and hero end

        //skills start
        document.querySelectorAll('.skill__name').forEach((name) => {
            name.style.color = "#1C1C1C";
        })
        document.querySelectorAll('.skill__info').forEach((info) => {
            info.style.color = "#1C1C1C";
        })

        //skills end

        //portfolio start
        document.querySelectorAll(".portfolio-nav__btn_dark").forEach((btn) => {
            btn.classList.remove("portfolio-nav__btn_dark", "portfolio-nav__btn_light");
            btn.classList.add("portfolio-nav__btn_light");
        });
        //portfolio end

        //price start
        document.querySelectorAll('.price__title').forEach((title) => {
            title.style.color = "#1C1C1C";
        });
        document.querySelectorAll('.price__info').forEach((info) => {
            info.style.color = "#1C1C1C";
        });
        //price end

        //contact start
        document.querySelector(".contacts").style.backgroundImage = "url('./assets/img/contacts-bg-light.jpg')";
        document.querySelector('.contacts__title').style.color = "#1C1C1C";
        document.querySelector('.form__submit').style.backgroundColor = "#ffffff";
        document.querySelector('.form__submit').style.color = "#000000";
        document.querySelectorAll(".form__dark").forEach((inp) => {
            inp.classList.remove("form__dark", "form__light");
            inp.classList.add("form__light");
        });
        //contact end

        //footer start
        document.querySelectorAll(".github span").forEach((el) => {
            el.style.color = "#1C1C1C";
        });
        document.querySelector('.github__link').style.color = "#1C1C1C";
        document.querySelector(".rolling__scopes-link").style.color = "#1C1C1C";
        document.querySelectorAll('.social__pic').forEach((pic) => {
            pic.style.fill = "#1C1C1C";
        });
        //footer end
    }
    else if(lightTheme.classList.contains('theme_active')){

        // document.querySelectorAll(".portfolio-nav__btn_light_active").forEach((btn) => {
        //     btn.classList.remove("portfolio-nav__btn_light_active", "portfolio-nav__btn_dark_active");
        //     btn.classList.add("portfolio-nav__btn_dark_active");
        // });
        

        //general start
        document.body.style.backgroundColor = "#000000";
        document.querySelectorAll(".btn_light").forEach((btn) => {
            btn.classList.remove("btn_light", "btn");
            btn.classList.add('btn');
        });
        document.querySelectorAll(".section-title__container_light").forEach((title) => {
            title.classList.remove("section-title__container", "section-title__container_light");
            title.classList.add("section-title__container");
        });
        //general end


        // header and hero start
        document.querySelector('.logo-pic').style.fill = "#ffffff";
        document.querySelector('.header-container').style.backgroundImage = "url('./assets/img/header-bg.jpg')";
        document.querySelector(".hero__title").style.color = "#ffffff";
        document.querySelector(".hero__text").style.color = "#ffffff";
        document.querySelector('.hero').style.backgroundImage = "url('./assets/img/header-bg.jpg')";
        document.querySelectorAll('.section-title').forEach((title) => {
            title.style.backgroundColor = "#000000";
            title.style.color = "#BDAE82";
        });
        document.querySelectorAll('.menu__link_light').forEach((link) => {
            link.classList.remove("menu__link", "menu__link_light");
            link.classList.add("menu__link");
        });
        document.querySelector('.hero__btn').style.backgroundColor = "#BDAE82";
        document.querySelector('.hero__btn').style.color = "#000000";
        document.querySelectorAll(".lang_light").forEach((lang) => {
            lang.classList.remove("lang_dark", "lang_light");
            lang.classList.add("lang_dark");
        });
        document.querySelector(".devider").style.color = "#ffffff";
        // header and hero end

        //skills start

        document.querySelectorAll('.skill__name').forEach((name) => {
            name.style.color = "#ffffff";
        });
        document.querySelectorAll('.skill__info').forEach((info) => {
            info.style.color = "#ffffff";
        });
        //skills end

        //portfolio start
        document.querySelectorAll(".portfolio-nav__btn_light").forEach((btn) => {
            btn.classList.remove("portfolio-nav__btn_dark", "portfolio-nav__btn_light");
            btn.classList.add("portfolio-nav__btn_dark");
        });
        //portfolio end

        //price start
        document.querySelectorAll('.price__title').forEach((title) => {
            title.style.color = "#ffffff";
        });
        document.querySelectorAll('.price__info').forEach((info) => {
            info.style.color = "#ffffff";
        });
        //price end

        //contact start
        document.querySelector(".contacts").style.backgroundImage = "url('./assets/img/contacts-bg.jpg')";
        document.querySelector('.contacts__title').style.color = "#BDAE82";
        document.querySelector('.form__submit').style.backgroundColor = "#BDAE82";
        document.querySelector('.form__submit').style.color = "#000000";
        document.querySelectorAll(".form__light").forEach((inp) => {
            inp.classList.remove("form__dark", "form__light");
            inp.classList.add("form__dark");
        });
        //contact end

        //footer start
        document.querySelectorAll(".github span").forEach((el) => {
            el.style.color = "#ffffff";
        });
        document.querySelector('.github__link').style.color = "#ffffff";
        document.querySelector(".rolling__scopes-link").style.color = "#ffffff";
        document.querySelectorAll('.social__pic').forEach((pic) => {
            pic.style.fill = "#ffffff";
        });
        //footer end
    }
}

changeThemeBtn.addEventListener('click', changeTheme);



/****************** translate ****************** */

let enLang = document.querySelector('.lang_en');
let ruLang = document.querySelector('.lang_ru');


ruLang.addEventListener('click', function(){

    enLang.classList.remove('active');
    ruLang.classList.add('active');
    getTranslate(Object.keys(i18Obj)[0]);
});

enLang.addEventListener('click', function(){
    ruLang.classList.remove('active');
    enLang.classList.add('active');
    getTranslate(Object.keys(i18Obj)[1]);
});


function getTranslate(lang){

    let content = document.querySelectorAll('[data-i18]');
    let priceItemsRu = document.querySelectorAll('.price-item');
    
    if(lang == "en"){
        content.forEach((word) => {
            word.textContent = i18Obj.ru[word.dataset.i18];
        });
        priceItemsRu.forEach((priceItem) => {
            priceItem.style.padding = "39px 90px";
        });
    }
    else if(lang == "ru"){
        content.forEach((word) => {
            word.textContent = i18Obj.en[word.dataset.i18];
        });
        priceItemsRu.forEach((priceItem) => {
            priceItem.style.padding = "39px 110px";
        });
    }
}


