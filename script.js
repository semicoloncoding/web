var header= document.querySelector(".mainHeader");
const flip=()=>{
    header.classList.toggle("flipped")
}
header.addEventListener("click",flip);
