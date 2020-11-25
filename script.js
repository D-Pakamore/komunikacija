let currentJoke;

const UI = {
    newJokeButton: document.querySelector(".newJokeButton"),
    setup: document.querySelector(".setup"),
    joke: document.querySelector(".joke"),
    revealButton: document.querySelector(".revealButton")
};

UI.newJokeButton.addEventListener("click", () => {
    fetchJoke();
});

function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke").then((response) => {
        console.log("Atsakymas iš serverio gautas!");
    
        response.json().then((data) => {
            // Juokelis paverstas į JSON
            currentJoke = data;

            console.log(currentJoke);
            renderJoke();
        });
    });
}

function renderJoke() {
    UI.setup.innerHTML = currentJoke.setup;
    UI.joke.innerHTML = currentJoke.punchline;
}
