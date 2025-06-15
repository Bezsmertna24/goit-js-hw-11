import{a as d,S as u,i as a}from"./assets/vendor-Cip_4kvj.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="50868360-a376148e060c1128e2434e35d",p="https://pixabay.com/api/";function m(o){const s={key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(p,{params:s}).then(e=>e.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const s=o.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags} width="360"" />
      </a>
      <div class="info">
        <p class="text-descr">Likes: <span class="descr">${e.likes}</span></p>
        <p class="text-descr">Views: <span class="descr">${e.views}</span></p>
        <p class="text-descr">Comments: <span class="descr">${e.comments}</span></p>
        <p class="text-descr">Downloads: <span class="descr">${e.downloads}</span></p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",s),h.refresh()}function g(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const b=document.querySelector(".form");b.addEventListener("submit",o=>{o.preventDefault();const s=o.currentTarget.elements["search-text"].value.trim();if(!s){a.warning({title:"Warning",message:"Please enter a search term!"});return}g(),L(),m(s).then(e=>{e.hits.length===0?a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):y(e.hits)}).catch(e=>{a.error({title:"Error",message:"Something went wrong. Please try again."}),console.error(e)}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
