
let searchValue = document.getElementById('searchInput')

const getSearchValue = () => {
    searchValue = searchInput.value

    console.log(searchValue)

    
const url = `https://api.github.com/users/${searchValue}`

    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
    }
)
}   

searchInput.addEventListener('input', getSearchValue)



