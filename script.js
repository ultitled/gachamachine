const emotions =
document.querySelectorAll(".emotion");

emotions.forEach(button => {

    button.addEventListener("click", () => {

        const emotion =
        button.dataset.emotion;

        localStorage.setItem(
            "selectedEmotion",
            emotion
        );

        window.location.href =
        "machine.html";

    });

});