const quantityCategories = document.querySelectorAll(".item");

let quantity = 0;

for (const category of quantityCategories) {
  quantity += 1;
}
console.log(`Number of categories: ${quantity}`);

for (const category of quantityCategories) {
  const title = category.querySelector("h2").textContent;

  const quantityAnimals = category.querySelectorAll("li").length;

  console.log("Category:", title);
  console.log("Elements:", quantityAnimals);
}
