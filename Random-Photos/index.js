const imagContainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () =>{
    imageNum=10;
    addNewImges();
});

function addNewImges(){
    for(let index=0; index<imageNum; index++){
    const newImgEl = document.createElement("img");
    newImgEl.src=`
    https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;

    imagContainerEl.appendChild(newImgEl);
    }
}