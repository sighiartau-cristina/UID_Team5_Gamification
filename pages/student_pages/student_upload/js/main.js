var file=false;

function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    file=true;
    $('#label').hide();
    $('#files').append("ASSIGNMENT FILE<br>")
  }

  function openAttachment() {
    $('#attachment').click();
  }

  function fileSelected(input){
    file=true;
    $('#label').hide();
    $('#files').append("ASSIGNMENT FILE<br>")

  }

  function submitAssignment(){
      if(!file){
          alert("Please choose files first.")
      }
      else{
      window.location.href='../student_upload/submitted_assignment.html'
    }
  }