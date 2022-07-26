(()=>{"use strict";let t=[];const e=()=>{const e=document.getElementById("content"),n=document.createElement("h1");n.classList.add("projects_main_title"),n.textContent="Projects",e.appendChild(n);const d=document.createElement("button");d.classList.add("new_project_button"),d.textContent="+ New Project",e.appendChild(d);const o=document.querySelector(".project_container");e.appendChild(o),(()=>{const e=document.getElementById("content"),n=document.querySelector(".project_container"),d=document.querySelector(".new_project_button"),o=document.createElement("div");o.classList.add("form_popup"),o.setAttribute("id","project_form"),e.appendChild(o);const c=document.createElement("form");c.classList.add("form_container"),o.appendChild(c);const l=document.createElement("h1");l.textContent="New Project",c.appendChild(l);const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","title"),a.setAttribute("placeholder","Project Name"),a.setAttribute("id","project_title"),c.appendChild(a);const s=document.createElement("div");s.classList.add("form_buttons"),c.appendChild(s);const i=document.createElement("button");i.classList.add("add_btn"),i.setAttribute("type","submit"),i.textContent="Create New Project",s.appendChild(i);const r=document.createElement("button");r.classList.add("close_btn"),r.textContent="Close",s.appendChild(r),r.addEventListener("click",(t=>{t.preventDefault(),o.style.display="none",n.style.opacity="1",d.style.opacity="1"})),i.addEventListener("click",(e=>{e.preventDefault();const l=(e=>{const n=document.createElement("div");n.classList.add("project_card");const d=document.createElement("div");d.classList.add("project_card_header");const o=document.createElement("h1");o.classList.add("project_card_title"),o.textContent=`${e}`;const c=document.createElement("div");c.classList.add("project_card_options");const l=document.createElement("i");l.classList.add("gg-more-alt"),c.appendChild(l);const a=document.createElement("i");return a.classList.add("gg-trash"),c.appendChild(a),a.addEventListener("click",(e=>{e.preventDefault(),(e=>{e.parentElement.removeChild(e);const n=t.indexOf(e);n>-1&&t.splice(n,1)})(n)})),d.appendChild(o),d.appendChild(c),n.appendChild(d),n})(document.getElementById("project_title").value);n.appendChild(l),t.push(l),o.style.display="none",n.style.opacity="1",d.style.opacity="1",c.reset()}))})(),d.addEventListener("click",(()=>{document.querySelector(".form_popup").style.display="block",o.style.opacity="0.5",d.style.opacity="0.5"}))},n=()=>{const e=document.getElementById("content"),n=document.createElement("h1");n.classList.add("todos_main_title"),n.textContent="Todos",e.appendChild(n);const d=document.createElement("button");d.classList.add("new_todo_button"),d.textContent="+ New Todo",e.appendChild(d);const o=document.querySelector(".todo_container");e.appendChild(o),(()=>{const e=document.getElementById("content"),n=document.querySelector(".todo_container"),d=document.querySelector(".new_todo_button"),o=document.createElement("div");o.classList.add("form_popup"),o.setAttribute("id","todo_form"),e.appendChild(o);const c=document.createElement("form");c.classList.add("form_container"),o.appendChild(c);const l=document.createElement("h1");l.textContent="New Todo",c.appendChild(l);const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","title"),a.setAttribute("placeholder","Title"),a.setAttribute("id","todo_title"),c.appendChild(a);const s=document.createElement("textarea");s.setAttribute("type","text"),s.setAttribute("name","description"),s.setAttribute("placeholder","Description"),s.setAttribute("id","todo_description"),c.appendChild(s);const i=document.createElement("input");i.setAttribute("type","date"),i.setAttribute("name","date"),i.setAttribute("placeholder","Due Date"),i.setAttribute("id","todo_date"),c.appendChild(i);const r=document.createElement("select");r.setAttribute("name","project"),r.setAttribute("placeholder","Project"),r.setAttribute("id","todo_project");const p=document.createElement("option");p.setAttribute("value","Todos (default)"),p.textContent="Todos (default)",r.appendChild(p),t.forEach((t=>{const e=document.createElement("option");e.setAttribute("value",`${t.querySelector(".project_card_title").textContent}`),e.textContent=`${t.querySelector(".project_card_title").textContent}`,r.appendChild(e)})),c.appendChild(r);const u=document.createElement("div");u.classList.add("form_buttons"),c.appendChild(u);const m=document.createElement("button");m.classList.add("add_btn"),m.setAttribute("type","submit"),m.textContent="Add New Todo",u.appendChild(m);const y=document.createElement("button");y.classList.add("close_btn"),y.textContent="Close",u.appendChild(y),y.addEventListener("click",(t=>{t.preventDefault(),o.style.display="none",n.style.opacity="1",d.style.opacity="1"})),m.addEventListener("click",(t=>{t.preventDefault();const e=document.getElementById("todo_title").value,l=document.getElementById("todo_description").value,a=document.getElementById("todo_date").value,s=document.getElementById("todo_project"),i=((t,e,n,d)=>{const o=document.createElement("div");o.classList.add("todo_card");const c=document.createElement("div");c.classList.add("todo_card_header");const l=document.createElement("h1");l.classList.add("todo_card_title"),l.textContent=`${t}`;const a=document.createElement("div");a.classList.add("todo_card_options");const s=document.createElement("i");s.classList.add("gg-check-r"),a.appendChild(s);let i=!1;s.addEventListener("click",(t=>{t.preventDefault(),i?(i=!1,s.style.color="var(--side_color)",l.style.textDecoration="none",o.style.opacity="1",r.style.display="block"):(i=!0,s.style.color="rgb(96, 135, 96)",l.style.textDecoration="line-through",o.style.opacity="0.5",r.style.display="none")}));const r=document.createElement("i");r.classList.add("gg-more-alt"),a.appendChild(r),r.addEventListener("click",(t=>{t.preventDefault(),(t=>{const e=t.querySelector(".todo_card_desc"),n=t.querySelector(".todo_card_project");"none"===e.style.display?e.style.display="block":e.style.display="none","none"===n.style.display?n.style.display="block":n.style.display="none"})(o)}));const p=document.createElement("i");p.classList.add("gg-trash"),a.appendChild(p),p.addEventListener("click",(t=>{t.preventDefault(),(t=>{t.parentElement.removeChild(t)})(o)}));const u=document.createElement("p");u.classList.add("todo_card_desc"),u.textContent=`${e}`;const m=document.createElement("p");m.classList.add("todo_card_date"),m.textContent=`Due: ${n}`;const y=document.createElement("p");return y.classList.add("todo_card_project"),y.textContent=`Project: ${d}`,c.appendChild(l),c.appendChild(a),o.appendChild(c),o.appendChild(u),o.appendChild(m),o.appendChild(y),o})(e,l,a,s.options[s.selectedIndex].value);n.appendChild(i),o.style.display="none",n.style.opacity="1",d.style.opacity="1",c.reset()}))})(),d.addEventListener("click",(()=>{document.querySelector(".form_popup").style.display="block",o.style.opacity="0.5",d.style.opacity="0.5"}))},d=document.getElementById("content"),o=document.createElement("div");o.classList.add("todo_container");const c=document.createElement("div");c.classList.add("project_container");const l=document.querySelector(".todos_button"),a=document.querySelector(".projects_button");d.appendChild(o),n(),l.addEventListener("click",(()=>{for(;d.firstChild;)d.removeChild(d.lastChild);d.appendChild(o),n()})),a.addEventListener("click",(()=>{for(;d.firstChild;)d.removeChild(d.lastChild);d.appendChild(c),e()}))})();