document.addEventListener("DOMContentLoaded", function () {
  // Your existing JavaScript code here...

  // Example function to add images dynamically
  function addImages() {
    const spinContainer = document.getElementById("spin-container");

    const imageUrls = [
      "https://img.hoidap247.com/picture/answer/20220607/large_1654574826404.jpg?v=0",
      // Add more image URLs here...
    ];

    imageUrls.forEach((url) => {
      const img = document.createElement("img");
      img.src = url;
      spinContainer.appendChild(img);
    });
  }

  // Call your existing init function here
  init();

  // Call the addImages function to add images dynamically
  addImages();

  // Update applyTranform() to exclude the center image from rotation
  function applyTranform(obj) {
    // Constrain the angle of camera (between 0 and 180)
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;

    // Apply the angle
    obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";

    // Exclude the center image from rotation
    const centerImage = document.getElementById("spin-container").firstChild;
    centerImage.style.transform = "rotateY(-1)";
  }
});
