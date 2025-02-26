let searchValue = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let profileCard = document.getElementById("profileCard");
let profileAvatar = document.getElementById("avatar");
let bio = document.getElementById("bio");
let repos = document.getElementById("repos");
let followers = document.getElementById("followers");
let following = document.getElementById("following");
let profileLink = document.getElementById("profileLink");

// FUNCTION FOR API FETCH AND GETTING SEARCH VALUE FROM INPUT
const getSearchValue = () => {
  searchValue = searchInput.value;

  console.log(searchValue);

  const url = `https://api.github.com/users/${searchValue}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // DISPLAYING PROFILE CARD
      profileCard.style.display = "block";
      // SETTING PROFILE AVATAR
      profileAvatar.src = data.avatar_url;
      // SETTING BIO
      bio.textContent = data.bio;
      // SETTING REPOS
      repos.textContent = data.public_repos;
      // SETTING FOLLOWERS
      followers.textContent = data.followers;
      // SETTING FOLLOWING
      following.textContent = data.following;
      // SETTING PROFILE LINK
      profileLink.href = data.html_url;
    });
};

searchBtn.addEventListener("click", getSearchValue);
