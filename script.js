const nav=document.querySelector('.nav'),toggle=document.querySelector('.menu-toggle');
if(toggle)toggle.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.reveal').forEach(el=>{if(!('IntersectionObserver'in window)){el.classList.add('visible');return;}});
if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));}
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b===btn));document.querySelectorAll('.card[data-category]').forEach((card,i)=>{const show=btn.dataset.filter==='all'||btn.dataset.filter===card.dataset.category;card.classList.toggle('hide',!show);if(show)card.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:300,delay:i*40,easing:'ease-out'});});}));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{const target=document.querySelector(a.getAttribute('href'));if(target){target.animate([{opacity:.75},{opacity:1}],{duration:350});}}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
