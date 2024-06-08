import{a as d,i as u,S as m}from"./assets/vendor-0b90b8ce.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="https://api.thecatapi.com/v1";d.defaults.headers.common["x-api-key"]="live_ip9vENg772mOuhA0bbbqxSNGN3GBlOcVWbB4byHWlD8SQc140oCDL6lp4klQMs1d";const f=()=>d.get(`${p}/breeds`).then(s=>s.data),g=s=>d.get(`${p}/images/search?breed_ids=${s}`).then(t=>t.data),i={select:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),article:document.querySelector(".article")},a=()=>{i.select.classList.toggle("hidden"),i.loader.classList.toggle("hidden")};f().then(s=>{const t=s.map(({name:o,id:c})=>({text:o,value:c}));t.unshift({text:"Select cat breed",value:"",disabled:!0}),l.setData(t)}).catch(s=>{u.error({position:"topCenter",message:"Ooops! Something went wrong! Try reload the page!"}),console.error(s)}).finally(()=>a());const h=s=>{const[{value:t}]=s;t&&(l.settings.disabled=!0,a(),i.article.classList.add("hidden"),g(t).then(o=>{const[{url:c,breeds:[{description:e,name:r,temperament:n}]}]=o;i.article.innerHTML=y({src:c,description:e,title:r,temperament:n}),i.article.classList.remove("hidden")}).catch(o=>{u.error({position:"topCenter",message:"Ooops! Something went wrong! Try reload the page!"}),console.error(o)}).finally(()=>{l.settings.disabled=!1,a()}))},l=new m({select:i.select,events:{afterChange:h}}),y=({src:s,title:t,description:o,temperament:c})=>`
    <img class="article-image" src="${s}" alt="${t}">
    <div class="article-item">
      <h2 class="article-title">${t}</h2>
      <p class="article-description">${o}</p>
      <p class="article-addition">
        <strong>Temperament: </strong>
        ${c}
      </p>
    </div>
  `;
//# sourceMappingURL=commonHelpers.js.map
