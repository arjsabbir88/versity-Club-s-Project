document.addEventListener("DOMContentLoaded",function(){
    const clubContainer = document.querySelector("#clubContainer");
    const forProgramming = document.querySelector("#forProgramming");
    const forCultural = document.querySelector("#forCultural");
    const forSport = document.querySelector("#forSports");

    forProgramming.style.display = "none";
    forCultural.style.display = "none";
    forSport.style.display = "none";

   if(clubContainer){
    clubContainer.addEventListener("change",function(event){
        if(document.querySelector("#programmingClub").checked){
            forProgramming.style.display = "block";
        }else{
            forProgramming.style.display = "none";
        }
        if(document.querySelector("#sportsClub").checked){
            forSport.style.display = "block";
        }else{
            forSport.style.display = "none";
        }
        if(document.querySelector("#culturalClub").checked){
            forCultural.style.display = "block";
        }else{
            forCultural.style.display = "none";
        }
    })
   }else{
    console
   }
})