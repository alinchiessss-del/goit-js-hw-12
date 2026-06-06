import{a as h,S,i as a}from"./assets/vendor-CIF6YjI2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();h.defaults.baseURL="https://pixabay.com/api/";const v="55935426-09f449c6311981838f06ace57";async function m(r,e){return(await h.get("",{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const g=document.querySelector(".gallery"),y=document.querySelector(".loader"),p=document.querySelector(".load-more-btn"),P=new S(".gallery a");function b(r){const e=r.map(o=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img 
            class="gallery-image" 
            src="${o.webformatURL}" 
            alt="${o.tags}" 
          />
        </a>
        <div class="gallery-info">
          <p><b>Likes</b><br>${o.likes}</p>
          <p><b>Views</b><br>${o.views}</p>
          <p><b>Comments</b><br>${o.comments}</p>
          <p><b>Downloads</b><br>${o.downloads}</p>
        </div>
      </li>
    `).join("");g.insertAdjacentHTML("beforeend",e),P.refresh()}function q(){g.innerHTML=""}function L(){y.classList.remove("is-hidden")}function w(){y.classList.add("is-hidden")}function u(){p.classList.remove("is-hidden")}function i(){p.classList.add("is-hidden")}const M=document.querySelector(".search-form"),R=document.querySelector(".load-more-btn");let l="",n=1,c=0;M.addEventListener("submit",B);R.addEventListener("click",$);i();async function B(r){if(r.preventDefault(),l=r.target.elements.searchQuery.value.trim(),!l){a.error({message:"Please enter a search query!",position:"topRight"});return}n=1,c=0,q(),i(),L();try{const e=await m(l,n);if(c=e.totalHits,e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(e.hits);const o=Math.ceil(c/15);n>=o?(i(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):u()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w()}}async function $(){n+=1,i(),L();try{const r=await m(l,n);b(r.hits),O();const e=Math.ceil(c/15);n>=e?(i(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):u()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"}),u()}finally{w()}}function O(){const r=document.querySelector(".gallery-item");if(!r)return;const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
