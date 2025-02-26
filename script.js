let searchValue = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let profileCard = document.getElementById("profileCard");
let profileAvatar = document.getElementById("avatar");
let username = document.getElementById("name");
let bio = document.getElementById("bio");
let repos = document.getElementById("repos");
let followers = document.getElementById("followers");
let following = document.getElementById("following");
let profileLink = document.getElementById("profileLink");
let loader = document.getElementById("loader");

// FUNCTION FOR API FETCH AND GETTING SEARCH VALUE FROM INPUT
const getSearchValue = () => {
  searchValue = searchInput.value;
  const url = `https://api.github.com/users/${searchValue}`;

  // Show loader before fetching
  loader.style.display = "block";
  profileCard.style.display = "none"; // Hide profile card initially
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      loader.style.display = "none"; // Hide loader after fetching

      if (data.message === "Not Found") {
        alert("User not found");
        return;
      }

      // DISPLAYING PROFILE CARD
      profileCard.style.display = "block";
      // SETTING PROFILE AVATAR
      profileAvatar.src = data.avatar_url;
      // SETTING USERNAME
      username.textContent = data.name;
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
    })
    .catch((error) => {
      loader.style.display = "none"; // Hide loader in case of error
      alert("An error occurred. Please try again.");
      console.error("Error: ", error);
    });
};

searchBtn.addEventListener("click", getSearchValue);
