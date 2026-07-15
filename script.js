let text = 
"Salam, Gülyaz... 🌸\n\nMən Momo. 🐈\n\nBu gün sənin üçün kiçik bir macəra hazırlamışam.";

let index = 0;


function typeText(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText,60);

    }

}


typeText();



function startAdventure(){

    document.getElementById("scene1").classList.add("hidden");

    document.getElementById("scene2").classList.remove("hidden");

}



function showGame(){

    document.getElementById("scene2").classList.add("hidden");

    document.getElementById("scene3").classList.remove("hidden");

    createHearts();

}



function createHearts(){

    let area = document.getElementById("gameArea");


    for(let i=0;i<5;i++){

        let heart = document.createElement("div");

        heart.innerHTML="❤️";

        heart.className="heart";


        heart.style.left=Math.random()*85+"%";

        heart.style.top=Math.random()*80+"%";


        heart.onclick=function(){

            heart.remove();

            let score=document.getElementById("score");

            score.innerHTML=parseInt(score.innerHTML)+1;


            if(score.innerHTML==5){

                setTimeout(finalScene,700);

            }

        };


        area.appendChild(heart);

    }

}



function finalScene(){

    document.getElementById("scene3").classList.add("hidden");

    document.getElementById("scene4").classList.remove("hidden");

    createPetals();

}



function createPetals(){

    for(let i=0;i<40;i++){

        let petal=document.createElement("div");

        petal.innerHTML="🌸";

        petal.className="petal";


        petal.style.left=Math.random()*100+"vw";

        petal.style.animationDuration=
        (3+Math.random()*4)+"s";


        document.body.appendChild(petal);


        setTimeout(()=>{

            petal.remove();

        },7000);


    }

}
