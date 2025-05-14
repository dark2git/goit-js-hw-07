`use strict`;
const allItems = document.querySelectorAll(".item")
console.log(`Number of categories: ${allItems.length}`);
allItems.forEach(item => {
    console.log(`Category: ${item.querySelector("h2").textContent}`)
    console.log(`Elements: ${item.querySelectorAll("li").length}`)
});
