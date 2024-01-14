const toggleButton = document.getElementsByClassName("menuBar")[0];

const navLinks = document.getElementsByClassName("navBarList")[0];

toggleButton.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

var menuItems = navLinks.getElementsByTagName("li");
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
}

const albums = document.getElementsByClassName("container")[0];
const button = document.getElementById("addBtn");

button.addEventListener("click", function () {
  const imageURL = document.getElementById("image").value;
  const description = document.getElementById("desc").value;

  const album = createAlbum(imageURL, description);
  albums.appendChild(album);
});

function createAlbum(imageURL, description) {
  const albumDiv = document.createElement("div"); //<div>
  albumDiv.className = "album";

  const image = document.createElement("img");
  image.setAttribute("src", imageURL);

  const paragraph = document.createElement("p");
  paragraph.textContent = description;

  const albumFooter = document.createElement("div");
  albumFooter.className = "albumFooter";

  const buttonDiv = document.createElement("div");
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");

  button1.textContent = "view";
  button2.textContent = "edit";

  buttonDiv.appendChild(button1);
  buttonDiv.appendChild(button2);

  const timeElement = document.createElement("span");
  timeElement.textContent = "9 min";

  albumFooter.appendChild(buttonDiv);
  albumFooter.appendChild(timeElement);

  albumDiv.appendChild(image);
  albumDiv.appendChild(paragraph);
  albumDiv.appendChild(albumFooter);

  return albumDiv;
}

//<div>
//</div>
