const keyword = document.getElementById("keyword");
const makeLink = document.getElementById("button");
const inputGroup = document.querySelector(".input-group");
const input = document.querySelector(".input-group input");
const copyButton = document.querySelector(".input-group button");

const warning = document.getElementById("warning");

const currentUrl = window.location.href.replace(/\/[^/]*$/, "/lmgtfy.html");

makeLink.addEventListener("click", () => {
  if (!keyword.value) {
    warning.removeAttribute("hidden");
    warning.innerText = "Please enter a keyword";
    return;
  }
  input.value = `${currentUrl}?q=${encodeURI(keyword.value)}`;
  inputGroup.removeAttribute("hidden");
  input.select();
  document.execCommand("copy");

  warning.removeAttribute("hidden");
  warning.innerText = "Link copied!";
  warning.classList.add("text-success");
  warning.classList.remove("text-danger");
  // make green
});

copyButton.addEventListener("click", () => {
  input.select();
  document.execCommand("copy");
});
