var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequire4383;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire4383=i);var o=i("jfYt8"),r=i("krGWQ");function s(e){r.refs.slickSlider.innerHTML=e.map((({original_title:e,poster_path:t,vote_average:n,movie_id:i,name:r})=>`<div class="slider__item"><img class="slider-image" src=${o.IMG_URL}${t} alt="${e}${r}" data-id="${i}" onerror="this.onerror=null;this.src="https://i.postimg.cc/6pzyh7Wc/pngwing-com.png";" /><span class="trending-raiting">${n.toFixed(1)}</span></div>`)).join(""),$(".slider").slick({arrows:!1,centerMode:!0,lazyLoad:"progressive",autoplay:!0,autoplaySpeed:1e3,infinite:!0,speed:1e3,adaptiveHeigt:!0,cssEase:"ease",slidesToShow:8,responsive:[{breakpoint:1100,settings:{slidesToShow:6,infinite:!0}},{breakpoint:768,settings:{slidesToShow:3}},{breakpoint:480,settings:{slidesToShow:2}}]})}fetch("https://api.themoviedb.org/3/trending/all/day?api_key=2b316c342fe13f9049052886494c29f1").then((e=>e.json())).then((({results:e})=>e)).then(s).catch((e=>console.log(e))),i("ctnTC"),i("688Bf"),i("9hR6i"),i("j8htv"),i("1VOaQ"),i("4bOKh");var d=i("4S0r6"),c=i("cWqtQ"),a=i("2ix2C");document.getElementById("theme-switch-button").addEventListener("click",d.changeThemeOnClick),(0,d.checkTheme)(),(0,d.checkThemeForLogIn)(),c.btnLogin.addEventListener("click",a.loginEmailPassword),c.btnSignup.addEventListener("click",a.createAccount),c.btnLogout.addEventListener("click",a.logout);const l=document.querySelector(".library__watched-btn"),u=document.querySelector(".library__queue-btn");l.addEventListener("click",a.onWatchedBtnClick),u.addEventListener("click",a.onQueueBtnClick),(0,a.monitorAuthStateLibrary)();const p=document.querySelector(".login-backdrop"),h=document.querySelector(".login-modal-btn"),g=document.querySelector(".modal__close-button"),m=document.querySelector(".modal__close-buttonLogIn");function v(e){"Escape"===e.key&&(p.classList.add("is-hidden"),document.removeEventListener("keydown",v))}function f(){p.classList.add("is-hidden"),document.removeEventListener("keydown",v)}h.addEventListener("click",(function(e){e.preventDefault(),p.classList.remove("is-hidden"),document.addEventListener("keydown",v)})),p.addEventListener("click",(function(e){e.currentTarget===e.target&&f()})),g.addEventListener("click",f),m.addEventListener("click",(function(){p.classList.add("is-hidden"),document.removeEventListener("keydown",v)}));
//# sourceMappingURL=library.71b63a9a.js.map
