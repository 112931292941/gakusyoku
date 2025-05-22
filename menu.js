const menuData = [
  {
    name: "日替わり定食",
    price: "700円",
    description: "唐揚げ、サラダ、ご飯、味噌汁付き",
    image: "karaage.jpg"
  },
  {
    name: "カツカレー",
    price: "800円",
    description: "ボリュームたっぷりのカツ入りカレー",
    image: "katsu-curry.jpg"
  }
];

const container = document.getElementById("menu-container");

menuData.forEach(item => {
  const div = document.createElement("div");
  div.className = "menu-item";
  div.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    <p><strong>${item.price}</strong></p>
  `;
  container.appendChild(div);
});
