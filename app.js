
const searchInput = document.getElementById(searchInput);
const searchText = searchInput.value;

const searchBtn = () => {
    const url = `https: //www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))        
}