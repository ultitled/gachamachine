const emotion =
localStorage.getItem(
    "selectedEmotion"
);

const capsule =
document.getElementById("capsule");

const topPart =
document.querySelector(".top");

const bottomPart =
document.querySelector(".bottom");

const letter =
document.getElementById("letter");

const capsuleColors = {

    happy:{
        top:"#E6B800",
        bottom:"#FFF9C4"
    },

    loved:{
        top:"#FF5F92",
        bottom:"#FFD1DF"
    },

    calm:{
        top:"#4AA3FF",
        bottom:"#D9EFFF"
    },

    lonely:{
        top:"#8E6BD8",
        bottom:"#E4DAFF"
    },

    angry:{
        top:"#E53935",
        bottom:"#FFCDD2"
    },

    excited:{
        top:"#43A047",
        bottom:"#D7FFD9"
    }
};

if(emotion === "surprise"){

    topPart.style.background =
    "linear-gradient(to bottom,#ff4d4d,#ff9800,#ffeb3b,#4caf50,#2196f3,#9c27b0)";

    bottomPart.style.background =
    "linear-gradient(to bottom,#ffd6d6,#ffe0b2,#fff9c4,#d7ffd9,#d9efff,#f3d9ff)";
}
else{

    topPart.style.background =
    capsuleColors[emotion].top;

    bottomPart.style.background =
    capsuleColors[emotion].bottom;
}

let opened = false;

capsule.addEventListener(
"click",
()=>{

    if(opened) return;

    opened = true;

    capsule.classList.add(
        "wiggle"
    );

    setTimeout(()=>{

        topPart.classList.add(
            "open-top"
        );

        bottomPart.classList.add(
            "open-bottom"
        );

    },500);

    setTimeout(()=>{

        letter.classList.add(
            "show-letter"
        );

    },1200);

    setTimeout(()=>{

        window.location.href =
        "message.html";

    },1000);

});