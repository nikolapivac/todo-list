(()=>{"use strict";const t=()=>{const t=document.getElementById("content"),e=document.createElement("h1");e.classList.add("todos_main_title"),e.textContent="Todos",t.appendChild(e);const d=document.createElement("button");d.classList.add("new_todo_button"),d.textContent="+ New Todo",t.appendChild(d);const n=document.createElement("div");n.classList.add("todo_container"),t.appendChild(n),d.addEventListener("click",(()=>{(()=>{const t=document.getElementById("content"),e=document.querySelector(".todo_container"),d=document.createElement("div");d.classList.add("form_popup"),d.setAttribute("id","todo_form"),t.appendChild(d);const n=document.createElement("form");n.classList.add("form_container"),d.appendChild(n);const o=document.createElement("h1");o.textContent="New Todo",n.appendChild(o);const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("name","title"),c.setAttribute("placeholder","Title"),c.setAttribute("id","todo_title"),n.appendChild(c);const s=document.createElement("textarea");s.setAttribute("type","text"),s.setAttribute("name","description"),s.setAttribute("placeholder","Description"),s.setAttribute("id","todo_description"),n.appendChild(s);const a=document.createElement("input");a.setAttribute("type","date"),a.setAttribute("name","date"),a.setAttribute("placeholder","Due Date"),a.setAttribute("id","todo_date"),n.appendChild(a);const l=document.createElement("select");l.setAttribute("name","project"),l.setAttribute("placeholder","Project"),l.setAttribute("id","todo_project");const i=document.createElement("option");i.setAttribute("value","Todos"),i.textContent="Todos",l.appendChild(i),n.appendChild(l);const r=document.createElement("div");r.classList.add("form_buttons"),n.appendChild(r);const p=document.createElement("button");p.classList.add("add_btn"),p.setAttribute("type","submit"),p.textContent="Add New Todo",r.appendChild(p);const m=document.createElement("button");m.classList.add("close_btn"),m.textContent="Close",r.appendChild(m),m.addEventListener("click",(t=>{t.preventDefault(),d.style.display="none"})),p.addEventListener("click",(t=>{t.preventDefault();const d=document.getElementById("todo_title").value,o=document.getElementById("todo_description").value,c=document.getElementById("todo_date").value,s=document.getElementById("todo_project"),a=((t,e,d,n)=>{const o=document.createElement("div");o.classList.add("todo_card");const c=document.createElement("div");c.classList.add("todo_card_header");const s=document.createElement("h1");s.classList.add("todo_card_title"),s.textContent=`${t}`;const a=document.createElement("div");a.classList.add("todo_card_options");const l=document.createElement("i");l.classList.add("gg-more-alt"),a.appendChild(l),l.addEventListener("click",(t=>{t.preventDefault(),(t=>{const e=t.querySelector(".todo_card_desc"),d=t.querySelector(".todo_card_project");"none"===e.style.display?e.style.display="block":e.style.display="none","none"===d.style.display?d.style.display="block":d.style.display="none"})(o)}));const i=document.createElement("i");i.classList.add("gg-trash"),a.appendChild(i),i.addEventListener("click",(t=>{t.preventDefault(),(t=>{t.parentElement.removeChild(t)})(o)}));const r=document.createElement("p");r.classList.add("todo_card_desc"),r.textContent=`${e}`;const p=document.createElement("p");p.classList.add("todo_card_date"),p.textContent=`Due date: ${d}`;const m=document.createElement("p");return m.classList.add("todo_card_project"),m.textContent=`Project: ${n}`,c.appendChild(s),c.appendChild(a),o.appendChild(c),o.appendChild(r),o.appendChild(p),o.appendChild(m),o})(d,o,c,s.options[s.selectedIndex].value);e.appendChild(a),n.style.display="none"}))})()}))};t();const e=document.getElementById("content"),d=document.querySelector(".todos_button"),n=document.querySelector(".projects_button");d.addEventListener("click",(()=>{for(;e.firstChild;)e.removeChild(e.lastChild);t()})),n.addEventListener("click",(()=>{for(;e.firstChild;)e.removeChild(e.lastChild);(()=>{const t=document.getElementById("content"),e=document.createElement("h1");e.classList.add("projects_main_title"),e.textContent="Projects",t.appendChild(e);const d=document.createElement("button");d.classList.add("new_project_button"),d.textContent="+ New Project",t.appendChild(d);const n=document.createElement("div");n.classList.add("project_container"),t.appendChild(n),(()=>{const t=document.getElementById("content"),e=document.createElement("div");e.classList.add("form_popup"),e.setAttribute("id","project_form"),t.appendChild(e);const d=document.createElement("form");d.classList.add("form_container"),e.appendChild(d);const n=document.createElement("h1");n.textContent="New Project",d.appendChild(n);const o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name","title"),o.setAttribute("placeholder","Project Name"),o.setAttribute("id","project_title"),d.appendChild(o);const c=document.createElement("div");c.classList.add("form_buttons"),d.appendChild(c);const s=document.createElement("button");s.classList.add("add_btn"),s.setAttribute("type","submit"),s.textContent="Create New Project",c.appendChild(s);const a=document.createElement("button");a.classList.add("close_btn"),a.textContent="Close",c.appendChild(a),a.addEventListener("click",(t=>{t.preventDefault(),e.style.display="none"}))})(),d.addEventListener("click",(()=>{document.getElementById("project_form").style.display="block"}))})()}))})();