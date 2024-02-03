const form = document.querySelector("form");
eName = form.querySelector(".name"),
eInput = eName.querySelector("input"),
pEmail = form.querySelector(".password"),
pInput = pEmail.querySelector("input");
aSub  = form.querySelector(".subject"),
aInput = aSub.querySelector("input"),
bMess  = form.querySelector(".message"),
bInput = bMess.querySelector("input"),

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eName.classList.add( "error") : checkName();
  (pInput.value == "") ? pEmail.classList.add( "error") : checkEmail();
  (aInput.value == "") ? aSub.classList.add( "error") : checkSub();
  (bInput.value == "") ? bMess.classList.add( "error") : checkMess();

//   setTimeout(()=>{ //remove shake class after 500ms
//     eField.classList.remove("shake");
//     pField.classList.remove("shake");
//   }, 500);

  eInput.onkeyup = ()=>{checkName();}
  pInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  aInput.onkeyup = ()=>{checkSub();} 
  bInput.onkeyup = ()=>{checkMess();}//calling checkPassword function on pass input keyup

  function checkName(){ //checkPass function
    if(eInput.value == ""){ //if pass is empty then add error and remove valid class
      eName.classList.add("error");
      eName.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      eName.classList.remove("error");
      eName.classList.add("valid");
    }
  }
  
  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!pInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      pEmail.classList.add("error");
      pEmail.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (pInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      pEmail.classList.remove("error");
      pEmail.classList.add("valid");
    }
  }

  function checkSub(){ //checkPass function
    if(aInput.value == ""){ //if pass is empty then add error and remove valid class
      aSub.classList.add("error");
      aSub.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      aSub.classList.remove("error");
      aSub.classList.add("valid");
    }
  }
  function checkMess(){ //checkPass function
    if(bInput.value == ""){ //if pass is empty then add error and remove valid class
      bMess.classList.add("error");
      bMess.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      bMess.classList.remove("error");
      bMess.classList.add("valid");
    }
  }

  // if eField and pField doesn't contains error class that mean user filled details properly
  if(!eName.classList.contains("error") && !pEmail.classList.contains("error")&& !aSub.classList.contains("error")&& !bMess.classList.contains("error")){
    window.location.href = form.getAttribute("action"); 
    alert("Login Successfull");//redirecting user to the specified url which is inside action attribute of form tag
  }
}