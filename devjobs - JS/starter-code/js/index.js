const main = document.querySelector("main");
function cards({
  logo,
  logoBackground,
  postedAt,
  contract,
  position,
  company,
  location,
  id,
  ...rest
}) {
  const cards = createNode(
    {
      id,
      tag: "div",
      classList: ["card"],
    },
    document.querySelector("main")
  );
  cards.addEventListener("click", function (e) {
    main.innerHTML = "";
    window.location.hash = this.id;
  });
  const time = createNode(
    {
      tag: "div",
      classList: ["time"],
    },
    cards
  );
  createNode(
    {
      tag: "p",
      textContent: postedAt,
    },
    time
  );
  createNode(
    {
      tag: "p",
      textContent: contract,
    },
    time
  );
  createNode(
    {
      tag: "h5",
      textContent: position,
    },
    cards
  );
  createNode(
    {
      tag: "p",
      textContent: company,
    },
    cards
  );
  createNode(
    {
      tag: "h4",
      textContent: location,
    },
    cards
  );
  createNode(
    {
      tag: "img",
      src: logo,
      classList: ["logos"],
      backgroundColor: logoBackground,
    },
    cards
  );
}

Array.prototype.card = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

function render(data) {
  main.innerHTML = "";
  data.card(cards);
}

const hash = window.location.hash;
if (hash.length) {
  const current = data.find(({ id }) => id === +hash.slice(1));
  if (current) {
    singleCard(current);
  } else {
    this.document.querySelector(".advertisment")?.remove();

    this.document.querySelector(".toast").style.display = "flex";
  }
} else {
  render(data);
}

window.addEventListener("hashchange", function (e) {
  const [, hash] = window.location.href.split("#");
  const current = data.find(({ id }) => id === +hash);
  if (current) {
    singleCard(current);
  } else {
    this.document.querySelector(".advertisment").remove();
    this.document.querySelector(".content").remove();
    this.document.querySelector(".footer").remove();
    this.document.querySelector(".toast").style.display = "flex";
  }
});

const isDarkTheme = !!localStorage.getItem("theme");
document.querySelector("#switch").checked = isDarkTheme;

document.querySelector("#switch").addEventListener("click", function (e) {
  if (e.target.checked) {
    localStorage.setItem("theme", "Mililica");
  } else {
    localStorage.removeItem("theme");
  }
});

this.document.querySelector(".toast").addEventListener("click", function (e) {
  this.style.display = "none";
  window.location.hash = "";
});
