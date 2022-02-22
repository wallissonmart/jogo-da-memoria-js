const p=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=l(e);fetch(e.href,a)}};p();function d(r){return`
    <p class="player-name">${r}</p>
  `}function $(r="VS"){return`
    <p class=player-vs>${r}</p>
   `}function u(r=0){return`
    <ol class="player-score" data-points="${r}">
      <li class="pointer">Um</li>
      <li class="pointer">Dois</li>
      <li class="pointer">Tr\xEAs</li>
    </ol>
   `}function g(r=1){return`
    <img class="arrow-down"
     data-currentPlayer=${r}
     src="img/down-arrow.png" 
     alt="\xCDcone de uma seta para baixo">
    `}function h(){return`
    <header class="score-board">
      ${g()}
      ${d("Player1")}
      ${u(0)}
      ${$("VS")}
      ${u(0)}
      ${d("Player2")}
    </header>
  `}function f(r="uefa",t="Logo da UCL"){return`
    <article class="card-game">
      <img src="img/${r}.png" alt="${t}">
    </article>
  `}function b(r,t){return window.cardFrontBack={},window.cardFrontBack.handleClick=l=>{l.target.closest(".card-front-back").classList.toggle("-active")},`
    <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
      <div class="card -front">
        ${f()}
      </div>
      <div class="card -back">
        ${f(r,t)}
      </div>
    </article>
  `}const m=[{icon:"messi",altIcon:"Lionel Messi"},{icon:"messi",altIcon:"Lionel Messi"},{icon:"cr7",altIcon:"Cristiano Ronaldo"},{icon:"cr7",altIcon:"Cristiano Ronaldo"},{icon:"mbappe",altIcon:"Kylian Mbapp\xE9"},{icon:"mbappe",altIcon:"Kylian Mbapp\xE9"},{icon:"lewa",altIcon:"Robert Lewandowski"},{icon:"lewa",altIcon:"Robert Lewandowski"},{icon:"neymar",altIcon:"Neymar Jr."},{icon:"neymar",altIcon:"Neymar Jr."},{icon:"haaland",altIcon:"Erling Halaand"},{icon:"haaland",altIcon:"Erling Halaand"},{icon:"kroos",altIcon:"Toni Kroos"},{icon:"kroos",altIcon:"Toni Kroos"},{icon:"salah",altIcon:"Mohamed Salah"},{icon:"salah",altIcon:"Mohamed Salah"}];function w(r){const t=o=>{o.forEach(n=>n.classList.remove("-active"))},l=()=>{const o=document.querySelector(".arrow-down"),n=o.getAttribute("data-currentPlayer");o.setAttribute("data-currentPlayer",n==1?2:1)};window.boardGame={},window.boardGame.handleClick=()=>{const n=document.querySelector(".board-game").querySelectorAll(".card-front-back.-active");n.length===2&&setTimeout(()=>{t(n),l(),y(n)},1e3)};const i=m.map(o=>b(o.icon,o.altIcon)),e=a(i);function a(o){for(let n=o.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[o[n],o[s]]=[o[s],o[n]]}return o}console.log(a(m));const c=e.join("");function y(o){o.length===2&&(c[0].icon&&c[0].altIcon!=c[1].icon&&c[1].altIcon?console.log("Igual"):console.log("Diferente"))}return`
    <section class="board-game" onClick="boardGame.handleClick()">
      ${c}
    </section>
  `}const v=document.querySelector("#root");v.insertAdjacentHTML("beforeend",`
    ${h()}
    ${w()}
  `);
