function registerAction() {
  const {value: email} = document.getElementById("emailRegister");
  const {value: password} = document.getElementById("passwordRegister");
  const {value: nombre} = document.getElementById("nombreRegister")
  const {value: apellido} = document.getElementById("apellidoRegister")
  const {value: dni} = document.getElementById("dniRegister")
  const data = {nombre, email, password, apellido, dni}
  ajax("POST", "/register", data, function(res){
    window.location.href = "/cines"
  })

}

function isEmail(){
  const inputEmail = document.getElementById("emailRegister")
  const arrayEmail = inputEmail.value.split("@")
  /*Que tenga arroba */
  if(arrayEmail.length < 2){
    inputEmail.style.border = "1px red solid";
  }else{
    inputEmail.style.border = "1px gray solid";
  }
  /*Verificamos la primera parte */
  if(arrayEmail[0] === ''){
    inputEmail.style.border = "1px red solid";
  }else{
    inputEmail.style.border = "1px gray solid";
  }
  /*Verificamos que tengo domino y .com */
  
}

function passwordOk(){

}

function isString(){
    
}

function isDNI(){

}