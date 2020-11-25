import $ from 'jquery';

export const logIn = document.createElement('li');
export const signUp = document.createElement('li');
export const logOut = document.createElement('li');

logOut.className = "nav-item active";
logOut.style.display = "none"
const logOutLink = document.createElement("a");
logOutLink.className = "nav-link";
logOutLink.href = "#";
logOutLink.textContent = "Log out";
logOut.append(logOutLink);

logOutLink.addEventListener('click', () => {
  logIn.style.display = "block";
  signUp.style.display = "block";
  logOut.style.display = "none";
})

logIn.className = "nav-item active";
const logInLink = document.createElement("a");
logInLink.className = "nav-link";
logInLink.href = "#";
logInLink.textContent = "Log in";
logInLink.setAttribute("data-toggle", "modal");
logInLink.setAttribute("data-target", "#logInModal")
logIn.append(logInLink);

export const modalLogIn = document.createElement('div');
modalLogIn.className = "modal";
modalLogIn.tabIndex = "-1";
modalLogIn.role = "dialog";
modalLogIn.id = "logInModal"
modalLogIn.innerHTML = `
<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Log in to your account</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="loginEmail">Email</label>
            <input type="email" class="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter your email address">
            <small id="emailHelpLogin" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for="loginPassword">Password</label>
            <input type="password" class="form-control" id="loginPassword" placeholder="Password">
            <small id="emailHelpPassword" class="form-text text-muted"></small>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" id="loginBtn">Log in</button>
      </div>
    </div>
  </div>`

document.body.append(modalLogIn);

signUp.className = "nav-item active";
const signUpLink = document.createElement("a");
signUpLink.className = "nav-link";
signUpLink.href = "#";
signUpLink.textContent = "Sign up"
signUpLink.setAttribute("data-toggle", "modal");
signUpLink.setAttribute("data-target", "#signUpModal")
signUp.append(signUpLink);

export const modalSignUp = document.createElement('div');
modalSignUp.className = "modal";
modalSignUp.tabIndex = "-1";
modalSignUp.role = "dialog";
modalSignUp.id = "signUpModal";
modalSignUp.innerHTML = `
<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Create your account</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="signUpEmail">Email</label>
            <input type="email" class="form-control" id="signUpEmail" aria-describedby="emailHelp" placeholder="Enter your email address">
            <small id="emailHelpSignUp" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for="signUpPassword">Password</label>
            <input type="password" class="form-control" id="signUpPassword" placeholder="Password">
            <small id="signUpHelpPassword" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for="signUpConfirmPassword">Confirm your password</label>
            <input type="password" class="form-control" id="signUpConfirmPassword" placeholder="Password">
            <small id="signUpHelpPasswordConfirm" class="form-text text-muted"></small>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" id="signUpBtn">Sign Up</button>
      </div>
    </div>
  </div>`

document.body.append(modalSignUp);

const loginBtn = document.querySelector("#loginBtn");
const signUpBtn = document.querySelector("#signUpBtn");

loginBtn.addEventListener('click', () => {
  document.querySelector('#emailHelpLogin').textContent = "";
  document.querySelector('#emailHelpPassword').textContent = "";
  const email = document.querySelector('#loginEmail').value;
  const password = document.querySelector('#loginPassword').value;
  if(email.trim() === "" || email === undefined || email === null) {
    document.querySelector("#emailHelpLogin").textContent = "Please enter your email address";
    return;
  }
  if(password.trim() === "" || password === undefined || password === null) {
    document.querySelector("#emailHelpPassword").textContent = "Please enter your password";
    return;
  }
  const checkEmail = localStorage.getItem(email);
  if(checkEmail === undefined || checkEmail === null) {
    document.querySelector("#emailHelpPassword").textContent = "Wrong email or password";
    return;
  }
  if(checkEmail !== password) {
    document.querySelector("#emailHelpPassword").textContent = "Wrong email or password";
    return;
  }

  $('#logInModal').modal('hide')
  logIn.style.display = "none";
  signUp.style.display = "none";
  logOut.style.display = "block"
})

logInLink.addEventListener('click', () => {
  document.querySelector('#emailHelpLogin').textContent = "";
  document.querySelector('#emailHelpPassword').textContent = "";
  document.querySelector('#loginEmail').value = "";
  document.querySelector('#loginPassword').value = "";
})

signUpBtn.addEventListener('click', () => {
  document.querySelector('#emailHelpSignUp').textContent = "";
  document.querySelector("#signUpHelpPassword").textContent = "";
  document.querySelector("#signUpHelpPasswordConfirm").textContent = "";
  const email = document.querySelector('#signUpEmail').value;
  const password = document.querySelector('#signUpPassword').value;
  const passwordConfirm = document.querySelector('#signUpConfirmPassword').value;
  
  if(email === "" || email === undefined || email === null) {
    document.querySelector("#emailHelpSignUp").textContent = "Please enter your email address";
    return;
  }
  if(password !== passwordConfirm) {
    document.querySelector("#signUpHelpPasswordConfirm").textContent = "Passwords don`t match";
    return;
  }
  if(password.trim().length < 6) {
    document.querySelector("#signUpHelpPassword").textContent = "Password length should be more than 6 letters";
    return;
  }
  const checkEmail = localStorage.getItem(email);
  if(checkEmail !== undefined && checkEmail !== null) {
    document.querySelector("#emailHelpSignUp").textContent = "Sorry, this email is unaviable";
    return;
  }

  localStorage.setItem(email, password);
  $('#signUpModal').modal('hide');
})

signUpLink.addEventListener('click', () => {
  document.querySelector('#signUpEmail').value = "";
  document.querySelector('#emailHelpSignUp').textContent = "";
  document.querySelector("#signUpHelpPassword").textContent = "";
  document.querySelector("#signUpHelpPasswordConfirm").textContent = "";
  document.querySelector('#signUpPassword').value = "";
  document.querySelector('#signUpConfirmPassword').value = "";
})
