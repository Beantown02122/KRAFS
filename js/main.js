const toast=document.getElementById("toast");
function say(msg){toast.textContent=msg;toast.style.display="block";clearTimeout(window.t);window.t=setTimeout(()=>toast.style.display="none",2600)}
document.querySelectorAll(".quick-row button").forEach(b=>b.addEventListener("click",()=>say(b.dataset.product+" — checkout will be connected later.")));
document.getElementById("bag").addEventListener("click",()=>say("Your KRAFS bag is currently empty."));
document.getElementById("signup").addEventListener("submit",e=>{e.preventDefault();say("Thanks for joining the KRAFS list.");e.target.reset()});