function HelloWorld() {
  const myTitle = document.getElementById("schnarvus");
  myTitle.textContent = "Dogs and French Presses!";
}

function PressMe() {
  let Images = ["Images/dog1.jpg", "Images/dog2.jpg", "Images/dog3.jpg"];
  console.log("clicked");
  let Random_Image = Math.floor(Math.random() * 3);
  let randomImageElement = document.querySelector("img");
  randomImageElement.src = Images[Random_Image];
}

function PressMe2() {
  let Images = [
    "Images2/french1.jpg",
    "Images2/french2.jpg",
    "Images2/french3.jpg",
  ];
  console.log("clicked");
  let Random_Image = Math.floor(Math.random() * 3);
  let randomImageElement = document.querySelector("img");
  randomImageElement.src = Images[Random_Image];
}
