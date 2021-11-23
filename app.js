const children = document.querySelectorAll(".child");
const generate = document.querySelector(".generate");
const output = document.getElementById("output");
const btn = document.getElementById("btn");
const alert = document.querySelector(".alert");

btn.addEventListener("click", () => {
  let text = output.value;
  copyTextToClipboard(text);
  setTimeout(hideClipboard, 3000);
});

function hideClipboard() {
  alert.style.transform = "translate(0,0)";
}

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert.style.transform = "translate(0,100%)";
  } catch (err) {
    alert("Error in copying text: ", err);
  }
}

generate.addEventListener("click", () => {
  generatePassword();
});

function generatePassword() {
  active = document.querySelectorAll(".child");
  active.forEach((item) => {
    if (item.classList.contains("low")) {
      output.innerText = generateLow();
    }
    if (item.classList.contains("medium")) {
      output.innerText = generateMedium();
    }
    if (item.classList.contains("high")) {
      output.innerText = generateHigh();
    }
  });
}

function generateLow() {
  const size = 8;
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";
  for (i = 0; i < size; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return str;
}
function generateMedium() {
  const size = 12;
  let string = "";
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let special = "!#$%&/()=@£§€{}.-";
  for (i = 0; i < size; i++) {
    string += chars.charAt(Math.floor(Math.random() * chars.length));
    string += special.charAt(Math.floor(Math.random() * special.length));
  }

  return string;
}
function generateHigh() {
  const size = 16;
  let string = "";
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let special = "!#$%&/()=@£§€{}.-";
  for (i = 0; i < size; i++) {
    string += chars.charAt(Math.floor(Math.random() * chars.length));
    string += special.charAt(Math.floor(Math.random() * special.length));
  }

  return string;
}

children.forEach((child) =>
  child.addEventListener("click", () => {
    removeClass();
    switch (child.innerHTML) {
      case "LOW":
        child.classList.add("low");
        break;
      case "MEDIUM":
        child.classList.add("medium");
        break;
      case "HIGH":
        child.classList.add("high");
        break;
      default:
        console.log("default");
    }
  })
);

function removeClass() {
  children.forEach((child) => {
    child.classList.remove("low");
    child.classList.remove("medium");
    child.classList.remove("high");
  });
}
