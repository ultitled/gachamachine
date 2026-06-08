const emotion =
localStorage.getItem(
    "selectedEmotion"
);

const title =
document.getElementById(
    "letterTitle"
);

const message =
document.getElementById(
    "letterMessage"
);

const paper =
document.getElementById(
    "letterPaper"
);

const signature =
document.getElementById(
    "signature"
);

const messages = {

happy:[

"You deserve every bit of happiness that finds its way to you.",

"I hope something unexpectedly wonderful happens today.",

"Your smile has probably saved more days than you realize.",

"The world feels a little brighter when you're happy.",

"You have every right to enjoy the good moments without feeling guilty.",

"May today give you at least one reason to laugh until your cheeks hurt.",

"Your happiness matters too.",

"Sometimes the smallest joys become the best memories.",

"I hope life surprises you in the nicest way possible today.",

"You've already made it through so much. Take a moment to be proud of yourself.",

"May your coffee be warm, your playlist be perfect, and your day be kind.",

"Good things are allowed to happen to you.",

"Never underestimate the joy your existence brings to others.",

"You deserve peaceful mornings and happy evenings.",

"Somewhere today, something good is waiting for you.",

"I hope you find a reason to smile at something silly today.",

"You make the world feel a little less heavy.",

"May your heart feel lighter than it did yesterday.",

"You've earned every good thing that comes your way.",

"Your laughter is one of the nicest sounds in the world.",

"I hope today treats you gently.",

"You're allowed to celebrate yourself, even for the smallest victories.",

"May happiness find you when you least expect it.",

"The world is lucky to have your light in it.",

"Keep being you. It's working wonderfully."

],

Loved : [

"You are appreciated more than you probably realize.",

"Thank you for being one of the safest places my heart has ever known.",

"The world feels a little brighter because you're in it.",

"You deserve the same kindness you so freely give to others.",

"Some people enter our lives and quietly change everything. You're one of those people.",

"Thank you for staying during days that felt heavy.",

"You have a way of making people feel important without even trying.",

"Your presence has been a gift in my life.",

"You remind me that good people still exist.",

"If kindness had a face, I think it would look a lot like you.",

"You make difficult days feel a little less difficult.",

"Some lights shine loudly. Yours simply helps people find their way.",

"You deserve to be loved exactly as you are.",

"Thank you for every small thing you've done that you thought I wouldn't remember.",

"Your existence makes the world a little softer.",

"You have helped more people than you know.",

"Being understood is rare. Thank you for understanding me.",

"Some people leave footprints in our lives without realizing it. You have.",

"You make people feel seen, heard, and valued.",

"The warmth you give to others always finds its way back.",

"I'm grateful that our paths crossed.",

"You've been a source of comfort more times than you know.",

"The world needs more hearts like yours.",

"You've made a bigger difference in my life than you probably realize.",

"I'm really glad you're here."

],

calm : [

"Take a deep breath. You don't have to solve everything today.",

"It's okay to move slowly. You're still moving forward.",

"You have survived every difficult day you've faced so far.",

"Rest is productive too.",

"You don't need all the answers right now.",

"One step at a time is still a perfectly valid strategy.",

"The sky doesn't rush to become sunset. Give yourself the same patience.",

"You are allowed to pause without feeling guilty.",

"Not every moment needs to be filled with productivity.",

"Your worth is not measured by how much you accomplish today.",

"Breathe in. Breathe out. That's enough for this moment.",

"Peace often arrives quietly.",

"You're carrying a lot. Be gentle with yourself.",

"It's okay if today is simply a day of getting through.",

"The future can wait a little while. Take care of the present you first.",

"You deserve the same compassion you offer everyone else.",

"Nothing blooms every single day. Growth can be invisible for a while.",

"Take things one page, one task, one breath at a time.",

"You don't always have to be strong.",

"Quiet moments are not wasted moments.",

"Even the ocean rests between waves.",

"You're doing better than you think.",

"It's okay to choose peace over pressure.",

"Your heart deserves softness too.",

"For now, just be here. That's enough."

],

lonely : [

"You are not forgotten.",

"Even on days when you feel invisible, you still matter.",

"Your presence in this world is important.",

"Someone's life is better because you're in it.",

"You don't have to earn your place in people's hearts.",

"Even when it feels quiet, you are loved more than you know.",

"The stars still shine even when hidden by clouds.",

"You are allowed to reach out when things feel heavy.",

"Feeling lonely doesn't mean you are alone.",

"There are people who would miss you if you disappeared for a day.",

"Your existence leaves a mark on this world.",

"Sometimes hearts feel distant, but that doesn't mean they care any less.",

"You deserve connection, comfort, and kindness.",

"It's okay to need someone.",

"You don't always have to carry everything by yourself.",

"The world is a little less empty because you're here.",

"Someone is probably smiling right now because of a memory involving you.",

"You are worthy of friendship exactly as you are.",

"Even if today feels lonely, it won't feel this way forever.",

"Your story still has beautiful chapters ahead.",

"There is a place for you in this world.",

"You bring something unique that nobody else can.",

"You are someone's happy memory.",

"The people who care about you may not always say it, but they do.",

"I'm really glad you're here."

],

angry : [

"Your feelings are valid.",

"It's okay to be upset about things that hurt you.",

"You don't have to pretend everything is fine.",

"Take a breath before carrying this any further.",

"Not every battle deserves your energy.",

"You are allowed to step away and protect your peace.",

"Being angry doesn't make you a bad person.",

"Sometimes anger is just pain asking to be noticed.",

"You deserve patience, especially from yourself.",

"It's okay to rest before facing things again.",

"You don't have to solve everything immediately.",

"Your heart has been carrying a lot lately.",

"Take your time. Healing doesn't happen on a schedule.",

"You are more than the emotions you're feeling right now.",

"It's okay to choose peace over proving a point.",

"You deserve moments of calm, even on difficult days.",

"Some storms pass faster when you stop fighting the rain.",

"You don't have to carry this forever.",

"Be gentle with yourself today.",

"Your worth does not decrease because you're struggling.",

"It's okay to let yourself feel things without judging them.",

"You are allowed to take a break.",

"Not every problem needs an answer today.",

"You deserve kindness, especially from yourself.",

"Tomorrow is another chance to begin again."

],
excited : [

"Something wonderful may be closer than you think.",

"Your excitement is one of your superpowers.",

"Keep dreaming. The world needs dreamers.",

"You never know which small step could change everything.",

"The future still has beautiful surprises waiting for you.",

"Your enthusiasm is contagious.",

"Big things often begin with tiny moments.",

"You have more potential than you realize.",

"Keep chasing the things that make your eyes light up.",

"Your ideas deserve a chance to grow.",

"The person you're becoming would be proud of you.",

"Never stop being curious.",

"There are adventures waiting for you that you haven't even imagined yet.",

"Hope is a powerful thing. Hold onto it.",

"The future version of you is cheering you on.",

"You're capable of more than your doubts would have you believe.",

"Every great story starts somewhere.",

"Keep planting seeds for the future you want.",

"You have every right to be excited about what's ahead.",

"Good things take time, but they're worth waiting for.",

"Your journey is still unfolding.",

"The best chapters haven't been written yet.",

"Keep looking forward. There's so much left to discover.",

"One day you'll look back and be amazed at how far you've come.",

"The world is full of possibilities, and some of them are meant for you."

],

surprise:[

{
title:"Blue",
artist:"Yung Kai",
link:"https://www.youtube.com/embed/IpFX2vq8HKw?rel=0"
},

{
title:"Maula Mere Maula",
artist:"Roop Kumar Rathod",
link:"https://www.youtube.com/embed/pFxzF6lUx_0?rel=0"
},

{
title:"Tere Bina",
artist:"A.R. Rahman",
link:"https://www.youtube.com/embed/_mwqXnTEHSc?rel=0"
},

{
title:"Khairiyat",
artist:"Arijit Singh",
link:"https://www.youtube.com/embed/hoNb6HuNmU0?rel=0"
},

{
title:"Zaalima",
artist:"Arijit Singh",
link:"https://www.youtube.com/embed/hhdSyBHuI88?rel=0"
},

{
title:"Ye Tune Kya Kiya",
artist:"Javed Bashir",
link:"https://www.youtube.com/embed/4yZ-mn0u8NE?rel=0"
},

{
title:"Tere Liye",
artist:"Atif Aslam & Shreya Ghoshal",
link:"https://www.youtube.com/embed/oQaWXlsSW2c?rel=0"
},

{
title:"Until I Found You",
artist:"Stephen Sanchez",
link:"https://www.youtube.com/embed/XequT12zmfg?rel=0"
},

{
title:"Perfect",
artist:"Ed Sheeran",
link:"https://www.youtube.com/embed/cNGjD0VG4R8?rel=0"
},

{
title:"I Think They Call This Love",
artist:"Elliot James Reay",
link:"https://www.youtube.com/embed/CnEqrgMlWLQ?rel=0"
},

{
title:"Jo Tum Mere Ho",
artist:"Anuv Jain",
link:"https://www.youtube.com/embed/wmUJwQNGK3k?rel=0"
},

{
title:"Die With A Smile",
artist:"Lady Gaga & Bruno Mars",
link:"https://www.youtube.com/embed/zgaCZOQCpp8?rel=0"
},

{
title:"Tere Hone Laga Hoon",
artist:"Atif Aslam",
link:"https://www.youtube.com/embed/OVVZ6lyHV-Y?rel=0"
},

{
title:"I Found Her",
artist:"Stephen Sanchez",
link:"https://www.youtube.com/embed/f5-IY_Ja1RM?rel=0"
},

{
title:"Uski Aankhon Mein",
artist:"Various",
link:"https://www.youtube.com/embed/Db_s0IdsbEc?rel=0"
},

{
title:"Bairan",
artist:"Various",
link:"https://www.youtube.com/embed/oafxkMv4xnc?rel=0"
},

{
title:"Wanna Be Yours",
artist:"Arctic Monkeys",
link:"https://www.youtube.com/embed/fukGbiPuBjU?rel=0"
},

{
title:"Mikrokosmos",
artist:"BTS",
link:"https://www.youtube.com/embed/LXOJk2PFKgY?rel=0"
},

{
title:"Magic Shop",
artist:"BTS",
link:"https://www.youtube.com/embed/VTRGOBT6p80?rel=0"
},

{
title:"Spring Day",
artist:"BTS",
link:"https://www.youtube.com/embed/xEeFrLSkMm8?rel=0"
},

{
title:"Life Goes On",
artist:"BTS",
link:"https://www.youtube.com/embed/-5q5mZbe3V8?rel=0"
},
{
    title:"Euphoria",
artist:"Jungkook (BTS)",
link:"https://www.youtube.com/embed/kX0vO4vlJuU?rel=0"
},

{
title:"Butterfly",
artist:"BTS",
link:"https://www.youtube.com/embed/Xy9heqcKLAI?rel=0"
},

{
title:"Film Out",
artist:"BTS",
link:"https://www.youtube.com/embed/zFT3f9biz68?rel=0"
}

]

};

const paperColors = {

happy:"#FFF9C4",

loved:"#FFDDE8",

calm:"#D9EFFF",

lonely:"#EEE5FF",

angry:"#FFE2E2",

excited:"#E3FFE5",

surprise:"#FFF3E0"
};

paper.style.background =
paperColors[emotion];

const emotionMessages =
messages[emotion];

const randomIndex =
Math.floor(
    Math.random() *
    emotionMessages.length
);

const selected =
emotionMessages[randomIndex];

if(emotion === "surprise"){

    message.innerHTML = `
        <h3>🎵 ${selected.title}</h3>
        <p>${selected.artist}</p>

        <iframe
            width="320"
            height="180"
            src="${selected.link}"
            frameborder="0"
            allowfullscreen>
        </iframe>
    `;

}
else{

    message.textContent =
    selected;

}

document
.getElementById("againBtn")
.addEventListener("click", () => {

    window.location.href =
    "machine.html";

});

document
.getElementById("homeBtn")
.addEventListener("click", () => {

    window.location.href =
    "index.html";

});
