const stars = document.querySelectorAll(".fa-star-o");
const starOutPut = document.querySelector(".star-value-text");


let currentTotalSelectedStars = 0;

stars.forEach((starItem,index)=>{
    starItem.dataset.rating = index + 1;
    starItem.addEventListener("mouseover",handleMouseOver);
    starItem.addEventListener("click",handleMouseClick);
    starItem.addEventListener("mouseleave",handleMouseLeave);
})

function handleMouseOver(event){
    const currentRatingValue = event.target.dataset.rating;
    
    if(!currentRatingValue)return
    else handleUpdateRatingState(currentRatingValue)
}
function handleUpdateRatingState(getCurrentRatingValue){
    for(i=0;i<5;i++){
        if(i<getCurrentRatingValue){
            stars[i].classList.replace("fa-star-o","fa-star");
        }
        else{
            stars[i].classList.replace("fa-star","fa-star-o");  
        }
        
    }
}
function handleMouseClick(event){
    const currentRatingValue = event.target.dataset.rating;
    currentTotalSelectedStars = currentRatingValue;
    handleUpdateRatingState(currentTotalSelectedStars);
    starOutPut.textContent=currentTotalSelectedStars;
}
function handleMouseLeave(){
    handleUpdateRatingState(currentTotalSelectedStars);
}