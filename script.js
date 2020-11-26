let currentJoke;

const UI = {
    newJokeButton: document.querySelector(".newJokeButton"),
    setup: document.querySelector(".setup"),
    joke: document.querySelector(".joke"),
    revealButton: document.querySelector(".reveal")
};

UI.newJokeButton.addEventListener("click", () => {
    fetchJoke();
    setTimeout(function(){ UI.revealButton.style.display = "block"; }, 2000);
    UI.joke.style.display = "none";
});
UI.revealButton.addEventListener("click", () => {
    UI.revealButton.style.display = "none";
    UI.joke.style.display = "block";
});

function fetchJoke() {
    fetch(" https://sv443.net/jokeapi/v2/joke/pun").then((response) => {
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
    UI.joke.innerHTML = currentJoke.delivery;;
}


