let searchValue = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let profileAvatar = document.getElementById("avatar")
let bio = document.getElementById("bio")
let repos = document.getElementById("repos")
let followers = document.getElementById("followers")
let following = document.getElementById("following")
let profileLink = document.getElementById("profileLink")

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

searchBtn.addEventListener("click", getSearchValue);
