window.onload  = function () {



    allBuyButtons = document.getElementsByClassName("buy_btn");
    available_tokens = document.getElementById("available_tokens");

    for(let i=0;i<allBuyButtons.length;i++)
    {
        currentBuyBtn = allBuyButtons[i]
        currentBuyBtn.onclick = function () {
            addBtnFunctionality(this,available_tokens)
        }
    }

    var logoutBTN = document.getElementById("logout_btn");
    logoutBTN.onclick = function () {
        window.location.href = '../login_page/login_page.html';
    }
}

function addBtnFunctionality(button, available_tokens){
    tokens = parseInt(available_tokens.innerText.split(" ")[2])
    price = parseInt(button.parentNode.childNodes[3].innerText.split(" ")[0])
    if(tokens-price >= 0)
    {
        tokens = tokens - price;
        available_tokens.innerText = "Available tokens: " + tokens

        button.style.backgroundColor = "black"
        button.innerText = "owned"
        button.disabled = true
    }
    else
    {
        alert("You don't have enough tokens to buy that!")
    }
}