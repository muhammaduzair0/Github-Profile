let searchValue = document.getElementById("searchInput");

// FUNCTION FOR API FETCH AND GETTING SEARCH VALUE FROM INPUT
const getSearchValue = () => {
  searchValue = searchInput.value;

  console.log(searchValue);

  const url = `https://api.github.com/users/${searchValue}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

searchInput.addEventListener("input", getSearchValue);
