let darkmode = false;
let isOpen = false;
const quotes = [
  {
    quote: "Fais de ta vie un rêve, et d'un rêve, une réalité.",
    author: " Antoine de Saint-Exupéry",
  },
  { quote: "Le souvenir, c'est la présence invisible.", author: "Victor Hugo" },
  {
    quote:
      "Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours.",
    author: "Gandhi",
  },
  {
    quote:
      "Lorsqu'une porte du bonheur se ferme, une autre s'ouvre ; mais parfois on observe si longtemps celle qui est fermée qu'on ne voit pas celle qui vient de s'ouvrir à nous.",
    author: "Helen Keller",
  },
  {
    quote:
      "La vie sans musique est tout simplement une erreur, une fatigue, un exil.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "Si ceux qui disent du mal de moi savaient exactement ce que je pense d'eux, ils en diraient bien davantage.",
    author: "Sacha Guitry",
  },
  {
    quote:
      "Deux choses sont infinies : l'Univers et la bêtise humaine. Mais en ce qui concerne l'Univers, je n'en ai pas encore acquis la certitude absolue.",
    author: "Albert Enstein",
  },
  {
    quote:
      "A la fin, nous nous souviendrons non pas des mots de nos ennemis, mais des silences de nos amis.",
    author: "Martin Luther King",
  },
  {
    quote:
      "Le premier savoir est le savoir de mon ignorance : c'est le début de l'intelligence.",
    author: "Socrate",
  },
  {
    quote: "Quand on veut on peut, quand on peut on doit.",
    author: "Napoléon Bonaparte",
  },
];

window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  console.log(event.target);
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function generatePassword() {
  var passwordContent =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
  var password = "";
  for (var i = 0; i < 20; i++) {
    var randomIndex = Math.floor(Math.random() * passwordContent.length);
    password += passwordContent[randomIndex];
  }
  const passwordInput = document.getElementById("password");
  passwordInput.value = password;
  return password;
}

function celsiusToFahrenHeit(type) {
  const celsius = document.getElementById("converter-celsius");
  const fahrenheit = document.getElementById("converter-fahrenheit");

  if (type === "fahrenheit") {
    fahrenheit.value = Math.round((celsius.value * 9) / 5 + 32 * 100) / 100;
  } else {
    celsius.value = Math.round((((fahrenheit.value - 32) * 5) / 9) * 100) / 100;
  }
}

async function openModal() {
  const number = Math.floor(Math.random() * quotes.length);

  var modal = document.getElementById("myModal");
  var quote = document.getElementById("quote");
  var author = document.getElementById("author");

  quote.textContent = quotes[number].quote;
  author.textContent = quotes[number].author;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none ";
}

function setDarkMode() {
  darkmode = !darkmode;
  var title = document.getElementById("darkModeTitle");
  var btn = document.getElementById("darkModeBtn");
  title.textContent = darkmode
    ? "Rallumer la lumière ?"
    : "Eteindre la lumière ?";
  btn.textContent = darkmode
    ? "Activer le mode clair"
    : "Activer le mode sombre";

  document.body.classList.toggle("dark-mode");
}

function openNav() {
  isOpen = !isOpen;
  document.getElementById("mySidenav").style.width = isOpen ? "250px" : "0";
}
