$(document).ready( function (){

  var givenAnswer1 = localStorage.getItem("givenAnswer1");
  var givenAnswer2 = localStorage.getItem("givenAnswer2");
  var correctAnswer1 = localStorage.getItem("correctAnswer1");
  var correctAnswer2 = localStorage.getItem("correctAnswer2");

  console.log(givenAnswer1);

  if(givenAnswer1 === correctAnswer1){
    document.getElementById("question1").className = "question correct";
    switch(correctAnswer1){
        case '1':
            document.getElementById("question1a1").className = "circle circle-check";
            break;
        case '2':
            document.getElementById("question1a2").className = "circle circle-check";
            break;
        case '3':
            document.getElementById("question1a3").className = "circle circle-check";
            break;
    }
  } else {
    document.getElementById("question1").className = "question wrong";
    switch(correctAnswer1){
            case '1':
                document.getElementById("question1a1").className = "circle circle-check-simple";
                break;
            case '2':
                document.getElementById("question1a2").className = "circle circle-check-simple";
                break;
            case '3':
                document.getElementById("question1a3").className = "circle circle-check-simple";
                break;
    }
    switch(givenAnswer1){
                case '1':
                    document.getElementById("question1a1").className = "circle circle-x";
                    break;
                case '2':
                    document.getElementById("question1a2").className = "circle circle-x";
                    break;
                case '3':
                    document.getElementById("question1a3").className = "circle circle-x";
                    break;
        }

  }

  if(givenAnswer2 === correctAnswer2){
      document.getElementById("question2").className = "question correct";
      switch(correctAnswer2){
              case '1':
                  document.getElementById("question2a1").className = "circle circle-check";
                  break;
              case '2':
                  document.getElementById("question2a2").className = "circle circle-check";
                  break;
              case '3':
                  document.getElementById("question2a3").className = "circle circle-check";
                  break;
          }
    } else {
      document.getElementById("question2").className = "question wrong";
      switch(correctAnswer2){
                  case '1':
                      document.getElementById("question2a1").className = "circle circle-check-simple";
                      break;
                  case '2':
                      document.getElementById("question2a2").className = "circle circle-check-simple";
                      break;
                  case '3':
                      document.getElementById("question2a3").className = "circle circle-check-simple";
                      break;
          }
          switch(givenAnswer2){
                      case '1':
                          document.getElementById("question2a1").className = "circle circle-x";
                          break;
                      case '2':
                          document.getElementById("question2a2").className = "circle circle-x";
                          break;
                      case '3':
                          document.getElementById("question2a3").className = "circle circle-x";
                          break;
              }
    }
})