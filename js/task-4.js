// const form = document.querySelector("form");

// const loginPassword = {};

// form.addEventListener("submit", (e) => {
//   const value = input.value.trim();

//   if (value === "") {
//     e.preventDefault();
//     alert("All form fields must be filled in");
//     return;
//   } else {
//     loginPassword.email = form.elements.email.value;
//     loginPassword.password = form.elements.password.value;
//   }
// });

// console.log(loginPassword);

const form = document.querySelector("form");

const loginPassword = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  loginPassword.email = email;
  loginPassword.password = password;

  console.log(loginPassword);
});
