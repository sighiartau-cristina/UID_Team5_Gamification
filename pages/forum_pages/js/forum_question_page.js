var messageToShow = document.getElementById("your-answer");
var buttonEnter = document.getElementById("form-submit");

buttonEnter.onclick = function(event) {
    var parent = buttonEnter.parentElement;
    var input = parent.children[0];

    if(input.value != ''){
        document.getElementById("answerText").innerHTML = input.value;
        input.value = "";
        messageToShow.classList.remove("hidden");
    }
}
