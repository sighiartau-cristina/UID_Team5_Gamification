$(document).ready(function() {

    $( "#quizpopup" ).hide()

    $("#upcomingAct").mouseenter(function() {
        $("#quizpopup").show();})
    $("#quizpopup").mouseleave(function() {
        $("#quizpopup").hide();
  });

  var quizKey = $('#quizKey')

    $('#startQuiz').on('click', function (e){
        e.preventDefault()
        if(quizKey.val()==="quiz1"){
            $( "#incorrectKey" ).css("visibility", "hidden");
            window.location.href ='../student_quiz/quiz.html'
        }
        else{
            $( "#incorrectKey" ).css("visibility", "visible");
        }
    })

  });
