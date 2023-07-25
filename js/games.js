import{gamesData}from"./games-data.js";const pageBody=document.querySelector(".page__body"),gamesTitle=document.querySelector(".games__title"),gamesList=document.querySelector(".games__list"),watchButton=document.querySelector("#watch-button"),ratingButton=document.querySelector("#rating-button"),elementTemplate=document.querySelector("#element-template").content.querySelector(".games__item");pageBody.style.minHeight=window.innerHeight+"px";let urlParams=new URLSearchParams(window.location.search),param=urlParams.get("param"),gamesFiltered=[],isSorted=!1;"watch"==param?(gamesFiltered=getWatchGames(),gamesTitle.textContent="Top Games",watchButton.classList.add("main-nav__item--active")):(gamesFiltered=getFilteredGames(),gamesTitle.textContent=param+" Games");let gamesFilteredOrigin=[];function createItems(){let e=gamesFiltered.length;if(e>0)for(let t=0;t<e;t++){const e=elementTemplate.cloneNode(!0);e.querySelector(".games__text").textContent=gamesFiltered[t].name,e.querySelector(".games__img").src=gamesFiltered[t].imgIcon,e.querySelector(".games__img").alt=gamesFiltered[t].name,e.querySelector(".games__img-raiting").textContent=gamesFiltered[t].rating,e.addEventListener("click",(()=>{e.querySelector(".games__link").href="game.html?param="+gamesFiltered[t].id,"watch"==param&&(e.querySelector(".games__link").href="game.html?param="+gamesFiltered[t].id+"&param2=watch")})),gamesList.appendChild(e)}}function getFilteredGames(){return gamesData.filter((e=>{if(e.genre==param)return!0}))}function getWatchGames(){let e=localStorage.getItem("top"),t=[];if(e&&e.length>0)for(let a=0;a<e.length/3;a++){let r=3*a,i=e.slice(r,r+2);gamesData.forEach((e=>{e.id==i&&(t[a]=e)}))}return t}Object.assign(gamesFilteredOrigin,gamesFiltered),"sorted"===localStorage.getItem("sort")&&(isSorted=!0,ratingButton.classList.toggle("main-nav__item--active"),gamesFiltered.sort(((e,t)=>t.rating-e.rating))),createItems(),watchButton.addEventListener("click",(()=>{localStorage.setItem("sort",""),watchButton.href="games.html?param=watch"})),ratingButton.addEventListener("click",(()=>{isSorted?(isSorted=!1,localStorage.setItem("sort","")):(isSorted=!0,localStorage.setItem("sort","sorted")),ratingButton.classList.toggle("main-nav__item--active");for(let e=gamesList.children.length-1;e>=0;e--)gamesList.children[e].parentElement.removeChild(gamesList.children[e]);isSorted?gamesFiltered.sort(((e,t)=>t.rating-e.rating)):gamesFiltered=gamesFilteredOrigin,createItems()}));