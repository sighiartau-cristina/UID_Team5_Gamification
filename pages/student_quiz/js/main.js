var currentTab = 0;
var modal = document.getElementById("myModal");

$(document).ready( function (){
  currentTab = 0; // Current tab is set to be the first tab (0)
  showTab(currentTab); // Display the current tab
  modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  window.location.href ='../student_page/student_page.html'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.location.href ='../student_page/student_page.html'
  }
}

document.getElementById("boutiqueBtn").onclick = function(){
  window.location.href ='../boutique_pages/clothes_page.html'
};

document.getElementById("closeBtn").onclick = function(){
  window.location.href ='../UID_course_student/uid_course_student.html'
};

document.getElementById("reviewBtn").onclick = function(){
  window.location.href ='../review_page/review_page.html'
};
});

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if(n == (x.length - 2)){
    document.getElementById("nextBtn").innerHTML = "Review";
  }
  else if (n == (x.length - 1)) {
    var theDiv1 = document.getElementById("q1Review");
    var content1 = "Q1 - Option " + $('input[name="q1"]:checked').val();
 
    var theDiv2 = document.getElementById("q2Review");
    var content2 = "Q2 - Option " + $('input[name="q2"]:checked').val();

    document.getElementById("q1Review").innerHTML = content1;
    document.getElementById("q2Review").innerHTML = content2;

    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    //document.getElementById("regForm").submit();
    document.getElementById("nextBtn").style.visibility = 'hidden';
    document.getElementById("prevBtn").style.visibility = 'hidden';
    document.getElementById("step1").style.visibility = 'hidden';
    document.getElementById("step2").style.visibility = 'hidden';
    document.getElementById("step3").style.visibility = 'hidden';

    var correctAnsw=0;
    if($('input[name="q1"]:checked').val()==='2') correctAnsw++;
    if($('input[name="q2"]:checked').val()==='1') correctAnsw++;

    document.getElementById("corrAns").innerHTML = "Correct answers: " + correctAnsw + "/2";
    document.getElementById("tokens").innerHTML = "Tokens earned: " + correctAnsw*50;
    console.log(correctAnsw)

    modal.style.display = "block";
    
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

