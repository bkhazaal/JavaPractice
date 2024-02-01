function HelloWorld() {
  const myTitle = document.getElementById("schnarvus");
  myTitle.textContent = "Hello World!";
}

function PressMe() {
  let Images = ["/Images/dog1.jpg", "/Images/dog2.jpg", "/Images/dog3.jpg"];
  console.log("clicked");
  let Random_Image = Math.floor(Math.random() * 3);
  let randomImageElement = document.getElementById("randomImage");
  randomImageElement.src = Images[Random_Image];
}
