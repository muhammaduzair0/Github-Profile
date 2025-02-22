
let searchValue = document.getElementById('searchInput')

const getSearchValue = () => {
    searchValue = searchInput.value

    console.log(searchValue)
}   

searchInput.addEventListener('input', getSearchValue)

const url = `https://api.github.com/users/${searchValue}`


