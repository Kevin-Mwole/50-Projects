const sounds = [
    "light-rain",
    "laser-gun-thunder",
    "swoosh-heartbeat",
    "melodical-flute",
    "little-birds",
    "classic-alarm",
    "retro-game",
];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopTune();

        document.getElementById(sound).play();
    });

    document.getElementById("buttons").appendChild(btn);
});

function stopTune() {
    sounds.forEach((sound) => {
        const tune = document.getElementById(sound);

        tune.pause();
        tune.currentTime = 0;
    });
}
