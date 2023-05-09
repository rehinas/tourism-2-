
let email=document.getElementById("email");

let eerr=document.getElementById("error2");

function verification(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
   if (regexp.test(email.value)) {
    eerr.innerHTML="Valid";
    eerr.style.color="green";
    return true
   }
   else{
    error.innerHTML="invalid";
    error.style.color="red";
    return false
   }
}