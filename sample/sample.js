function validateForm(){
  var formValues = document.forms[0]["your-name"].value;

  if(formValues === ""){
    alert("Please include your name");
    document.getElementById('name').style.border = '1px solid red';
    return false;
  } else if (formValues >= -Infinity){
    alert("Please makes sure your name doesn't include numbers");
    return false;
  } else {
    return document.write("Welcome To The Team");
  }
}
