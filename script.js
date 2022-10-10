const passGenerate = document.querySelector(".pass-generator");
const passLength = document.querySelector(".range-length");
const copy = document.querySelector(".copy");
const button = document.querySelector('button')


const updateSlider = () => {
  document.querySelector(".digit").innerText = passLength.value;
  // randomString(length, "aA#!")
};

updateSlider();
passLength.addEventListener("input", updateSlider);


const updateStrength = (percentage) => {
  const element = document.getElementsByClassName("pass-indicator-length");
  console.log("El", element)
  element[0].style.width = `${percentage}%`
}




function randomString(length) {
  var mask = '';
  length = document.querySelector(".digit").innerText
  if (document.querySelector("#lowercase").checked == true ) mask += 'abcdefghijklmnopqrstuvwxyz';
   if (document.querySelector("#uppercase").checked == true ) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   if (document.querySelector("#numbers").checked == true) mask += '0123456789';
   if (document.querySelector("#symbols").checked == true ) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
   if (document.querySelector("#inc-spaces").checked == true ) mask += "            "
  var result = '';
  let maxPass = 0;
  for (var i = length; i > maxPass; null) {
    let isDuplication = document.querySelector("#ex-dublicate").checked == true;
    let newValue = mask[Math.floor(Math.random() * mask.length)];
    console.log("i", i)
    if(isDuplication && result.includes(newValue)) {
    }
    else {
      maxPass++
      result += newValue;
    }
  }

  updateStrength(80);
  return passGenerate.value = result
}

// console.log(randomString(16, 'aA'));
// console.log(randomString(32, '#aA'));
// console.log(randomString(64, '#A!'));

const buttonClick =
  button.addEventListener('click' , () => {
    // console.log("button Clicked", randomString(length))
    randomString(length)
  })
  