document.addEventListener("DOMContentLoaded",function(){
    const clubContainer = document.querySelector("#clubContainer");
    const forProgramming = document.querySelector("#forProgramming");
    const forCultural = document.querySelector("#forCultural");
    const forSport = document.querySelector("#forSports");
    let btn = document.getElementById("btn");

    forProgramming.style.display = "none";
    forCultural.style.display = "none";
    forSport.style.display = "none";
    btn.style.display = "none";

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

        if (
            document.querySelector("#programmingClub").checked ||
            document.querySelector("#sportsClub").checked ||
            document.querySelector("#culturalClub").checked
        ) {
            btn.style.display = "block";
        }
        if (
            !document.querySelector("#programmingClub").checked &&
            !document.querySelector("#sportsClub").checked &&
            !document.querySelector("#culturalClub").checked
        ) {
            btn.style.display = "none";
        }

    })
   }else{
    console.log("error");
   }
})



function submitForm(){
    let selectedClubs = [];
    if (document.getElementById("programmingClub").checked){
        selectedClubs.push("Programming Club");
    } 
    
    if (document.getElementById("sportsClub").checked) selectedClubs.push("Sports Club");
    if (document.getElementById("culturalClub").checked) selectedClubs.push("Cultural Club");
    
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        department: document.getElementById("department").value,
        batch: document.getElementById("batch").value,
        studentId: document.getElementById("studentId").value
    };

    for(let selectedClub of selectedClubs){
        let sheetName = "";
        if(selectedClub === "Sports Club"){
            sheetName = "sportsClub";
        }
        if(selectedClub === "Cultural Club" ){
            sheetName = "culturalClub";
        }
        if(selectedClub === "Programming Club"){
            sheetName = "programmingClub";
        }

        transferDataToGoogleSheet(sheetName,formData , selectedClubs)
    }

}

