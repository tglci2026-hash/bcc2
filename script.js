// SOLDE (afficher / cacher)
let balanceVisible = true;

const balanceElement = document.getElementById("balance");
const toggleBtn = document.getElementById("toggleBalance");

toggleBtn.addEventListener("click", () => {

  if (balanceVisible) {
    balanceElement.innerText = "****";
  } else {
    balanceElement.innerText = "0 BCC";
  }

  balanceVisible = !balanceVisible;
});


// SIMULATION NOTIFICATION (option simple)
const notification = document.querySelector(".icon");

notification.addEventListener("click", () => {
  alert("Aucune notification pour le moment");
});


// ACTIONS (bientôt disponible)
const actions = document.querySelectorAll(".action");

actions.forEach(action => {
  action.addEventListener("click", () => {
    alert("Fonction bientôt disponible");
  });
});
