function loginAction() {
  const email = document.getElementById("emailRegister");
  const password = document.getElementById("passwordRegister");
  ajax("POST", "/login", null, function (res) {});
}

async function validateStart(){
  await isMail()
  await validatePassword()
}

async function isMail(){
  console.log("Es mail")
  const input = document.querySelector(".usuarioId");

}

async function validatePassword(){
  console.log("Es password")
  const input 
}