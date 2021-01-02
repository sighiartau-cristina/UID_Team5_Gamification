var currentTab = 0;
var setProps = false;

$(document).ready(function () {
  currentTab = 0; // Current tab is set to be the first tab (0)
  showTab(currentTab); // Display the current tab

  var checkbox = document.querySelector("input[name=timedQ]");

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      document.getElementById("minQ").disabled = false;
    } else {
      document.getElementById("minQ").disabled = true;
    }
  });
});

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  }
  else if (n == 1) {
    //document.getElementById("prevBtn").style.display = "inline";
    document.getElementById("prevBtn").style.display = "none";
    var q = parseInt(document.getElementById("noOfQ").value)
    if (q > 1 && !setProps) {
      addTabs(q)
    }
    setProps = true;
  }
  else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  var x = document.getElementsByClassName("tab");
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
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
    window.location.href='../prof_UID_course/uid_course_prof.html'
    alert("Quiz was successfully added!")
    return false;
  }
  // Otherwise, display the correct tab:
  if (currentTab === 1) {
    //add tabs for the number of questions
  }
  showTab(currentTab);
}

function addTabs(q) {
  if (q > 1) {
    for (i = 2; i <= q; i++) {
      $(".form-container").append(constructDiv(i));
    }
  }
}

function addOptions(n) {
  var lab = document.getElementById("labelQ" + n).value
  var empty = "emptyInput" + n;

  if((lab.trim().length!=0)){
    document.getElementById(empty).style.visibility = "hidden";
    var cont = ".answersQ" + n;
    var divText = '<input type="checkbox" name="ansQ' + n + '"><label style="font-size: 20px;" id="ansQ' + n + 'label">' + lab + '</label><br>'
    $(cont).append(divText);
  }
  else{
    document.getElementById(empty).innerHTML = "Please input an answer.";
    document.getElementById(empty).style.visibility = "visible";
  }

  return false;
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:

  var empty = "emptyInput"

  document.getElementById(empty).style.visibility = "hidden";

  if (currentTab == 0) {
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "" && y[i].disabled == false && y[i].id != "img") {
        document.getElementById(empty).innerHTML = "Please fill in all fields.";
        document.getElementById(empty).style.visibility = "visible";
        valid = false;
      }

      if (((y[i].id === "minQ" && y[i].disabled == false) || y[i].id === "noOfQ") && isNaN(y[i].value)) {
        document.getElementById(empty).innerHTML = "Number field is not a number.";
        document.getElementById(empty).style.visibility = "visible";
        valid = false;
      }
    }
  }
  else {
    empty = empty + currentTab
    for (i = 0; i < y.length; i++) {
      if (y[i].value == "" && window.getComputedStyle(document.getElementById(y[i].id)).visibility==="visible" && !y[i].id.includes("label")) {
        document.getElementById(empty).innerHTML = "Please fill in all fields.";
        document.getElementById(empty).style.visibility = "visible";
        valid = false;
        return false;
      }

      if(y[i].id.includes("tokensQ") && isNaN(y[i].value)){
        document.getElementById(empty).innerHTML = "Number field is not a number.";
        document.getElementById(empty).style.visibility = "visible";
        valid = false;
        return valid;
      }

      var multiple = "multipleQ" + currentTab;
      var ans = "ansQ" + currentTab;
      if(document.getElementById(multiple).style.visibility === "visible"){

        var total = x[currentTab].querySelectorAll('input[type="checkbox"]').length
        var checked = x[currentTab].querySelectorAll('input[type="checkbox"]:checked').length

        if(total === 0){
          document.getElementById(empty).innerHTML = "Please provide answer options.";
          document.getElementById(empty).style.visibility = "visible";
          valid=false;
        }
        else if(checked === 0){
          document.getElementById(empty).innerHTML = "Please provide correct options by checking them.";
          document.getElementById(empty).style.visibility = "visible";
          valid=false;
        }
        else{
          document.getElementById(empty).style.visibility = "hidden";
        }
        console.log(total + " " + checked);
      }

    }
  }

  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementById(empty).style.visibility = "hidden";
  }

  return valid; // return the valid status
}

function constructDiv(n) {
  var qHeader = '<img src="../../../images/icons/question-mark.png"><h1>Question ' + n + '</h1><br>'
  var selectList = '<label for="selectTypeList">Type: </label><select name="selectTypeList" id="selectTypeQ' + n + '" onchange="selectType(' + n + ')">' +
    '<option value="unserInput">User input</option>' +
    '<option value="multipleChoice">Multiple choice</option>' +
    '<option value="fileUpload">File Upload</option></select><br>'
  var tokens = '<label id="tokensQ' + n + '">Tokens:</label><input id="tokensQ' + n + '" type="text"></input><br>'
  var text = '<label id="textQ' + n + '">Question:</label><input id="textQ' + n + '" type="text"></input><hr>'
  var noAns = '<h2 style="position:absolute; text-align: center; padding-left: 10px; visibility: hidden;" id="noAnsQ' + n + '">No need to provide an answer.</h2>'
  var inputAns = '<div style="position:absolute; padding-left: 10px; visibility: visible;" id="inputAnsQ' + n + '">' +
    '<h2 style="text-align: center;">Please provide the answer:</h2>' +
    '<input style="vertical-align: center;" id="inputQ' + n + '" type="text"></input></div>'
  var multiple = '<div style="position:absolute; padding-left: 10px; visibility: hidden;" id="multipleQ' + n + '">' +
    '<h3 style="text-align: center;">Please add options and mark the correct ones:</h3>' +
    '<button id="addAnsQ' + n + '"  type="button" onclick="addOptions(' + n + ')">+</button>' +
    '<input style="vertical-align: center;" id="labelQ' + n + '" type="text"></input>' +
    '<div style="overflow-y:auto; max-height: 100px;"class="answersQ' + n + '"></div></div>'
  var errors = '<p id="emptyInput' + n + '" style="padding-left:20px; color:red; visibility: hidden;"></p>'
  var finalDiv = '<div class="tab"><div class="question-backround">' + qHeader + selectList + tokens + text + noAns + inputAns + multiple + '</div>' + errors + '</div>'
  return finalDiv
}

function selectType(n) {
  var listId = 'selectTypeQ' + n;
  var type = document.getElementById(listId).value

  var noAns = "noAnsQ" + n;
  var inputAns = "inputAnsQ" + n;
  var multiple = "multipleQ" + n;

  if (type === 'unserInput') {
    document.getElementById(noAns).style.visibility = "hidden";
    document.getElementById(inputAns).style.visibility = "visible";
    document.getElementById(multiple).style.visibility = "hidden";
  }
  else if (type === 'multipleChoice') {
    document.getElementById(noAns).style.visibility = "hidden";
    document.getElementById(inputAns).style.visibility = "hidden";
    document.getElementById(multiple).style.visibility = "visible";
  }
  else {
    document.getElementById(noAns).style.visibility = "visible";
    document.getElementById(inputAns).style.visibility = "hidden";
    document.getElementById(multiple).style.visibility = "hidden";
  }
}