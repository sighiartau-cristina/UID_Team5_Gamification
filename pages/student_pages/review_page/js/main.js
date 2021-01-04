function startReview(){
    modal.style.display = "block";
}

var modal = document.getElementById("myModal");

$(document).ready( function (){

  var corrAns = localStorage.getItem("corrAns");

  document.getElementById("totalCorrectAnswers").innerHTML = "Correct answers: " + corrAns + "/2";
  console.log("Correct answers: " + corrAns + "/2");
  document.getElementById("grade").innerHTML = "Grade: " + corrAns * 5 + ".00/10.00";

  modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

});
