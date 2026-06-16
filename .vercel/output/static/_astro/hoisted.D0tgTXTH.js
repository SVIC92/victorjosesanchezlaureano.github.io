import"./hoisted.DdrHjPcO.js";const e=document.querySelector(".project-gallery"),s=document.querySelector(".project-cover img");if(e&&s){let g=function(){if(!e||!s||!c.length){e&&e.remove();return}const a=l();e.style.setProperty("--per",String(a));const o=[];for(let t=0;t<c.length;t+=a)o.push(c.slice(t,t+a));e.innerHTML=`
        <button class="pg-arrow prev" aria-label="Anterior">‹</button>
        <div class="pg-viewport">
          <div class="pg-track">
            ${o.map((t,r)=>`
              <div class="pg-page">
                ${t.map((i,d)=>`
                  <button class="pg-item" data-src="${i}" data-index="${r*a+d}" aria-label="Imagen ${r*a+d+1}">
                    <img src="${i}" alt="${p} ${r*a+d+1}">
                  </button>
                `).join("")}
              </div>
            `).join("")}
          </div>
        </div>
        <button class="pg-arrow next" aria-label="Siguiente">›</button>
      `;const x=e.querySelector(".pg-track"),u=e.querySelector(".pg-arrow.prev"),v=e.querySelector(".pg-arrow.next");let n=0;const y=()=>{u.classList.toggle("is-disabled",n<=0),v.classList.toggle("is-disabled",n>=o.length-1)},h=t=>{n=Math.max(0,Math.min(o.length-1,t)),x.style.transform=`translateX(-${n*100}%)`,y()};u.addEventListener("click",()=>h(n-1)),v.addEventListener("click",()=>h(n+1)),y();const w=Array.from(e.querySelectorAll(".pg-item")),f=t=>{w.forEach(r=>r.classList.toggle("is-active",r.dataset.src===t))};w.forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.src;s.style.opacity="0";const i=()=>{s.style.opacity="1",s.removeEventListener("load",i)};s.addEventListener("load",i),s.src=r,s.alt=`${p} - vista ${parseInt(t.dataset.index||"0",10)+1}`,f(r)})}),f(s.getAttribute("src")||"")};const p=e.dataset.title||"";let c=[];try{c=JSON.parse(e.dataset.gallery||"[]")}catch{c=[]}const l=()=>window.matchMedia("(max-width:480px)").matches?1:window.matchMedia("(max-width:768px)").matches?2:window.matchMedia("(max-width:1024px)").matches?3:4;g();let m=l();window.addEventListener("resize",()=>{const a=l();a!==m&&(m=a,g())})}
