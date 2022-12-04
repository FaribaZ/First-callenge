function virtual() {
  let name = prompt("what is your name?");
  alert(
    "Sorry " + name + ", we have a technical problem, please try again later.😥"
  );
}
function book() {
  let name = prompt("what is your name?");
  let age = prompt("how old are you?");
  if (age >= 18) {
    let email = prompt("what is your email address?");
    alert("Please check yor mail box " + name + ".😍");
  } else {
    alert("Sorry " + name + ", you have to have your parent permission.😕");
  }
}
function contact() {
  let name = prompt("what is your name?");
  let email = prompt("what is your Email address?");
  alert("We will in touch " + name + ".🤩");
}
let VirtualTour = document.querySelector(".fb");
let bookRoom = document.querySelector(".sb");
let contactUs = document.querySelector(".tb");
VirtualTour.addEventListener("click", virtual);
bookRoom.addEventListener("click", book);
contactUs.addEventListener("click", contact);