function transferDataToGoogleSheet(sheetName, objectData, selectedClubs) {

    let name = objectData.name;
    let email = objectData.email;
    let number = objectData.number;
    let department = objectData.department;
    let batch = objectData.batch;
    let studentId = objectData.studentId;

    let programmingLanguages = [];
    if (sheetName === "programmingClub") {
        if (document.getElementById("C").checked) programmingLanguages.push("C");
        if (document.getElementById("cpp").checked) programmingLanguages.push("C++");
        if (document.getElementById("java").checked) programmingLanguages.push("Java");
        if (document.getElementById("python").checked) programmingLanguages.push("Python");
        if (document.getElementById("javascript").checked) programmingLanguages.push("JavaScript");
        if (document.getElementById("prolog").checked) programmingLanguages.push("Prolog");
        if (document.getElementById("another").checked) programmingLanguages.push("Another");
    }
    var experienceLevels = [];
    if (document.getElementById("beginner").checked) experienceLevels.push("Beginner");
    if (document.getElementById("intermediate").checked) experienceLevels.push("Intermediate");
    if (document.getElementById("advance").checked) experienceLevels.push("Advance");
    if (document.getElementById("expert").checked) experienceLevels.push("Expert");

    let forSportEvent = [];

    if (document.getElementById("Cricket").checked) forSportEvent.push("Cricket");
    if (document.getElementById("Football").checked) forSportEvent.push("Football");
    if (document.getElementById("Carrom").checked) forSportEvent.push("Carrom");
    if (document.getElementById("Chess").checked) forSportEvent.push("Chess");
    if (document.getElementById("Another").checked) forSportEvent.push("Another");

    let forCulturalEvent = [];

    if (document.getElementById("Singing").checked) forCulturalEvent.push("Singing");
    if (document.getElementById("Dancing").checked) forCulturalEvent.push("Dancing");
    if (document.getElementById("Theater").checked) forCulturalEvent.push("Theater");
    if (document.getElementById("Hosting").checked) forCulturalEvent.push("Hosting");
    if (document.getElementById("Poetry").checked) forCulturalEvent.push("Poetry");
    if (document.getElementById("Painting").checked) forCulturalEvent.push("Painting");
    if (document.getElementById("Journalism").checked) forCulturalEvent.push("Journalism");
    if (document.getElementById("Design").checked) forCulturalEvent.push("Design");
    if (document.getElementById("Another").checked) forCulturalEvent.push("Another");


    let whatsapp = "";
    let facebook = "";
    let purpose = "";
    let github = "";
    let linkedin = "";

    if (sheetName === "programmingClub") {
        github = document.getElementById("github").value;
        linkedin = document.getElementById("linkedin").value;
    } 
 
    if (sheetName === "programmingClub") {
        whatsapp = document.getElementById("whatsapp").value;
        purpose = document.getElementById("purpose").value;
    } else if (sheetName === "sportsClub") {
        whatsapp = document.getElementById("whatsapp1").value;
        facebook = document.getElementById("facebook").value;
        purpose = document.getElementById("purpose1").value;
    } else if (sheetName === "culturalClub") {
        whatsapp = document.getElementById("whatsapp2").value;
        facebook = document.getElementById("facebook").value;
        purpose = document.getElementById("purpose2").value;
    }
    if (sheetName === "programmingClub") {
        purpose = document.getElementById("purpose").value;
    } else if (sheetName === "sportsClub") {
        purpose = document.getElementById("purpose1").value;
    } else if (sheetName === "culturalClub") {
        purpose = document.getElementById("purpose2").value;
    }
  
    if (sheetName === "sportsClub" || sheetName === "culturalClub") {
        facebook = document.getElementById("facebook").value;
    }

    if (sheetName === "programmingClub") {
        whatsapp = document.getElementById("whatsapp").value;
    } else if (sheetName === "sportsClub") {
        whatsapp = document.getElementById("whatsapp1").value;
    } else if (sheetName === "culturalClub") {
        whatsapp = document.getElementById("whatsapp2").value;
    }

    let urls = "";
    if(sheetName=== "sportsClub"){
        urls = "https://script.google.com/macros/s/AKfycbyYFXxE_BohF3Iwhq6w7vEMfksvG7-xqzMRWlQ0SzYhAzwtOhfrsHQrRHHSzmrKY4ct/exec";
    }else if(sheetName === "culturalClub"){
        urls = "https://script.google.com/macros/s/AKfycbxu-OWuaJHLYfv93p8QF_ujvxtNici-CFneg6DXBJZt98QB9E5U0prMMD6GFMgR6Yky1A/exec";
    }else if(sheetName === "programmingClub"){
        urls = "https://script.google.com/macros/s/AKfycbxP5Zc529LMO-7hTa6KrVZVchJtHJhk3gt8k3iY4wPFOZb4yt6yTJsPAhV2Po8K59ECYg/exec";
    }

    let data = {};

    if(sheetName === "programmingClub"){
        data = {
            name: name,
            email: email,
            number: number,
            department: department,
            batch: batch,
            studentId: studentId,
            selectedClubs: selectedClubs.join(", "),
            programmingLanguages: programmingLanguages.join(", "),
            experienceLevels: experienceLevels.join(", "),
            github: github,
            linkedin: linkedin,
            whatsapp: whatsapp,
            purpose: purpose
        };
    }else if(sheetName === "culturalClub"){
        data = {
            name: name,
            email: email,
            number: number,
            department: department,
            batch: batch,
            studentId: studentId,
            selectedClubs: selectedClubs.join(", "),
            culturalEvent: forCulturalEvent.join(", "),
            experienceLevels: experienceLevels.join(", "),
            facebook: facebook,
            whatsapp: whatsapp,
            purpose: purpose
            
        };

    }else if(sheetName === "sportsClub"){
        
        data = {
            name: name,
            email: email,
            number: number,
            department: department,
            batch: batch,
            studentId: studentId,
            selectedClubs: selectedClubs.join(", "),
            sportEvent: forSportEvent.join(", "),
            experienceLevels: experienceLevels.join(", "),
            facebook: facebook,
            whatsapp: whatsapp,
            purpose: purpose
        };
    }


    fetch(urls, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => {
        alert("Data submitted successfully!");
        location.reload(); 
    }).catch(error => {
        console.error("Error:", error);
        location.reload(); 
    });


}
