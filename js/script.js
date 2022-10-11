let jokeContainer = document.querySelector("#joke");
let btn = document.querySelector("#btn");


function fun(){
    let request = fetch("https://icanhazdadjoke.com/slack");
    request.then((res) =>{
        return res.json();
    })
    .then((data) =>{
        jokeContainer.textContent = data.attachments[0].fallback;
    })
}


btn.addEventListener("click", function(){
    fun();
})