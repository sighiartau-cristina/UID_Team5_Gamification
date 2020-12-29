function startReview(){
    modal.style.display = "block";
}

function goBack(){
    window.location.href = '../aux_pages/quiz-and-assig-page.html'
}

var modal = document.getElementById("myModal");

$(document).ready( function (){
  
  modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  window.location.href ='prof_review.html'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.location.href ='prof_review.html'
  }
}

document.getElementById("goBack").onclick = function(){
  window.location.href ='prof_review.html'
};

});
