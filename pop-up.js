
function confirmation() {
  let txt = "";
  if (confirm("Are you sure you want to submit?")) {
    txt = "You pressed YESS!";
  } else {
    txt = "You pressed CANCEL :'((";
  }
  document.getElementById("popup").innerHTML = txt;
}
