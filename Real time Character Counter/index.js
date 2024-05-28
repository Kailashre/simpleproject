const texareaEl =  document.getElementById("textarea");

const totalCounterEl =  document.getElementById("total-counter");

const remaingCounterEl =  document.getElementById("remaining-counter");

texareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})

updateCounter()

function updateCounter(){
    totalCounterEl.innerText = texareaEl.value.length;

    remaingCounterEl.innerText = texareaEl.getAttribute("maxlength") - texareaEl.value.length;
}