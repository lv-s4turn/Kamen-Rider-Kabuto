// Data bentuk Kabuto
const forms = {
  masked: {
    title: "Masked Form",
    desc: "Bentuk awal dengan armor tebal yang menutupi seluruh tubuh. Pertahanannya tinggi, tetapi geraknya lebih berat.",
    color: "#8f0a14"
  },
  rider: {
    title: "Rider Form",
    desc: "Muncul setelah Cast Off, saat armor terlepas. Tubuh jadi lebih ringan dan siap melakukan Clock Up untuk bergerak dengan kecepatan tinggi.",
    color: "#e11d2a"
  },
  hyper: {
    title: "Hyper Form",
    desc: "Bentuk penguat yang diperoleh dengan Hyper Zecter. Kabuto juga bisa memakai Hyper Clock Up.",
    color: "#ff5a4d"
  }
};

// Data rider: nama dan serangga dasar Zecter
const riders = [
  { name: "Kabuto", info: "Kabuto Zecter berbentuk kumbang badak. Dipakai oleh Souji Tendou." },
  { name: "Gatack", info: "Gatack Zecter berbentuk kumbang rusa." },
  { name: "Drake", info: "Drake Zecter berbentuk capung." },
  { name: "Sasword", info: "Sasword Zecter berbentuk kalajengking." },
  { name: "TheBee", info: "TheBee Zecter berbentuk lebah." }
];

// Clock Up
const btn = document.getElementById("clockUp");
const state = document.getElementById("clockState");
btn.addEventListener("click", () => {
  const on = document.body.classList.toggle("clock-up");
  btn.setAttribute("aria-pressed", on);
  btn.textContent = on ? "Kembali normal" : "Clock Up";
  state.textContent = on ? "CLOCK UP! Dunia di sekitarmu melambat." : "Waktu berjalan normal.";
});

// Tab bentuk
const tabs = document.querySelectorAll(".tabs button");
const title = document.getElementById("formTitle");
const desc = document.getElementById("formDesc");
const swatch = document.getElementById("formSwatch");

function showForm(key) {
  const f = forms[key];
  title.textContent = f.title;
  desc.textContent = f.desc;
  swatch.style.background = f.color;
  tabs.forEach(t => t.setAttribute("aria-selected", t.dataset.form === key));
}
tabs.forEach(t => t.addEventListener("click", () => showForm(t.dataset.form)));
showForm("masked");

// Kartu rider
const grid = document.getElementById("riders");
riders.forEach(r => {
  const card = document.createElement("button");
  card.className = "card";
  card.innerHTML = `<h3>${r.name}</h3><span>Klik untuk detail</span><p class="more">${r.info}</p>`;
  card.addEventListener("click", () => card.classList.toggle("open"));
  grid.appendChild(card);
});
