const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: `, categories.length);

categories.forEach((category, i) => {
    const categoriesTitles = categories[i].firstElementChild.textContent;
    console.log(`Category: ${categoriesTitles}`);

    const subcategories = categories[i].lastElementChild;
    const numberOfSubcategories = subcategories.querySelectorAll("li");
    console.log(`Elements: `, numberOfSubcategories.length);
});