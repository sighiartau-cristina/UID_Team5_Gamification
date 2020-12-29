var dropped=false;

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    dropped=true;
    $('#files').append("FILE<br>")
  }

  function uploadFiles(){
      if(!dropped){
          alert("Please choose files first.")
      }
      else{
      alert("Your files have been uploaded.")
      window.location.href='../prof_UID_course/uid_course_prof.html'
    }
  }