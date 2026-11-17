document.querySelectorAll(".menu").forEach(btn=>btn.addEventListener("click",()=>document.querySelector(".nav")?.classList.toggle("open")));
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
async function loadPosts(){
 try{const r=await fetch("content.json",{cache:"no-store"});if(!r.ok)return;const d=await r.json();
 const news=d.news||[],reports=d.reports||[];
 const n=document.getElementById("newsList");if(n)n.innerHTML=news.length?news.map(post=>`<article class="article"><time>${esc(post.date)}</time><div><h3>${esc(post.title)}</h3><p>${esc(post.body)}</p></div></article>`).join(""):'<p class="empty">ニュースは現在準備中です。</p>';
 const rp=document.getElementById("reportList");if(rp)rp.innerHTML=reports.length?reports.map(post=>`<article class="article"><time>${esc(post.date)}</time><div><h3>${esc(post.title)}</h3><p>${esc(post.body)}</p></div></article>`).join(""):'<p class="empty">事業報告は現在準備中です。</p>';
 const hn=document.getElementById("homeNews");if(hn&&news.length){const p=news.slice().sort((a,b)=>(b.date||"").localeCompare(a.date||""))[0];hn.innerHTML=`<div><span class="tag">LATEST NEWS</span><h3>${esc(p.title)}</h3><p>${esc(p.date)}　${esc(p.body)}</p></div><a class="card-link" href="news.html">ニュース一覧 →</a>`;}
 }catch(e){}
}
loadPosts();
