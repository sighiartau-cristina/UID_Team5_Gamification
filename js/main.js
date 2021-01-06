(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();
	

})(jQuery);

function confirmQuizKey(){
    var quizkey = prompt("Please enter the quiz key", "");
    console.log(quizkey)
    if (quizkey==="quiz1") {
        window.location.href = '../student_quiz/quiz.html'
    } else if(quizkey!=null){
      alert("Incorrect key!")
    }
}
