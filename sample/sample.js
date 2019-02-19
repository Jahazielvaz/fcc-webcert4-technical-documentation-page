function validateForm(){
  var formValues = document.forms[0]["your-name"].value;

  if(formValues == ""){
    alert("Please include your name");
    document.getElementById('name').style.border = '1px solid red';
    return false;
  }
}
