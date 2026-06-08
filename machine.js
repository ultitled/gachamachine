const coin = document.getElementById("coin");
const knob = document.getElementById("knobHotspot");
const machine = document.getElementById("machine");
const instruction = document.getElementById("instruction");
const target = document.getElementById("target");

let coinInserted = false;
let machineRunning = false;

/* ==========================
   COIN INSERTION
========================== */

coin.addEventListener("click", () => {

    if (coinInserted) return;

    coinInserted = true;

    const coinRect =
        coin.getBoundingClientRect();

    const targetRect =
        target.getBoundingClientRect();

    const dx =
      (targetRect.left + targetRect.width / 2) -
      (coinRect.left + coinRect.width / 2);

    const dy =
      (targetRect.top + targetRect.height / 2) -
            (coinRect.top + coinRect.height / 2);

    coin.style.transform =
        `translate(${dx}px, ${dy}px)
         scale(0.2)
         rotate(720deg)`;

    instruction.innerText =
        "✨ Coin inserted! Turn the knob.";

    setTimeout(() => {

        coin.style.opacity = "0";

        knob.style.pointerEvents = "auto";

        knob.style.opacity = "1";

    }, 1400);

});


/* ==========================
   KNOB TURN
========================== */

knob.addEventListener("click", () => {

    if (!coinInserted) return;

    if (machineRunning) return;

    machineRunning = true;

    instruction.innerText =
        "🎰 Dispensing capsule...";

    knob.classList.add("spin");

    machine.classList.add("shake");

    setTimeout(() => {

        window.location.href =
            "capsule.html";

    }, 1800);

});