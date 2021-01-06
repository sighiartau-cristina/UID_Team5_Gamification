window.onload = function (){

    var logoutBTN = document.getElementById("logout_btn");
    logoutBTN.onclick = function () {
        window.location.href = '../login_page/login_page.html';
    }

    sendMsgBtn = document.getElementById('send_msg')
    msgArea = document.getElementById('actulal_msg')
    chatList = document.getElementById('lista')
    first_msg = document.getElementById('first_msg')
    sendMsgBtn.onclick = function(){
        copy = first_msg.cloneNode(true);

        if(msgArea.value != '')
        {
            copy.childNodes[3].innerHTML = msgArea.value

            copy.class = 'chat-right'
            chatList.appendChild(copy)
        }

    }
}