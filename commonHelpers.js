import{a as l,i as d,S as p}from"./assets/vendor-0b90b8ce.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="https://api.thecatapi.com/v1";l.defaults.headers.common["x-api-key"]="live_ip9vENg772mOuhA0bbbqxSNGN3GBlOcVWbB4byHWlD8SQc140oCDL6lp4klQMs1d";const m=()=>l.get(`${u}/breeds`).then(s=>s.data),f=s=>l.get(`${u}/images/search?breed_ids=${s}`).then(t=>t.data),n={select:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),article:document.querySelector(".article")},a=()=>{n.select.classList.toggle("hidden"),n.loader.classList.toggle("hidden")};m().then(s=>{const t=s.map(({name:o,id:c})=>({text:o,value:c}));t.unshift({text:"Select cat breed",value:"",disabled:!0}),g.setData(t)}).catch(s=>{d.error({position:"topCenter",message:"Ooops! Something went wrong! Try reload the page!"}),console.error(s)}).finally(()=>a());const h=s=>{const[{value:t}]=s;t&&(a(),n.article.classList.add("hidden"),f(t).then(o=>{const[{url:c,breeds:[{description:e,name:r,temperament:i}]}]=o;n.article.innerHTML=y({src:c,description:e,title:r,temperament:i}),n.article.classList.remove("hidden")}).catch(o=>{d.error({position:"topCenter",message:"Ooops! Something went wrong! Try reload the page!"}),console.error(o)}).finally(()=>{a()}))},g=new p({select:n.select,events:{afterChange:h}}),y=({src:s,title:t,description:o,temperament:c})=>`
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
