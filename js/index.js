const pageBody=document.querySelector(".page__body"),genreItem=document.querySelectorAll(".genre__item"),genreText=document.querySelectorAll(".genre__text"),gameLink=document.querySelector(".games__link"),watchButton=document.querySelector("#watch-button");pageBody.style.minHeight=window.innerHeight+"px",localStorage.setItem("sort",""),genreItem.forEach(((e,t)=>{e.addEventListener("click",(()=>{window.location.href="games.html?param="+genreText[t].textContent}))})),gameLink.addEventListener("click",(()=>{gameLink.href="game.html?param=01&param2=home"})),watchButton.addEventListener("click",(()=>{watchButton.href="games.html?param=watch"}));